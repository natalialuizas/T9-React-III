import React from 'react';
import './userPhoto.css'

const UserPhoto = (props) =>{
    return(
      <img 
      src={props.user.photoUrl}
      alt={props.user.photoName}
      />
    )
  }
  
  export default UserPhoto;