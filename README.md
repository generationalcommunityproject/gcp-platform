# The Generational Community Project (GCP)

## Early Notes

- We want to do a Project for Social Good
- It's difficult to quantify corporate harm, where do we start?
  - You start by asking the community to identify issues...
  - Companies can acknowledge issues and approach the community for solutions
  - The community and other companies can propose solutions
  - Solutions can be vetted by the community
  - Contractors can approach the community with proposals
  - Proposals will get funded
- The assumption being, a corporation may be inadvertently doing harm, and wish to correct it.
  - Involving the community, eliminating bureaucracy, corporate responsibility, partnering with the community to solve problems.
- The two kinds of harm we'd like to address are social and ecological harm.

## Mission Statement

Mission Statement:  The Generational Community Project engages the community’s problem solvers with the funds to resolve social and ecological issues that are causing harm by providing solutions that will last for generations.

## Entities & Models

- Users
  - role
    - advocate

- Issues (SC)

  - advocate
  - responsible parties - array
  - remediation partner - boolean
  - proposals, accepted proposal - address
  - current funds received - integer
  - proposal deadline - date
  - voting deadline - date
  - funding deadline - date
  - selected solution

  1. issue provided by a community advocate
  1. proposal deadline
  1. voting deadline
  1. acceptance
  1. funding needs to be met
  1. once met, the contract fulfills funds for the first month to equivalent of fiat in the escrow contract to be sent to address provided by the contractor.

  - states are:
    - funded (by the responsible party)
    - approved (by the community)

- Communities

  - description - string
  - location - string
  - advocates
  - disbursement of excess
  - contingency fund (contingency)
    - helps with adoption by contractors who might be more risk averse to doing business with crypto

- Solutions

  - proposal RFP text - string field
  - total cost
  - funding schedule
    - collection of dates and deliverables and cost figures
    - dates
    - deliverable strings
    - cost figures
  - votes cast by the community
  - whoever is proposing the solution gets to propose a contingency reserve

- Reports

  - progress on solution
  - reports need to be delivered by contractors on a monthly basis to unlock the next month's funds

- SC

  - associated issue id
  - approved solution will be sent funds from that account
  - once that solution is accepted by the community
  - milestones, funding schedule, progress reports
  - monthly progress reports
  - proposed funding schedule includes reserve funds

## Deliverables

### Site

- <https://generationalcommunityproject.org>

### Social

- [Facebook](https://www.facebook.com/GenCommProj)
- [Twitter](https://twitter.com/GenCommProj)

### Branding

- Tagline: Engaging communities to help social and ecological issues by organizing solutions that will last for generations
- Logo:

![Generational Community Project Logo](https://firebasestorage.googleapis.com/v0/b/generational-community-project.appspot.com/o/home.jpg?alt=media&token=8ed3ef64-3bd1-432b-86ab-d3201f75e6a9)

## Contributing

### Install & Run

```
  git clone git@github.com:generationalcommunityproject/gcp-platform.git
  cd gcp-platform
  yarn install
  yarn start
```

And then, open your browser to: <http://localhost:8080>
