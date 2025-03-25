import { useState } from 'react'
import './App.css'
import { db } from '../config/firebase'
import { collection, addDoc } from "firebase/firestore"

function App() {
  const [newUser, setNewUser] = useState({
    name: '',
    email: '',
    age: '',
  })

  const addUser = async () => {
    try {
      const users = collection(db, 'users')
      const newUserRef = await addDoc(users, newUser)
      console.log('User added successfully. User ID: ', newUserRef.id)
    } catch(error) {
      console.log(error)
    }
  }

  return (
    <>
      <h1>Firebase</h1>
      <div className='container'>
        <input
          type="text"
          placeholder="Enter your name"
          value={newUser.name}
          onInput={(e) => setNewUser({
            ...newUser,
            name: e.target.value
          })}
        />
        <input
          type="email"
          placeholder="Enter your email"
          value={newUser.email}
          onInput={(e) => setNewUser({
            ...newUser,
            email: e.target.value
          })}
        />
        <input
          type="text"
          placeholder="Enter your age"
          value={newUser.age}
          onInput={(e) => setNewUser({
            ...newUser,
            age: Number(e.target.value)
          })}
        />
        <button
          onClick={addUser}
        >
          Add user
        </button>
      </div>
    </>
  )
}

export default App

/*
  # Firebase: Provides server as a solution
    - Firestore: NoSQL DB
      - Collections: Related to tables in SQL data (group of data)
      - Documents: Related to rows in SQL data (Individual records)
        - Fields: Individual data within documents
        - Documents can further have collectiion and collections can further have documents and so on ... (This is how Firestore is different from MongoDB)
      - Methods:
        - collection(): Returns a reference to Firestore collection. If a collection does not exist with the provided name, it creates a new one and then returns the reference
          - Syntax: collection(db, 'collection')
            - db: Reference to Firestore database
            - 'collection': Name of the collection
            - Returns: A reference to the Firestore collection
      - CRUD operations
        - Create (C)
          Method: addDoc(): Add a new document to a collection
            - Syntax: addDoc(collectionRef, jsonData)

    - Steps
      - To connect Firebase to React app
        1. Create a new Firebase project
        2. Add a new app within the above project to get configuration code for connecting it with React application
          - Click on the web icon (<>) and enter the name of the app and proceed
          - Firebase will provide with SDK configuration code to be added in React application
        3. Install firebase package and add the SDK configuration code to React application
      - Create and connect Firebase Firestore to React app
        1. Create a firestore DB
          - Under Build - Firestore DB - Create DB
          - Proceed with default DB ID and location
          - Select 'test' mode and proceed
        2. Connect to React application
          - Use 'getFirestore' to get a reference to firestore DB service


    - References:
      - Firebase: https://firebase.google.com/
        - Console: https://console.firebase.google.com/u/1/
      - Firestore Docs: https://firebase.google.com/docs/firestore
*/