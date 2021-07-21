import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import { indexStory } from './../../../api/story.js'
import messages from '../../AutoDismissAlert/messages'
import SortStories from './SortStories'
import './IndexStories.scss'

// This component is used on the main content page. It is used to show all the stories
// that have been created by the user. It is passed four props.
// isCreated: to check if a story has been created to allow it to update the list.
// setIscreated: to set the iscreatd value back to false if there are no stories created
// user: the axios call needs a token
// msgAlert: to alert the user if the index has been successful or not.
const IndexStories = (props) => {
  // state variable to store the story data
  const [stories, setStories] = useState([])

  // function to handle the axios call and get all the data of stories created
  // by the user.
  const handleClick = (event) => {
    event.preventDefault()
    indexStory(props.user)
      .then(res => {
        // sets the state variable to the list of stories
        setStories(res.data.story)
        // if the variable is empty set isCreated to false which will show a message.
        // otherwise it stays true and no message pops up.
        if (stories <= 0) props.setIsCreated(false)
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

  // sets the message if no stories are created
  if (stories.length <= 0 && !props.isCreated) {
    return <p id="no-stories-message">No stories to show. Add some</p>
  }
  // render button to the screen
  return (
    <Fragment>
      <div id="show-stories-container">
        <p id="show-stories-button" onClick={handleClick} variant='primary'>Show Stories</p>
        <SortStories stories={stories} setStories={setStories} />
      </div>
      {stories.map(story => (
        <div id="story-index-container" key={story.id}>
          <Link id="story-index-link" to={`/content/${story.id}`}>{story.title}</Link>
          <datetime id="story-create-date">Date: {story.created_at.slice(0, 10)}</datetime>
        </div>
      ))}
    </Fragment>
  )
}

export default IndexStories
