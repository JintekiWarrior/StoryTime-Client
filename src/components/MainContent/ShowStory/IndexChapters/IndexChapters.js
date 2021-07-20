import React, { Fragment, useState, useEffect } from 'react'
import { indexChapters } from './../../../../api/chapter'
import { Link } from 'react-router-dom'
import './indexChapters.scss'

const IndexChapters = (props) => {
  const [chapters, setChapters] = useState([])
  // variable to check if the chapters have been indexed
  const [isIndexed, setIsIndexed] = useState(false)

  useEffect(() => {
    indexChapters(props.user)
      .then(res => {
        setChapters(res.data.chapter)
      })
      .catch(() => {
        setIsIndexed(true)
      })
  }, [props.isUpdated])

  if (chapters.length <= 0 && isIndexed) {
    return <p id="no-chapters-message">No chapters added. Write some!</p>
  }
  // check if edit chapter is true. If it is redirect user to the edit chapter
  // page.
  return (
    <Fragment>
      {chapters.filter(chapter => {
        return chapter.story.id.toString() === props.story.toString()
      }).map(chapter => (
        <div id='chapter-container' key={chapter.id}>
          <h3 id="chapter-title">{chapter.name}</h3>
          <p id="chapter-body">{chapter.body}</p>
          <Link className="crud-link" to={`/chapter/${chapter.id}`}>Show</Link>
          <Link className="crud-link" to={`/chapter/${chapter.id}/edit`}>Edit</Link>
        </div>
      ))}
    </Fragment>
  )
}

export default IndexChapters
