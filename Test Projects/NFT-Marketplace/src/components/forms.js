import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { InputGroup, FormControl, Button, Form } from 'react-bootstrap';

const handleSubmit=event=>{
    event.preventDefault();
}
const Forms=(props)=>{
    return (
<Form onSubmit={handleSubmit} >
  <InputGroup className="mb-3">
      <InputGroup.Text>@</InputGroup.Text>
      <FormControl placeholder="Username" aria-label="Username" />
  </InputGroup>
  <InputGroup className="mb-3">
      <InputGroup.Text>123</InputGroup.Text>
      <FormControl placeholder="Password" aria-label="Password" />
  </InputGroup>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>  );
}
export default Forms;