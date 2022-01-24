import React from 'react'

import { useSelector } from 'react-redux'


import './Profile.css'

const Profile = () => {

    // ki te5dem bi redux e5dem bi redux mich 
    const user = useSelector(state => state.userReducer.user)

    // 



    return (
        <div className='profileContainer'>
            <h4>Name:{user.name} </h4>
            <h4>Email:{user.email} </h4>
            <h4>Phone: {user.phone}</h4>
        </div>
    )
}

export default Profile