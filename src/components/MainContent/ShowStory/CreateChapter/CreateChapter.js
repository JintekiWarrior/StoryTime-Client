import React, { Fragment, useState } from 'react'
import { withRouter } from 'react-router-dom'
import ChapterForm from './../../shared/ChapterForm'
import { createChapter } from './../../../../api/chapter'
import Button from 'react-bootstrap/Button'

const CreateChapter = (props) => {
  // add state to check if the user wants to show the chapter form
  const [chapterFormShow, setChapterFormShow] = useState(false)
  // set a state variable for the chapter data
  const [chapter, setChapter] = useState({ name: '', body: '' })

  const handleChange = (event) => {
    event.persist()
    setChapter(prevChapter => {
      const updatedField = { [event.target.name]: event.target.value }
      const editedChapter = Object.assign({}, prevChapter, updatedField)
      return editedChapter
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('chapter', chapter.name)
    console.log('body', chapter.body)
    console.log('storyId', props.story)
    console.log('user', props.user)
    createChapter(chapter.name, chapter.body, props.story, props.user)
  }

  // handler function for the add chapter button
  const showChapterForm = (event) => {
    event.preventDefault()
    setChapterFormShow(true)
  }

  if (chapterFormShow) {
    return (
      <ChapterForm
        chapter={chapter}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    )
  }
  return (
    <Fragment>
      <Button onClick={showChapterForm} variant="primary">Add Chapter</Button>
    </Fragment>
  )
}

export default withRouter(CreateChapter)
