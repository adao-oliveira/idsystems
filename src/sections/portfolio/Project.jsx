import Card from '../../components/Card'


const Project = ({project}) => {
  return (
    <Card className="portfolio__project">
        <div className="portfolio__project-image">
            <img src={project.image} alt="Imagens Portfolio" />
        </div>
        <h4>{project.title}</h4>
        <p>{project.desc}</p>
        <div className="portfolio__project-cta">
            <a href={project.demo} className="btn sm" target="_blank" rel="noopener noreferrer">Demonstração</a>
        </div>
    </Card>
  )
}

export default Project