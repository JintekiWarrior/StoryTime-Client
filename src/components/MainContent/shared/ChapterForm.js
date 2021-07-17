import React, { Fragment } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const ChapterForm = ({ chapter, handleSubmit, handleChange }) => (
  <Fragment>
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Chapter Name</Form.Label>
        <Form.Control
          placeholder="Chapter Name"
          value={chapter.name}
          name="name"
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Chapter Body</Form.Label>
        <Form.Control
          placeholder="once upon a time..."
          value={chapter.body}
          name="body"
          onChange={handleChange}
          as="textarea"
          row={5}
        />
      </Form.Group>
      <Button type="submit" variant="primary">Submit</Button>
    </Form>
  </Fragment>
)

export default ChapterForm
