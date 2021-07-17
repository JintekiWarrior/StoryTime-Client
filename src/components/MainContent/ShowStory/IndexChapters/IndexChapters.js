import React, { Fragment, useState, useEffect } from 'react'
import { indexChapters } from './../../../../api/chapter'

const IndexChapters = (props) => {
  const [chapters, setChapters] = useState([])

  useEffect(() => {
    indexChapters(props.user)
      .then(res => {
        console.log('these are chapters', res)
        setChapters(res.data.chapter)
        console.log('chapters state variable', chapters)
      })
  }, [])

  return (
    <Fragment>
      {chapters.filter(chapter => {
        return chapter.story.id.toString() === props.story.toString()
      }).map(chapter => (
        <div key={chapter.id}>
          <h3>{chapter.name}</h3>
          <p>{chapter.body}</p>
        </div>
      ))}
    </Fragment>
  )
}

export default IndexChapters
