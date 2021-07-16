import React from 'react'
import CreateStory from './CreateStory/CreateStory'
import IndexStories from './IndexStories/IndexStories'

const MainContent = (props) => {
  return (
    <React.Fragment>
      <CreateStory user={props.user} />
      <IndexStories user={props.user} />
    </React.Fragment>
  )
}

export default MainContent
