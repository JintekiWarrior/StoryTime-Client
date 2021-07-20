import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import { indexStory } from './../../../api/story.js'
import messages from '../../AutoDismissAlert/messages'
import SortStories from './SortStories'
import './IndexStories.scss'

const IndexStories = (props) => {
  // state variable to store the story data
  const [stories, setStories] = useState([])
  // array to store the value of the drop down menu to sort the list
  // const [sortType, setSortType] = useState('title')

  // useEffect(() => {
  //   const sortStories = type => {
  //     const types = {
  //       title: 'title',
  //       id: 'id'
  //     }
  //     const sortProperty = types[type]
  //     console.log('this is the data', stories)
  //     const sorted = [...stories].sort((a, b) => b[sortProperty] - a[sortProperty])
  //     setStories(sorted)
  //     console.log('sorted data', stories)
  //   }
  //
  //   sortStories(sortType)
  // }, [sortType])
  // function to make a get request when button is clicked
  // useEffect(() => {}, [stories])

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
      <div id="show-stories-container">
        <p id="show-stories-button" onClick={handleClick} variant='primary'>Show Stories</p>
        <SortStories stories={stories} setStories={setStories} />
      </div>
      {stories.map(story => (
        <div id="story-index-container" key={story.id}>
          <Link id="story-index-link" to={`/content/${story.id}`}>{story.title}</Link>
        </div>
      ))}
    </Fragment>
  )
}

export default IndexStories
