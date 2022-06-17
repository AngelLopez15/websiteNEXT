import Image from "next/image";
import Link from "next/link";
import MainMenu from "./MainMenu";

function Header() {
  return (
    <header className="main-header">
      <div className="content-wrapper">
        <Link href="/">
          <Image src="/images/logo.svg" alt="Logo EDsoft" width={136} height={32} />
        </Link>
        <span id="open-menu-button" className="jam jam-menu"></span>
        <MainMenu />
      </div>
    </header>
  )
}

export default Header