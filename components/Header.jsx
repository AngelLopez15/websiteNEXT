import Link from "next/link";
import MainMenu from "./MainMenu";

function Header() {
  return (
    <header className="main-header">
      <div className="content-wrapper">
        <Link href="/">
          <img src="/images/logo.svg" alt="Logo EDsoft" />
        </Link>
        <span id="open-menu-button" className="jam jam-menu"></span>
        <MainMenu />
      </div>
    </header>
  )
}

export default Header