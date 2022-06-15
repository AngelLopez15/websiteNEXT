import Link from "next/link";

function MainMenu() {
  return (
    <nav id="main-menu" className="main-menu">
      <span id="close-menu-button" className="jam jam-close"></span>
      <ul>
        <li>
          <Link href="/">Inicio</Link>
        </li>
        <li>
          <Link href="/quienes-somos">¿Quiénes somos?</Link>
        </li>
        <li>
          <Link href="/proyectos">Proyectos</Link>
        </li>
        <li>
          <Link href="/contacto">Contacto</Link>
        </li>
      </ul>
    </nav>
  )
}

export default MainMenu