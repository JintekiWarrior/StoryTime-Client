import React, { Fragment, useState } from 'react'
import ChapterForm from './../../shared/ChapterForm'
import { withRouter } from 'react-router'
import { updateChapter } from './../../../../api/chapter'
import messages from './../../../AutoDismissAlert/messages'

const UpdateChapter = (props) => {
  // state variable to store the updated information
  const [chapter, setChapter] = useState({ name: '', body: '' })

  // get the id of the chapter
  const { id } = props.match.params
  // function to handle the from inputs
  const handleChange = (event) => {
    event.persist()
    setChapter(prevChapter => {
      const updatedField = { [event.target.name]: event.target.value }
      const editedChapter = Object.assign({}, prevChapter, updatedField)
      return editedChapter
    })
  }
  // axios call to send the data
  const handleSubmit = (event) => {
    event.preventDefault()
    updateChapter(chapter.name, chapter.body, id, props.user)
      .then(() => props.msgAlert({
        heading: 'Update Success',
        message: messages.updateChapterSuccess,
        variant: 'success'
      }))
      .catch(error => {
        props.msgAlert({
          heading: 'Update Failed: ' + error.message,
          message: messages.updateChapterFailure,
          variant: 'danger'
        })
      })
  }
  console.log(id)
  // success message and redirect
  return (
    <Fragment>
      <ChapterForm
        chapter={chapter}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </Fragment>
  )
}

export default withRouter(UpdateChapter)
