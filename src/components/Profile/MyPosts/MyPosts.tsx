import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'
const MyPosts = () => {
  return (
    <div>
      <div>My posts</div>
      <textarea></textarea>
      <button>Add Post</button>
      <div className={s.posts}>
        <Post message="How are you?" likesCount="15" />
        <Post message="It's my first post!" likesCount="10" />
      </div>
    </div>
  )
}

export default MyPosts