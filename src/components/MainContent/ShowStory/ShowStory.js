import React, { Fragment, useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom'
import { showStory, deleteStory } from './../../../api/story.js'
import { withRouter } from 'react-router'

import CreateChapter from './CreateChapter/CreateChapter'
import IndexChapters from './IndexChapters/IndexChapters'
import messages from '../../AutoDismissAlert/messages'
import Button from 'react-bootstrap/Button'

const ShowStory = (props) => {
  // set a state variable for the story
  const [story, setStory] = useState(null)
  // check if the story is deleted
  const [destroy, setDestroy] = useState(false)
  // state to check if the edit button was clicked
  const [edit, setEdit] = useState(false)
  // state variable to be passed to the create chapter component which will allow
  // the index component to update when changed.
  const [isUpdated, setIsUpdated] = useState(false)
  // use use effect to capture the mounting of the story component and make an
  // axios call to show that one story.
  const { id } = props.match.params
  useEffect(() => {
    showStory(id, props.user)
      .then(res => {
        console.log('I got a story', res)
        setStory(res.data.story.title)
      })
  }, [isUpdated])

  // button to go to the story update page
  const storyUpdate = () => {
    setEdit(true)
  }

  // handleclick function to delete a story when button is pressed
  const storyDestroy = () => {
    // axios call to delete the story
    deleteStory(id, props.user)
      .then(() => props.msgAlert({
        heading: 'Delete Success',
        message: messages.deleteSuccess + ' ' + story,
        variant: 'success'
      }))
      .then(() => setDestroy(true))
      .catch(error => {
        props.msgAlert({
          heading: 'Delete Failed: ' + error.message,
          message: messages.deleteFailure,
          variant: 'danger'
        })
      })
  }

  // redirect to a previous page after the story is deleted
  if (destroy) {
    return <Redirect to={'/content'}/>
  }

  if (edit) {
    return <Redirect to={`/content/${id}/edit`}/>
  }
  // render the story to the webpage
  return (
    <Fragment>
      <h2>{story}</h2>
      <IndexChapters isUpdated={isUpdated} story={id} user={props.user} />
      <Button onClick={storyDestroy}>Destroy</Button>
      <Button onClick={storyUpdate}>Edit</Button>
      <CreateChapter
        isUpdated={isUpdated}
        setIsUpdated={setIsUpdated}
        story={id} user={props.user}
        msgAlert={props.msgAlert} />
    </Fragment>
  )
}

export default withRouter(ShowStory)
