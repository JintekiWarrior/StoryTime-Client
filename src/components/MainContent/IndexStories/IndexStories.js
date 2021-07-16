import React, { Fragment } from 'react'
import { indexStory } from './../../../api/story.js'

const IndexStories = (props) => {
  // function to make a get request when button is clicked
  const handleClick = (event) => {
    event.preventDefault()
    indexStory(props.user)
      .then(res => console.log('get request response', res))
  }
  // render button to the screen
  return (
    <Fragment>
      <button onClick={handleClick}>Show Stories</button>
    </Fragment>
  )
}

export default IndexStories
