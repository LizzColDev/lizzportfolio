import { Container, Button } from 'react-bootstrap'

function ProjectsPage () {
  return (
    <section>
      <Container>
        <h2>Projects</h2>
        <div className='project'>
          <h3>Project 1</h3>
          <p>Description of Project 1.</p>
          <Button href='project1.html'>Learn More</Button>
        </div>
        <div className='project'>
          <h3>Project 2</h3>
          <p>Description of Project 2.</p>
          <Button href='project2.html'>Learn More</Button>
        </div>
        {/* Add more projects here */}
      </Container>
    </section>
  )
}

export default ProjectsPage
