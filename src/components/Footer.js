import Link from "next/link";
import Image from "next/image";
import styles from "@/styles/Footer.module.css";
import iconInstagramPath from "../../public/icons/Iconinstragram.png";

export default function Footer() {
	return (
		<footer className={`${styles.footercontainer}`}>
			<div>
				<div>
					<div>
						<p className={styles.footersectiontitle}>E-mail</p>
					</div>
					<div>
						<p className={styles.footersectiontext}>
							contato@fundaçãocasadocerrado.org.br
						</p>
					</div>
				</div>

				<div className={styles.margintop16}>
					<div>
						<p className={styles.footersectiontitle}>Endereço</p>
					</div>
					<div>
						<p className={styles.footersectiontext}>
							Parque Estação Biológica - s/n sn, DF
						</p>
					</div>
					<div>
						<p className={styles.footersectiontext}>70770-200</p>
					</div>
				</div>
			</div>

			<div>
				<div>
					<div>
						<p className={styles.footersectiontitle}>Menu</p>
					</div>
					<div className={styles.margintop8}>
						<p
							className={`${styles.footersectiontext} ${styles.textaligncenter}`}
						>
							Home
						</p>
					</div>
					<div className={styles.margintop16}>
						<p
							className={`${styles.footersectiontext} ${styles.textaligncenter}`}
						>
							Sobre nós
						</p>
					</div>
					<div className={styles.margintop16}>
						<p
							className={`${styles.footersectiontext} ${styles.textaligncenter}`}
						>
							Projetos
						</p>
					</div>
					<div className={styles.margintop16}>
						<p
							className={`${styles.footersectiontext} ${styles.textaligncenter}`}
						>
							Contato
						</p>
					</div>
				</div>
			</div>

			<div className={styles.displayflexstart}>
				<div>
					<div>
						<p className={styles.footersectiontitle}>Fique de olho</p>
					</div>
					<div>
						<p className={styles.footersectiontext}>
							Acompanhe nossas redes sociais
						</p>
					</div>
				</div>

				<div className={styles.footersectionredesocial}>
					<Image src={iconInstagramPath} alt="Icone rede social Instagram" />
					<Image
						src={iconInstagramPath}
						alt="Icone rede social Instagram"
						className={styles.margingleft16}
					/>
					<Image
						src={iconInstagramPath}
						alt="Icone rede social Instagram"
						className={styles.margingleft16}
					/>
				</div>
			</div>
		</footer>
	);
}
