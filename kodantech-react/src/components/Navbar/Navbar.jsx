import styles from './Navbar.module.css';
import logo from '../../assets/logo-fundo-transparente.png';

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <a href="#" aria-label="KodanTech - Página inicial">
        <img src={logo} alt="KodanTech" className={styles.logo} />
      </a>

      <ul className={styles.navLinks}>
        <li><a href="#sobre">Sobre</a></li>
        <li><a href="#servicos">Serviços</a></li>
        <li><a href="#projetos">Projetos</a></li>
        <li><a href="#contato">Contato</a></li>
      </ul>

      <a href="https://wa.me/5511966068951" className={styles.navCta} target="_blank" rel="noopener noreferrer">Fale Conosco</a>
    </nav>
  );
}
