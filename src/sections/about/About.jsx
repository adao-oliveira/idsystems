import AboutImage from '../../assets/about.jpg'
// import TERMO from '../../assets/TERMO.pdf'
import { HiDownload } from 'react-icons/hi'
import data from './data'
import Card from '../../components/Card'
import './about.css'

const About = () => {
    return (
        <section id="about" data-aos="fade-in">
            <div className="container about__container">
                <div className="about__left">
                    <div className="about__portrait">
                        <img src="https://res.cloudinary.com/robles-identity/image/upload/v1686434827/56323078-08D4-4EF9-B138-1F135291A4FA_o6lqo0.png" alt="About Image" />
                    </div>
                </div>
                <div className="about__right">
                    <h2>Sobre nós</h2>
                    <div className="about__cards">
                        {
                            data.map(item => (
                                <Card key={item.id} className="about__card">
                                    <span className='about__card-icon'>{item.icon}</span>
                                    <h5>{item.title}</h5>
                                    <small>{item.desc}</small>
                                </Card>
                            ))
                        }
                    </div>
                    <p><em>
                        Trabalhamos para que o seu negócio saia do teórico e seja praticado de forma que agregue valor a marca.
                    </em></p>
                    <p><em>
                        Dessa forma, oferecemos serviços que em conjunto geram uma <strong>IDENTIDADE</strong> forte e marcante capaz de alavancar seus objetivos e fazer com que seu negócio seja visto como algo realmente profissional e completo.
                    </em></p>
                    <a /*href={TERMO}*/ download className='btn primary'>Download Termo <HiDownload /></a>
                </div>
            </div>
        </section>
    )
}

export default About