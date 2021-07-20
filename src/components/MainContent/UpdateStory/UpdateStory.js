import React, { Fragment, useState } from 'react'
import { updateStory } from './../../../api/story.js'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Redirect } from 'react-router-dom'
import { withRouter } from 'react-router'
import messages from '../../AutoDismissAlert/messages'
import './UpdateStory.scss'

const UpdateStory = (props) => {
  // variable to store the updated story
  const [newStory, setNewStory] = useState('')
  // variable to check if the update was successful
  const [edit, setEdit] = useState(false)

  // sets the state of the updated story to the value in the form field.
  const handleChange = (event) => {
    setNewStory(event.target.value)
  }
  // id of the story
  const { id } = props.match.params
  // handles the axios call when submitted.
  const handleSubmit = (event) => {
    event.preventDefault()
    updateStory(id, newStory, props.user)
      .then(res => console.log('this is your response', res))
      .then(() => props.msgAlert({
        heading: 'Update Success',
        message: messages.updateSuccess,
        variant: 'success'
      }))
      .then(() => setEdit(true))
      .catch(error => {
        props.msgAlert({
          heading: 'Update Failed ' + error.message,
          message: messages.updateFailure,
          variant: 'danger'
        })
      })
  }
  if (edit) {
    return <Redirect to={`/content/${id}`}/>
  }
  // form to update the story
  return (
    <Fragment>
      <Form onSubmit={handleSubmit}>
        <Form.Label className="form-label">Update Story</Form.Label>
        <Form.Control
          className="title-form-input"
          placeholder="Title"
          name="newStory"
          onChange={handleChange}
        />
        <Button id="update-form-button" className="submit-form-button" type="submit" variant="primary">Submit</Button>
      </Form>
    </Fragment>
  )
}

export default withRouter(UpdateStory)
