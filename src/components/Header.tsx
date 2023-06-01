import { header, link, logo } from './Header.css'
const Header = () => {
  return (
    <nav className={header}>
      <img className={logo} src='https://cdn-icons-png.flaticon.com/512/1230/1230239.png?w=740&t=st=1685578575~exp=1685579175~hmac=ad1c9c2ba3d28e776fee5360010317265b0056c8129d6d8b0c70b6e0f3bbd371' alt='logo tomado de freepick' />
      <a className={link} href='/'>Portfolio</a>
    </nav>
  )
}

export { Header }
