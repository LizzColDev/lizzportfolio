import { Container } from 'react-bootstrap'
import CardInfo from '../common/CardInfo/CardInfo'

function HomePage () {
  return (
    <Container>
      <CardInfo
        style='main-info'
        image='https://avatars.githubusercontent.com/u/109540744?v=4'
        title='About me'
        info={`I love crafting amazing interfaces on the frontend
        using ReactJS and building robust APIs on the backend with Node.js.
        Docker helps me deploy applications swiftly. Besides, I'm skilled at designing scalable databases using SQL.
        I'm always eager to improve and take on new challenges in the exciting world of web development.
        I'm all set to work on awesome projects with a fantastic team! Let's create magic together! ✨🚀`}
        btnInfo='Contact me'
      />
    </Container>
  )
}

export default HomePage
