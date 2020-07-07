import React from 'react';
import ReactDOM from 'react-dom';

function formatDate(date){
  return date.toLocaleDateString()
}


function UserPhoto(props){
  return(
    <img 
    src={props.user.photoUrl}
    alt={props.user.photoName}
    />
  )
}

function DataUser(props){
  return(
    <div>
      {props.user.name}
    </div>
  )
}

function UserInfo(props){
  return(
    <div className="UserInfo">
      <UserPhoto 
       user={props.user}
       />
       <DataUser user={props.user} />
    </div>
  )
}

const comment = {
  date: new Date(),
  comment: 'Esse é um comentário',
  author: {
    name: 'Natália',
    photoUrl: 'https://placekitten.com/g/64/64',
    photoName: 'Perfil'
  }

}


function Comments(props){
  return(
    <div className="comments">
    <UserInfo user={props.author} />
     <div>{ props.comment}</div>
     {formatDate(props.date)}
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
   <Comments 
   date={comment.date}
   comment={comment.comment}
   author={comment.author}
   />
  </React.StrictMode>,
  document.getElementById('root')
);


