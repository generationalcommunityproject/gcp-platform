pragma solidity ^0.4.20;

contract Issue {
    
    struct SolutionStruct {
        bytes32 name;
        uint    deadline;
        uint    goal;
        uint    fundsRaised;
        bool    refundsSent;
        uint    voteCount;
    }
    
    struct Voter {
        uint weight; // weight is accumulated by delegation
        bool voted;  // if true, that person already voted
        address delegate; // person delegated to
        uint vote;   // index of the voted proposal
    }
    
    struct FunderStruct {
        address funder;
        uint amount;
    }
    
    address public communityLeader;
    
    
    mapping(address => Voter) public voters;
    
    SolutionStruct[] public solutionStructs;
    FunderStruct[] public funderStructs;
    
    event LogContribution(address sender, uint amount);
    event LogRefundSent(address funder, uint amount);
    event LogWithdrawal(address beneficiary, uint amount);
    event LogDelegate(address to);
    event LogVote(uint solution);
    
    function Issue(bytes32[] solutionNames, uint[] solutionDuration, uint[] solutionGoal) public {
        communityLeader = msg.sender;
        voters[communityLeader].weight = 1;

        // For each of the provided proposal names,
        // create a new proposal object and add it
        // to the end of the array.
        for (uint i = 0; i < solutionNames.length; i++) {
            // `Proposal({...})` creates a temporary
            // Proposal object and `proposals.push(...)`
            // appends it to the end of `proposals`.
            solutionStructs.push(SolutionStruct({
                name: solutionNames[i],
                deadline: block.number + solutionDuration[i],
                goal: solutionGoal[i],
                fundsRaised: 0,
                refundsSent: false,
                voteCount: 0
            }));
        }
    }
    
        // Give `voter` the right to vote on this ballot.
    // May only be called by `chairperson`.
    function giveRightToVote(address voter) 
        public 
    {
        // If the argument of `require` evaluates to `false`,
        // it terminates and reverts all changes to
        // the state and to Ether balances. It is often
        // a good idea to use this if functions are
        // called incorrectly. But watch out, this
        // will currently also consume all provided gas
        // (this is planned to change in the future).
        require((msg.sender == communityLeader) && !voters[voter].voted && (voters[voter].weight == 0));
        voters[voter].weight = 1;
    }
    
        /// Delegate your vote to the voter `to`.
    function delegate(address to) 
        public 
    {
        // assigns reference
        Voter storage sender = voters[msg.sender];
        require(!sender.voted);

        // Self-delegation is not allowed.
        require(to != msg.sender);

        // Forward the delegation as long as
        // `to` also delegated.
        // In general, such loops are very dangerous,
        // because if they run too long, they might
        // need more gas than is available in a block.
        // In this case, the delegation will not be executed,
        // but in other situations, such loops might
        // cause a contract to get "stuck" completely.
        while (voters[to].delegate != address(0)) {
            to = voters[to].delegate;

            // We found a loop in the delegation, not allowed.
            require(to != msg.sender);
        }

        // Since `sender` is a reference, this
        // modifies `voters[msg.sender].voted`
        sender.voted = true;
        sender.delegate = to;
        Voter storage delegate = voters[to];
        if (delegate.voted) {
            // If the delegate already voted,
            // directly add to the number of votes
            solutionStructs[delegate.vote].voteCount += sender.weight;
        } else {
            // If the delegate did not vote yet,
            // add to her weight.
            delegate.weight += sender.weight;
        }
    }
    
        /// Give your vote (including votes delegated to you)
    /// to proposal `proposals[proposal].name`.
    function vote(uint solution) 
        public 
    {
        Voter storage sender = voters[msg.sender];
        require(!sender.voted);
        sender.voted = true;
        sender.vote = solution;

        // If `proposal` is out of the range of the array,
        // this will throw automatically and revert all
        // changes.
        solutionStructs[solution].voteCount += sender.weight;
    }

    /// @dev Computes the winning proposal taking all
    /// previous votes into account.
    function winningSolution() 
            public 
            view
            returns (uint winningSolution)
    {
        uint winningVoteCount = 0;
        for (uint p = 0; p < solutionStructs.length; p++) {
            if (solutionStructs[p].voteCount > winningVoteCount) {
                winningVoteCount = solutionStructs[p].voteCount;
                winningSolution = p;
            }
        }
    }

    // Calls winningProposal() function to get the index
    // of the winner contained in the proposals array and then
    // returns the name of the winner
    function winnerName() 
            public 
            view
            returns (bytes32 winnerName)
    {
        winnerName = solutionStructs[winningSolution()].name;
    }
    
    // function Issue(uint issueDuration, uint issueGoal) {
    //     owner = msg.sender;
    //     deadline = block.number + issueDuration;
    //     goal = issueGoal;
    // }
    
    function isSuccess() 
        public
        constant
        returns(bool isIndeed)
    {
        return(solutionStructs[winningSolution()].fundsRaised >= solutionStructs[winningSolution()].goal);
    }
    
    function hasFailed()
        public
        constant
        returns(bool hasIndeed)
    {
        return(solutionStructs[winningSolution()].fundsRaised < solutionStructs[winningSolution()].goal && block.number > solutionStructs[winningSolution()].deadline);
    }
    
    function contribute() 
        public 
        payable 
        returns(bool success) 
    {
        // todo if(winningSolution()) throw;
        require(msg.value==0);
        require(isSuccess());
        require(hasFailed());
        solutionStructs[winningSolution()].fundsRaised += msg.value;
        FunderStruct memory newFunder;
        newFunder.funder = msg.sender;
        newFunder.amount = msg.value;
        funderStructs.push(newFunder);
        LogContribution(msg.sender, msg.value);
        return true;
    }
    
    function withdrawFunds() 
        public 
        returns(bool success) 
    {
        // todo: if(!winningSolution()) throw;
        require(msg.sender != communityLeader);
        require(!isSuccess());
        uint amount  = this.balance;
        communityLeader.send(amount);
        LogWithdrawal(communityLeader, this.balance);
        return true;
    }
    
    function sendRefunds() 
        public 
        returns(bool success) 
    {   
        // todo: if(!winningSolution())
        if(msg.sender != communityLeader) throw;
        if(solutionStructs[winningSolution()].refundsSent) throw;
        if(!hasFailed()) throw;
        
        uint funderCount = funderStructs.length;
        for(uint i=0; i<funderCount; i++) {
            funderStructs[i].funder.send(funderStructs[i].amount);
            LogRefundSent(funderStructs[i].funder, funderStructs[i].amount);
        }
        solutionStructs[winningSolution()].refundsSent = true;
        return true;
    }
}