import React, { Fragment } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const ChapterForm = ({ chapter, handleSubmit, handleChange }) => (
  <Fragment>
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label className="form-label">Chapter Name</Form.Label>
        <Form.Control
          className="title-form-input"
          placeholder="Chapter Name"
          value={chapter.name}
          name="name"
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label className="form-label">Chapter Body</Form.Label>
        <Form.Control
          className="form-text-area"
          placeholder="once upon a time..."
          value={chapter.body}
          name="body"
          onChange={handleChange}
          as="textarea"
          rows={15}
        />
      </Form.Group>
      <Button className="submit-form-button" type="submit" variant="primary">Submit</Button>
    </Form>
  </Fragment>
)

export default ChapterForm
