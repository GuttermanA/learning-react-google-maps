import React, {Component} from 'react'
import { Button, Checkbox, Form, Container } from 'semantic-ui-react';

class MapForm extends Component {


  render() {
    const {handleChange, handleSubmit,name, email} = this.props

    return (
      <Container>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Input placeholder='Name' name='name' value={name} onChange={handleChange} />
            <Form.Input
              placeholder='Email'
              name='email'
              value={email}
              onChange={handleChange}
            />
            <Form.Button content='Submit' />
          </Form.Group>
        </Form>
      </Container>

    )
  }

}

export default MapForm;
