import React, { Fragment, useEffect, useState } from 'react'
import './IndexStories.scss'

const SortStories = (props) => {
  // const [data, setData] = useState(props.stories)
  const [sortType, setSortType] = useState('')

  // use effect to check if the sort is pushed and dynamically update the stories
  // list.
  useEffect(() => {
    // function which sorts the stories list by title or id.
    const sortStories = type => {
      const types = {
        title: 'title',
        id: 'id'
      }
      // variable to store the object that is selected.
      const sortProperty = types[type]
      // sort variable which takes a copy of stories, a list of objects and sorts
      // them The code is written to check if the sorted elements are strings or
      // integers as the sort function works differently for each.
      const sorted = [...props.stories].sort((a, b) => {
        if (parseInt(a[sortProperty])) {
          return a === b ? 0 : a > b ? 1 : -1
        }
        if (!a[sortProperty]) {
          return
        }
        const x = a[sortProperty].toUpperCase()
        const y = b[sortProperty].toUpperCase()
        return x === y ? 0 : x > y ? 1 : -1
      })
      props.setStories(sorted)
    }
    // sets the sort property to the sort type, so that a dunamic update can occur.
    sortStories(sortType)
  }, [sortType])

  // renders the sort selector.
  return (
    <Fragment>
      <select name="sort" onChange={(event) => setSortType(event.target.value)} id="select-menu">
        <option value="sort">Sort</option>
        <option value="title">Title</option>
        <option value="id">Date desc</option>
      </select>
    </Fragment>
  )
}

export default SortStories
