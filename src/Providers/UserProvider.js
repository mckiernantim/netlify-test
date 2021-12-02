import React, { useState, useEffect, createContext } from "react";
import { auth } from "../Services/Firebase";
export const UserContext = createContext()

export const UserProvider =  (props) => {
    const [user, setUser] = useState(null);
    
    useEffect(() => {
      auth.onAuthStateChanged(async (user) => {
        if(user){
          // console.log(user)
          const {email, displayName, photoURL, phoneNumber, uid} = user
          setUser({
            email, 
            displayName,
            photoURL,
            phoneNumber,
            uid
          })

        } else {
          setUser(null)
        }
      })

    }, [])

    return (
      <>
        <UserContext.Provider value = {user}>
          {props.children}
        </UserContext.Provider>
        </>
    ) 
}
