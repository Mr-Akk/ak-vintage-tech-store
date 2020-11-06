// user context
import React, { useState } from 'react'

export const UserContext = React.createContext();

const UserProvider = (props) => {
    let [alert , setAlert] = useState({show : false , type : '' , msg : ""})

    let hideAlert = () =>{
        setAlert({show:false , type : ''})
    }
    let [userobj , setuserobj] = useState(()=>{
        return localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : {username : null , token : null}
    })

    let loginuser  = user =>{
        // console.log(user,"I am user from context");
        setuserobj(user);
        localStorage.setItem('user',JSON.stringify(user))

    }
    let logoutuser = () =>{
                setuserobj({username : null , token : null});
                localStorage.removeItem('user');
    }
    return (
        <UserContext.Provider value={{loginuser , alert , hideAlert , setAlert , userobj , logoutuser}}>
                {props.children}
        </UserContext.Provider>
    )
}

export default UserProvider
