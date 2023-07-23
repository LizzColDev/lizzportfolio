import Button from 'react-bootstrap/Button'
import { ButtonGroup } from 'react-bootstrap'
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa'
import './SocialMediaBtns.css'
function SocialMediaBtns () {
  return (

    <ButtonGroup size='lg' className='mb-2'>
      <Button className='social-media-btns' as='a' href='https://github.com/LizzColDev' target='_blank' rel='noopener noreferrer'>
        <FaGithub size={30} />
      </Button>
      <Button className='social-media-btns' as='a' href='https://twitter.com/Lizzie_2824' target='_blank' rel='noopener noreferrer'>
        <FaTwitter size={30} />
      </Button>
      <Button className='social-media-btns' as='a' href='https://www.linkedin.com/in/lizz-quint/' target='_blank' rel='noopener noreferrer'>
        <FaLinkedin size={30} />
      </Button>
    </ButtonGroup>

  )
}

export default SocialMediaBtns
