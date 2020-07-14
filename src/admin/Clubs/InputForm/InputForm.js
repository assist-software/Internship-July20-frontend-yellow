import React from 'react'
import { Button, Checkbox, Form, Label } from 'semantic-ui-react'

const InputForm = (props) => (
  <Form size = 'small'>
    <Form.Field>
      <label>Name</label>
      <input placeholder={props.Name} />
    </Form.Field>
    <Form.Field>
      <label>Assign a coach</label>
      <input placeholder={props.coach} />
    </Form.Field>
    <Form.Field>
      <Label>INVITE MEMBERS (optional)</Label>
    </Form.Field>
    <Button type='submit'>Add</Button>
    <Button type='cancel'>Cancel</Button>
  </Form>
)

export default InputForm;