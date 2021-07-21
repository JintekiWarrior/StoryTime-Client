import React, { Fragment, useEffect, useState } from 'react'
import { showChapter, deleteChapter } from './../../../../api/chapter'
import { withRouter } from 'react-router-dom'
import messages from './../../../AutoDismissAlert/messages'
import './ShowChapter.scss'

import Button from 'react-bootstrap/Button'

const ShowChapter = (props) => {
  // state variable to hold the information
  const [chapter, setChapter] = useState({ name: '', body: '' })
  // state to check if item is deleted and go back to the previous page.
  const [chapterDeleted, setChapterDeleted] = useState(false)
  // axios request to show the single chapter
  const { id } = props.match.params
  useEffect(() => {
    showChapter(id, props.user)
      .then(res => {
        setChapter({ name: res.data.chapter.name, body: res.data.chapter.body })
      })
  }, [])
  const chapterDelete = (event) => {
    event.preventDefault()
    deleteChapter(id, props.user)
      .then(() => props.msgAlert({
        heading: 'Delete Success',
        message: messages.deleteChapterSuccess,
        variant: 'success'
      }))
      .then(() => setChapterDeleted(true))
      .catch(error => {
        props.msgAlert({
          heading: 'Delete Failed: ' + error.message,
          message: messages.deleteChapterFailure,
          variant: 'danger'
        })
      })
  }

  if (chapterDeleted) {
    props.history.goBack()
  }
  // render the content to the page
  return (
    <Fragment>
      <h3 id="chapter-title">{chapter.name}</h3>
      <p id="chapter-body">{chapter.body}</p>
      <Button id="delete-chapter-button" onClick={chapterDelete}>Delete</Button>
    </Fragment>
  )
}

export default withRouter(ShowChapter)
