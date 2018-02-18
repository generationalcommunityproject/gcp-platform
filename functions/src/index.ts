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
  if (request.method !== 'POST') {
    response.status(500)
  } else {
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

      const doc = await docRef.get()
      response.status(200).json(doc.data())
      console.info(
        `User ${displayName} with email ${email} signed up successfully!`
      )
    } catch (error) {
      response.status(400).send(error)
      console.error('Error creating new user:', error)
    }
  }
})

interface Community {
  description: string
  location: string
}

export const communities = functions.https.onRequest(
  async (request, response) => {
    switch (request.method) {
      case 'GET': {
        try {
          if (request.body.length) {
            const {id} = JSON.parse(request.body)

            assert.isString(id)
            assert.isNotEmpty(id)

            const doc = await db
              .collection('Communities')
              .doc(id)
              .get()

            if (doc) {
              response.status(200).json(doc.data())
            } else {
              response.status(404)
            }
          } else {
            const docs = await db.collection('Communities').get()
            response.status(200).json(docs)
          }
        } catch (err) {
          console.error(err)
        }
        break
      }
      case 'POST': {
        try {
          const {description, location}: Community = JSON.parse(request.body)

          assert.isString(description)
          assert.isString(location)
          assert.isNotEmpty(description)
          assert.isNotEmpty(location)

          // TODO auth

          const docRef = await db.collection('Community').add({
            description,
            location,
          })

          response.status(200).json({id: docRef.id})
          console.info(`Community ${location} added!`)
        } catch (error) {
          response.status(400).send(error)
          console.error('Error creating new user:', error)
        }
        break
      }
      default: {
        response.status(500)
      }
    }
  }
)
