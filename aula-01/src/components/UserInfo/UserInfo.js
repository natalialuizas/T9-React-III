import React from 'react';
import './userInfo.css'
import UserPhoto from '../UserPhoto/UserPhoto'
import DataUser from '../DataUser/DataUser'

const UserInfo = (props) => {
    return(
      <div className="UserInfo">
        <UserPhoto 
         user={props.user}
         />
         <DataUser user={props.user} />
      </div>
    )
  }

export default UserInfo;