import React from 'react'
import Comments from '../../components/Comments/Comments'

const TimeLine = () => {
    return(
        <Comments 
        date={comment.date}
        comment={comment.comment}
        author={comment.author}
        />
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

export default TimeLine;