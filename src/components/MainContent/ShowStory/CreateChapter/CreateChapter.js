import React, { Fragment, useState } from 'react'
import { withRouter } from 'react-router'
import ChapterForm from './../../shared/ChapterForm'
import { createChapter } from './../../../../api/chapter'
import Button from 'react-bootstrap/Button'
import messages from './../../../AutoDismissAlert/messages'
import './CreateChapter.scss'

const CreateChapter = (props) => {
  // add state to check if the user wants to show the chapter form
  const [chapterFormShow, setChapterFormShow] = useState(false)
  // set a state variable for the chapter data
  const [chapter, setChapter] = useState({ name: '', body: '' })
  // set a state variable to check if the story has been submitted

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
    createChapter(chapter.name, chapter.body, props.story, props.user)
      .then(() => props.msgAlert({
        heading: 'Create Success',
        message: messages.createChapterSuccess,
        variant: 'success'
      }))
      .then(() => props.setIsUpdated(true))
      .catch(error => {
        props.msgAlert({
          heading: 'Create Failed: ' + error.message,
          message: messages.createChapterFailure,
          variant: 'danger'
        })
      })
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
      <Button id="add-chapter-button" onClick={showChapterForm} variant="primary">Add Chapter</Button>
    </Fragment>
  )
}

export default withRouter(CreateChapter)
