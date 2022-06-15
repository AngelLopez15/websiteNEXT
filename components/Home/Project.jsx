import Link from "next/link";

function Project(props) {
  const {
    title,
    description,
    imagen
  } = props

  return (
    <Link href="#" className="project-item">
      <article>
        <div>
          <h4>{ title }</h4>
          <p>{ description }</p>
        </div>
        <div className="image-container">
          <img src={ imagen } alt={ title } />
        </div>
      </article>
    </Link>
  )
}

export default Project