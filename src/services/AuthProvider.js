import React, { createContext, useState } from 'react'
import { Alert } from 'react-native'
import auth, { firebase } from '@react-native-firebase/auth'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    return (
        <AuthContext.Provider
            value={{
                user,
                setUser,
                anonymous: async () => {
                    try {
                        await auth().signInAnonymously()
                    } catch(e) {
                        console.log(e)
                    }
                },
                login : async (email, password) => {
                    try {
                        await auth().signInWithEmailAndPassword(email, password)
                    } catch(e) {
                        console.log(e)
                        Alert.alert('Email/Password Salah')
                    }
                },
                register: async (email, password) => {
                    try {
                        const cred = firebase.auth.EmailAuthProvider.credential(email, password)
                        //await auth().createUserWithEmailAndPassword(email, password)
                        await firebase.auth().currentUser.linkWithCredential(cred)
                    } catch(e) {
                        console.log(e)
                    }
                },
                logout: async () => {
                    try {
                        await auth().signOut()
                    } catch(e) {
                        console.log(e)
                    }
                }
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}



