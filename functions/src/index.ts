import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'
import {assert} from 'chai'

admin.initializeApp(functions.config().firebase)

const db = admin.firestore()

enum Role {
  communityAdvocate = 'communityAdvocate',
  solutionProvider = 'solutionProvider',
  responsibleParty = 'responsibleParty',
}

interface UserRegistration {
  email: string
  displayName: string
  password: string
  community: string
  about: string
  role: Role
}

export const register = functions.https.onRequest(async (request, response) => {
  try {
    const {
      email,
      displayName,
      password,
      community,
      about,
      role,
    }: UserRegistration = JSON.parse(request.body)

    assert.isString(email)
    assert.isString(displayName)
    assert.isString(password)
    assert.isString(community)
    assert.isString(about)
    assert.isString(role)
    assert.isNotEmpty(email)
    assert.isNotEmpty(displayName)
    assert.isNotEmpty(password)
    assert.isNotEmpty(community)
    assert.isNotEmpty(about)
    assert.isNotEmpty(role)

    const userRecord = await admin.auth().createUser({
      email,
      password,
      displayName,
      emailVerified: false,
      disabled: false,
    })

    const docRef = await db.collection('User').add({
      id: userRecord.uid,
      email,
      displayName,
      community,
      about,
      role,
    })

    const userDoc = await docRef.get()

    response.status(200).json(userDoc.data())
    console.info(
      `User ${displayName} with email ${email} signed up successfully!`
    )
  } catch (error) {
    response.status(400).send(error)
    console.error('Error creating new user:', error)
  }
})
