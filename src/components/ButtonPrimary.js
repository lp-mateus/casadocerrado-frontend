import styles from "@/styles/ButtonPrimary.module.css";

export default function ButtonPrimary({ label }) {
	return (
		<button
			className={`${styles.btnprimarycontainer} ${styles.btnprimarytext}`}
		>
			{label}
		</button>
	);
}
