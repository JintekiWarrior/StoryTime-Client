import React, { Fragment, useState } from 'react'
import { createStory } from './../../../api/story.js'

const CreateStory = (props) => {
  // make a state to create a story
  const [story, setStory] = useState('')

  // function to handle when the input field is changed
  const handleChange = (event) => {
    setStory(event.target.value)
  }
  // will add a function to handle a submit for when the story is created.
  const handleSubmit = (event) => {
    // prevent the page from rendering whenever the button is clicked
    event.preventDefault()
    console.log('from the component', props.user.token)
    // axios call to make a post request to the backend server
    createStory(story, props.user)
      .then(res => console.log('this is the created story ', res))
  }
  // add a fragment to return the form and submit button to create the story.
  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Title"
          value={story}
          name="storyTitle"
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </Fragment>
  )
}

export default CreateStory
