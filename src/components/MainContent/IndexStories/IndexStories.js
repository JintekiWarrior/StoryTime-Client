import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import { indexStory } from './../../../api/story.js'
import messages from '../../AutoDismissAlert/messages'
import SortStories from './SortStories'
import './IndexStories.scss'

const IndexStories = (props) => {
  // state variable to store the story data
  const [stories, setStories] = useState([])

  const handleClick = (event) => {
    event.preventDefault()
    indexStory(props.user)
      .then(res => {
        setStories(res.data.story)
        stories <= 0 ? props.setIsCreated(false) : props.setIsCreated(true)
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
