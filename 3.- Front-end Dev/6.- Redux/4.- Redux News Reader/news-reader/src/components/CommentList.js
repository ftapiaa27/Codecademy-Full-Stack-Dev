import React from 'react';
import Comment from './Comment';

export default function CommentList({ comments }) {
  if (!comments) {
    return null;
  }
  
  return (
    <ul className='comments-list'>
      {comments.map(comment => 
        <Comment comment={comment}/>
      )}
    </ul>
  );
}
