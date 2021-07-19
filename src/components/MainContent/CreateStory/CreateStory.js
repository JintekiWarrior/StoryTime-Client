import React, { Fragment, useState } from 'react'
import { createStory } from './../../../api/story.js'
import messages from '../../AutoDismissAlert/messages'
import './CreateStory.scss'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const CreateStory = (props) => {
  // make a state to create a story
  const [story, setStory] = useState('')
  // function to handle when the input field is changed
  const handleChange = (event) => {
    setStory(event.target.value)
  }

  // will add a function to handle a submit for when the story is created.
  const handleSubmitStory = (event) => {
    // prevent the page from rendering whenever the button is clicked
    event.preventDefault()
    // axios call to make a post request to the backend server
    createStory(story, props.user)
      .then(() => props.msgAlert({
        heading: 'Create Successful',
        message: messages.createSuccess,
        variant: 'success'
      }))
      .then(setStory(''))
      .catch(error => {
        props.msgAlert({
          heading: 'Creation Failed: ' + error.message,
          message: messages.createFailure,
          variant: 'danger'
        })
      })
  }

  // add a fragment to return the form and submit button to create the story.
  return (
    <Fragment>
      <Form onSubmit={handleSubmitStory}>
        <Form.Label className="form-label">Story Title</Form.Label>
        <Form.Control
          className="title-form-input"
          placeholder="Story Title"
          value={story}
          name="storyTitle"
          onChange={handleChange}
        />
        <Button className="submit-form-button" id="create-story-submit" type="submit" variant="primary">Submit</Button>
      </Form>
    </Fragment>
  )
}

export default CreateStory
