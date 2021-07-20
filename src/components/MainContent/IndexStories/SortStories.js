import React, { Fragment, useEffect, useState } from 'react'

const SortStories = (props) => {
  // const [data, setData] = useState(props.stories)
  const [sortType, setSortType] = useState('')

  useEffect(() => {
    const sortStories = type => {
      const types = {
        title: 'title',
        id: 'id'
      }
      const sortProperty = types[type]
      console.log('this is the data', props.stories)
      const sorted = [...props.stories].sort((a, b) => {
        console.log('type', typeof parseInt(a), a)
        if (parseInt(a[sortProperty])) {
          return a === b ? 0 : a > b ? 1 : -1
        }
        const x = a[sortProperty].toUpperCase()
        const y = b[sortProperty].toUpperCase()
        // console.log('data types', b[type], a[type])
        return x === y ? 0 : x > y ? 1 : -1
      })
      props.setStories(sorted)
      console.log('sorted data', sorted)
    }
    sortStories(sortType)
  }, [sortType])

  return (
    <Fragment>
      <select name="sort" onChange={(event) => setSortType(event.target.value)} id="select-menu">
        <option value="sort">Sort</option>
        <option value="title">Title</option>
        <option value="id">Created</option>
      </select>
    </Fragment>
  )
}

export default SortStories
