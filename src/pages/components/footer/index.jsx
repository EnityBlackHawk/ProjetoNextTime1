import Link from "next/link";
import Image from "next/image";
import Styles from "./footer.module.scss";
import Logo from "/public/images/logo.svg";
import IconInstagram from "/public/icons/icon-instagram.svg";
import IconFacebook from "/public/icons/icon-facebook.svg";
import IconLinkedin from "/public/icons/icon-linkedin.svg";
import IconYoutube from "/public/icons/icon-youtube.svg";
import RotatingGears from "../rotatingGears";

const Footer = () => {
  return (
    <div className={Styles.container}>
      <div className={`${Styles.column} ${Styles.columnPrincipal}`}>
        <Link href="#header"> 
          <Image src={Logo} alt="Logo" />
        </Link>
        <h1 className={Styles.title}>0800 800 800</h1>
        <p>comercial@time1.indhuge.com.br</p>
      </div>
      <div className={Styles.column}>
        <h1>MENU</h1>
        <div className={Styles.footer_nav}>
          <Link className={Styles.footer_links} href="https://google.com"  >Quem somos</Link>
          <Link className={Styles.footer_links} href="https://google.com"  >Cases</Link>
        </div>
      </div>
      <div className={Styles.column}>
        <h1>CONTEÚDO</h1>
        <div className={Styles.footer_nav}>
          <Link className={Styles.footer_links} href="https://google.com"  >Blogs</Link>
          <Link className={Styles.footer_links} href="https://google.com"  >Fórmulas prontas</Link>
        </div>
      </div>
      <div className={`${Styles.column} ${Styles.alignRight}`}>
        <h1>SOCIAL</h1>
        <div className={Styles.icons}>
          <Link className={Styles.footer_links}  href="https://www.instagram.com/">
            <Image src={IconInstagram} alt="Icon" className={Styles.icon} />
          </Link>
          <Link className={Styles.footer_links}  href="https://www.facebook.com/">
            <Image src={IconFacebook} alt="Icon" className={Styles.icon} />
          </Link>
          <Link className={Styles.footer_links} href="https://linkedin.com/">
            <Image src={IconLinkedin} alt="Icon" className={Styles.icon} />
          </Link>
          <Link className={Styles.footer_links}  href="https://www.youtube.com/">
            <Image src={IconYoutube} alt="Icon" className={Styles.icon} />
          </Link>
        </div>
        <div>
          <RotatingGears />
        </div>
      </div>
      <div className={Styles.allRightReserved}>
        ©2023 INDHUGE - Todos os direitos reservados.
      </div>
    </div>
  );
};

export default Footer;