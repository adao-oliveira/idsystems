import { useEffect } from 'react'
import HeaderImage from '../../assets/header.jpg'
import headerImg from "../../assets/header-img.svg";
import data from './data'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './header.css'
import Typewriter from './Typewriter';
import { HiArrowCircleRight } from 'react-icons/hi';

const Header = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, [])

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <header id="header">
      <div className="container header__container">
        {/* <div className="header__profile" data-aos="fade-in">
          <img src={HeaderImage} alt="Header Portait" />
        </div> */}
        <div className='astro' data-aos="fade-in">
          <img src={headerImg} alt="Header Img" />
        </div>
        <h1 className="primary" data-aos="fade-up">Somos a ID SYSTEMS</h1>
        <p data-aos="fade-up">
          <span className="wrap">
            <Typewriter
              className="primary"
              responsive={responsive}
              strings={[
                'Desenvolvimento WEB',
                'Consultoria de Marketing',
                'Social Media', 'WEB Design',
                'UI/UX Designer'
              ]}
              wrapperClassName="typewriterWrapper"
              cursorClassName="typewriterCursor"
            />
          </span>
        </p>
        <div className="header__cta" data-aos="fade-up">
          <a href="#contact" className='btn primary'>Vamos nos conectar <HiArrowCircleRight size={25} /></a>
          <a href="#portfolio" className='btn light'>Veja nosso portfolio</a>
        </div>
        <div className="header__socials" data-aos="fade-up">
          {
            data.map(item => <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer"><div className="header__icon">{item.icon}</div></a>)
          }
        </div>
      </div>
    </header>
  )
}

export default Header