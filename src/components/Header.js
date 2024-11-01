import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/Header.module.css";
import logoCasaCerrado from "../../public/icons/Logocasacerrado.png";

export default function Header() {
	return (
		<header className={styles.headercontainer}>
			<div className={styles.logocontainer}>
				<div>
					<Image src={logoCasaCerrado} alt="Logo da Fundação Casa do Cerrado" />
				</div>
				<div className={styles.marginleftdefault}>
					<p className={styles.headertitlemain}>Fundação</p>
					<p className={styles.headertitlesecondary}>Casa do Cerrado</p>
				</div>
			</div>

			<nav>
				<ul className={styles.navcontainer}>
					<li className={styles.navitem}>
						<Link href="/">Home</Link>
					</li>
					<li className={styles.navitem}>
						<Link href="/">Sobre nós</Link>
					</li>
					<li className={styles.navitem}>
						<Link href="/">Projetos</Link>
					</li>
					<li className={styles.navitem}>
						<Link href="/">Contato</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}
