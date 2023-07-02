import { Container, Form, Button } from 'react-bootstrap'

function ContactPage () {
  return (
    <section>
      <Container>
        <h2>Contact</h2>
        <Form>
          <Form.Group controlId='name'>
            <Form.Label>Name:</Form.Label>
            <Form.Control type='text' required />
          </Form.Group>
          <Form.Group controlId='email'>
            <Form.Label>Email:</Form.Label>
            <Form.Control type='email' required />
          </Form.Group>
          <Form.Group controlId='message'>
            <Form.Label>Message:</Form.Label>
            <Form.Control as='textarea' rows={3} required />
          </Form.Group>
          <Button type='submit'>Send</Button>
        </Form>
      </Container>
    </section>
  )
}

export default ContactPage
