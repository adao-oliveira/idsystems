import {links} from './data'
import './footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="container footer__container">
        <ul className='nav__menu'>
          {
            links.map(fLink => <li key={fLink.id}><a href={fLink.link}>{fLink.title}</a></li>)
          }
        </ul>
      </div>
      <div className="footer__copyright">
        <small>2023 ID SYSTEMS &copy; Todos os direitos reservados</small>
      </div>
    </footer>
  )
}

export default Footer