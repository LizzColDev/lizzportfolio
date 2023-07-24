import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import './CardInfo.css'
import SocialMediaBtns from '../../UI/SocialMediaBtns/SocialMediaBtns'

interface CardInfoProps {
  style: string
  info: string
  title: string
  image: string
  btnInfo: string
}

function CardInfo (props: CardInfoProps) {
  return (
    <Card className={`card-info-container ${props.style}`}>
      {props.style === 'main-info' &&
        <Card.Img className='card-image' variant='top' src={props.image} />}
      <Card.Body className={`contain-info ${props.style}`}>
        <Card.Title className='card-title'>{props.title}</Card.Title>
        <Card.Text className={`card-contain-description ${props.style}`}>
          {props.info}
        </Card.Text>
        {props.style === 'social-media-info'
          ? <SocialMediaBtns />
          : <Button variant='primary'>{props.btnInfo}</Button>}

      </Card.Body>
    </Card>
  )
}

export default CardInfo
