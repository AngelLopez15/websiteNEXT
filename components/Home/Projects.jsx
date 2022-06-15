import Project from "./Project";

function Projects(props) {
  const {
    projects
  } = props

  return (
    <section className="section-container last-projects">
      <h2>Últimos proyectos</h2>
      <div className="content-wrapper">
        {
          projects &&
          projects.map(project => (
            <Project
              key={ project.id }
              title={ project.title }
              description={ project.description }
              imagen={ project.imagen }
            />
          ))
        }
      </div>
    </section>
  )
}

export default Projects