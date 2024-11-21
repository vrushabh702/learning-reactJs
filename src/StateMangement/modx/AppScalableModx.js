import { Dialog } from "@mui/material";
import React from "react";
import { provider, useInstance } from "react-ioc";
import {  Link, Route, Routes } from "react-router-dom";
import {  makeAutoObservable, observable } from "mobx"
// import {observer} from 'modx-react-lite'

class UserModalViewStore{
    opened = false;
    
    constructor(){
        makeAutoObservable(this,undefined,{autoBind:true});
    }

    open(){
        this.opened = true;
    }
    close(){
        this.opened = false;
    }
}   
// -----------------------------------------------------------------------------------
const UsersList = () =>{
    const modalStore = useInstance(UserModalViewStore)
    return (
        <div>
            <button onClick={modalStore.open}> Add New User</button>
            <ul>
                <li>First name and Last name</li>
            </ul>
        </div>
    )
}
// -----------------------------------------------------------------------------------
const UserModal = observable(() =>{
    const store = useInstance(UserModalViewStore)
    return <Dialog open={store.opened} onClose={store.close} >The form for adding new user</Dialog>
});

// -----------------------------------------------------------------------------------
 const UserModule = provider(
    UserModalViewStore,

 )(() =>{
    return (
        <>
            <Routes>
                <Route path="/" element={<UsersList/>}></Route>
            </Routes>
            <UserModal />
        </>
    )
}) 
// -----------------------------------------------------------------------------------

export const AppScalableModx = () =>{
    return (
        <Routes>
            <Route path="/users/*" element={<UserModule/>} />
            <Route path="/*" element={<Link to='/users'>Go to Users!!!</Link>} />
        </Routes>
    )
}