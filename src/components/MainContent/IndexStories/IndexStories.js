import React, { Fragment, useState } from 'react'
import { indexStory } from './../../../api/story.js'
import messages from '../../AutoDismissAlert/messages'

import Button from 'react-bootstrap/Button'

const IndexStories = (props) => {
  // state variable to store the story data
  const [stories, setStories] = useState([])
  // function to make a get request when button is clicked
  const handleClick = (event) => {
    event.preventDefault()
    indexStory(props.user)
      .then(res => {
        setStories(res.data.story)
        console.log('these are stories.', stories)
      })
      .then(() => props.msgAlert({
        heading: 'Index Successful',
        message: messages.indexSuccess,
        variant: 'success'
      }))
      .catch(error => {
        props.msgAlert({
          heading: 'Creation Failed: ' + error.message,
          message: messages.indexFailure,
          variant: 'danger'
        })
      })
  }
  // render button to the screen
  return (
    <Fragment>
      <Button onClick={handleClick} variant='primary'>Show Stories</Button>
      {stories.map(story => (
        <h3 key={story.id}>{story.title}</h3>
      ))}
    </Fragment>
  )
}

export default IndexStories
