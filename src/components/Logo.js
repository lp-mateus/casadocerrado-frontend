import Image from "next/image";
import styles from "@/styles/Logo.module.css";	
import logoCasaCerrado from "../../public/icons/Logocasacerrado.png";

export default function Logo() {
	return (
		<div className={styles.logocontainer}>
			<div>
				<Image
					className={styles.borderradius50}
					src={logoCasaCerrado}
					alt="Logo da Fundação Casa do Cerrado"
				/>
			</div>
			<div className={styles.marginleft8}>
				<p className={styles.headertitlemain}>Fundação</p>
				<p className={styles.headertitlesecondary}>Casa do Cerrado</p>
			</div>
		</div>
	);
}
