import React, { Fragment, useState, useEffect } from 'react'
import { indexChapters } from './../../../../api/chapter'
import { Link } from 'react-router-dom'
import './indexChapters.scss'

const IndexChapters = (props) => {
  const [chapters, setChapters] = useState([])
  // Add a state variable to check if the user wants to edit the chapter.

  useEffect(() => {
    indexChapters(props.user)
      .then(res => {
        console.log('these are chapters', res)
        setChapters(res.data.chapter)
        console.log('chapters state variable', chapters)
      })
  }, [props.isUpdated])

  // check if edit chapter is true. If it is redirect user to the edit chapter
  // page.
  return (
    <Fragment>
      {chapters.filter(chapter => {
        return chapter.story.id.toString() === props.story.toString()
      }).map(chapter => (
        <div id='chapter-container' key={chapter.id}>
          <h3>{chapter.name}</h3>
          <p>{chapter.body}</p>
          <Link to={`/chapter/${chapter.id}`}>Show</Link>
          <Link to={`/chapter/${chapter.id}/edit`}>Edit</Link>
        </div>
      ))}
    </Fragment>
  )
}

export default IndexChapters
