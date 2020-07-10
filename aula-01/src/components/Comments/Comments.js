import React from 'react';
import './comments.css'
import UserInfo from '../UserInfo/UserInfo'
import formatDate  from '../../util/format'


const Comments = (props) => {
    return(
      <div className="comments">
      <UserInfo user={props.author} />
       <div>{ props.comment}</div>
       {formatDate(props.date)}
      </div>
    )
  }

export default Comments