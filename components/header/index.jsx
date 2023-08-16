import Image from "next/image"
import Logo from "../../public/images/logo.svg"

import Link from "next/link"

const Header = () => {
  return (
    <div className="container">
      <div className="logotipo">
        <Image src={Logo} />
      </div>
      <div className="menu">
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">O que fazemos</Link>
          </li>
          <li>
            <Link href="/">Cases</Link>
          </li>
        </ul>
      </div>
      <div className="action"></div>
    </div>
  )
}

export default Header