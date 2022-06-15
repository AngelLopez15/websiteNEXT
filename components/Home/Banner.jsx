import Link from "next/link";

function Banner() {
  return (
    <section className="main-banner section-container">
      <div className="content-wrapper content">
        <div className="container">
          <h1 className="title">Bienvenidos a AngelWeb</h1>
          <p className="subtitle">Necesitas acesoramiento urgente!!! Nosotros te podemos ayudar en la construcción de tu sitio web.</p>
          <div>
            <Link className="button white" href="/contacto">Escríbenos ya mismo!</Link>
          </div>
        </div>
        <div className="container">
          <img className="image" src="/images/computer.svg" alt="Computadora AngelWeb" />
        </div>
      </div>
    </section>
  )
}

export default Banner