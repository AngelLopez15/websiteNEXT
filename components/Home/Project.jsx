import Link from "next/link";
import Image from "next/image";

function Project(props) {
  const {
    title,
    description,
    imagen
  } = props

  // El componente IMAGE tamnbien cuenta con la propiedad layout
  // Si escogemos que el tipo sea fill va a rellenar con la imagen 
  // de acuerdo al tamaño de su contenedor padre. Entonces ya no es necesario
  // poner el width ni el heigth

  return (
    <Link href="#" className="project-item">
      <article>
        <div>
          <h4>{ title }</h4>
          <p>{ description }</p>
        </div>
        <div className="image-container">
          <Image src={ imagen } alt={ title } layout="fill" />
        </div>
      </article>
    </Link>
  )
}

export default Project