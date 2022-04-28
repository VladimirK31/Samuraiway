import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { addPost, RootStateType, updateNewPostText } from './Redux/State'
import { BrowserRouter } from 'react-router-dom'

export let rerenderEnteriTree = (state: RootStateType) => {
  ReactDOM.render(
    <BrowserRouter>
      <App
        state={state}
        addPost={addPost}
        updateNewPostText={updateNewPostText}
      />
      ,
    </BrowserRouter>,
    document.getElementById('root')
  )
}