import React, { Fragment, useEffect, useState } from 'react'
import { showChapter } from './../../../../api/chapter'
import { withRouter } from 'react-router-dom'

const ShowChapter = (props) => {
  // state variable to hold the information
  const [chapter, setChapter] = useState({ name: '', body: '' })
  // axios request to show the single chapter
  const { id } = props.match.params
  useEffect(() => {
    showChapter(id, props.user)
      .then(res => {
        setChapter({ name: res.data.chapter.name, body: res.data.chapter.body })
      })
  }, [])
  // render the content to the page
  console.log('chapter:', chapter)
  return (
    <Fragment>
      <h3>{chapter.name}</h3>
      <p>{chapter.body}</p>
    </Fragment>
  )
}

export default withRouter(ShowChapter)
