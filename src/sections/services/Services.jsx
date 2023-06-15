import Card from '../../components/Card'
import data from './data'
import './services.css'

const Services = () => {
  return (
    <section id="services">
      <h2>Nossos serviços</h2>
      <p>Nós te oferecemos o melhor em todos os serviços abaixo</p>
      <div className="container services__container" data-aos="fade-up">
        {
          data.map(item => (
            <Card key={item.id} className="service light">
              <div className="service__icon">{item.icon}</div>
              <div className="service__details">
                <h4 className="txt-galaxy">{item.title}</h4>
                  <p>{item.desc}</p>
              </div>
            </Card>
          ))
        }
      </div>
    </section>
  )
}

export default Services