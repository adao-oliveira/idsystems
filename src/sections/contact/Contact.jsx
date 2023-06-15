import contacts from './data'
import './contact.css'

const Contact = () => {
  return (
    <section id="contact">
      <h2>Entrar em contato</h2>
      <p>
      Envie-nos uma mensagem através de qualquer um dos links abaixo!
      </p>
      <div className="container contact__container" data-aos="fade-up">
        {
          contacts.map(contact => <a key={contact.id} href={contact.link} target="_blank" rel="noopener noreferrer">{contact.icon}</a>)
        }
      </div>
    </section>
  )
}

export default Contact