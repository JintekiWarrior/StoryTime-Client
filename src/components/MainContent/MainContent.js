import React, { useState } from 'react'
import CreateStory from './CreateStory/CreateStory'
import IndexStories from './IndexStories/IndexStories'

const MainContent = (props) => {
  // check if a story has been created to update the message if one hasn't
  const [isCreated, setIsCreated] = useState(true)
  return (
    <React.Fragment>
      <CreateStory isCreated={isCreated} setIsCreated={setIsCreated} user={props.user} msgAlert={props.msgAlert}/>
      <IndexStories isCreated={isCreated} setIsCreated={setIsCreated} user={props.user} msgAlert={props.msgAlert} />
    </React.Fragment>
  )
}

export default MainContent
