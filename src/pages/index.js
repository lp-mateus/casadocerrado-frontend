// Components
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ButtonPrimary from "@/components/ButtonPrimary";
// Images and Icons paths
import imageHomeCerradoPath from "../../public/images/Imagehomecerrado.png";
import logoFundacaoBBPath from "../../public/icons/Iconfundacaobb.png";
import iconFarming from "../../public/icons/Iconfarming.png";

export default function Home() {
	return (
		<>
			<Header />

			<section className={styles.homebannercontainer}>
				<div>
					<p className={styles.homebannertitleprimary}>
						Preservando o Cerrado,
					</p>
					<p className={styles.homebannertitlesecondary}>cultivando o futuro</p>
				</div>

				<div className={styles.margintop32}>
					<p className={styles.homebannertext}>
						A Fundação Casa do Cerrado busca proteger o bioma com iniciativas de
						recuperação ambiental, educação e inovação, promovendo soluções
						sustentáveis que geram impacto positivo e valor para a sociedade e o
						meio ambiente.
					</p>
				</div>

				<div className={styles.margintop32}>
					<ButtonPrimary label="Veja nossos projetos" />
				</div>
			</section>

			<section className={styles.margintop64}>
				<div className={styles.hometitlecontainer}>
					<p className={styles.hometitle}>A Casa do Cerrado</p>
					<p className={styles.homebannertitleprimary}>CUIDA</p>
				</div>
			</section>

			<section
				className={`${styles.margintop64} ${styles.margingleft16} ${styles.marginright16} ${styles.homesectioncontainer}`}
			>
				<div>
					<p className={styles.homesectiontitle}>Sobre nós</p>
					<p className={`${styles.homesectiontext} ${styles.margintop16}`}>
						Desde 1994, a Fundação Casa do Cerrado (FCC) é um pilar na promoção
						do desenvolvimento sustentável do Cerrado e de outros biomas
						brasileiros. Idealizada pelo ex-ministro Alysson Paolinelli, a FCC
						une conservação ambiental e práticas sustentáveis. Reconhecida pelo
						seu papel no Programa de Cooperação Nipo-Brasileira (Prodecer),
						transformamos áreas degradadas em espaços revitalizados, como o
						Jardim do Cerrado. Com foco em educação ambiental e parcerias
						estratégicas, somos referência em recuperação ambiental. Conheça
						nosso trabalho e inspire-se a fazer a diferença pelo Cerrado!
					</p>
				</div>
				<div>
					<Image
						src={imageHomeCerradoPath}
						alt="Imagem do Cerrado"
						className={styles.homeimagecasacerrado}
					/>
				</div>
			</section>

			<section
				className={`${styles.margintop64} ${styles.margingleft16} ${styles.marginright16}`}
			>
				<div>
					<p className={styles.homesectiontitle}>Nossos parceiros</p>
				</div>
				<div className={`${styles.margintop32} ${styles.homesectioncontainer}`}>
					<Image
						src={logoFundacaoBBPath}
						alt="Logo Fundação Banco do Brasil"
						className={styles.homelogoparceiros}
					/>
					<Image
						src={logoFundacaoBBPath}
						alt="Logo Fundação Banco do Brasil"
						className={styles.homelogoparceiros}
					/>
					<Image
						src={logoFundacaoBBPath}
						alt="Logo Fundação Banco do Brasil"
						className={styles.homelogoparceiros}
					/>
					<Image
						src={logoFundacaoBBPath}
						alt="Logo Fundação Banco do Brasil"
						className={styles.homelogoparceiros}
					/>
					<Image
						src={logoFundacaoBBPath}
						alt="Logo Fundação Banco do Brasil"
						className={styles.homelogoparceiros}
					/>
				</div>
			</section>

			<section className={`${styles.margintop64} ${styles.homesectionnumeros}`}>
				<div>
					<div className={`${styles.displayflexstart}`}>
						<p className={`${styles.homebannertitleprimary}`}>3190+</p>
						<p
							className={`${styles.homebannertitleterciary} ${styles.margingleft8}`}
						>
							técnicos atendidos
						</p>
					</div>

					<div className={`${styles.displayflexstart} ${styles.margintop32}`}>
						<p className={`${styles.homebannertitleprimary}`}>50.000+</p>
						<p
							className={`${styles.homebannertitleterciary} ${styles.margingleft8}`}
						>
							mudas produzidas
						</p>
					</div>

					<div className={`${styles.displayflexstart} ${styles.margintop32}`}>
						<p className={`${styles.homebannertitleprimary}`}>3190+</p>
						<p
							className={`${styles.homebannertitleterciary} ${styles.margingleft8}`}
						>
							alunos atendimentos
						</p>
					</div>

					<div className={`${styles.displayflexstart} ${styles.margintop32}`}>
						<p className={`${styles.homebannertitleprimary}`}>3800+</p>
						<p
							className={`${styles.homebannertitleterciary} ${styles.margingleft8}`}
						>
							estados envolvidos
						</p>
					</div>
				</div>
			</section>

			<section
				className={`${styles.margintop64} ${styles.margingleft16} ${styles.marginright16}`}
			>
				<div>
					<p className={styles.homesectiontitle}>Nossos atividades</p>
				</div>

				<div
					className={`${styles.margintop32} ${styles.homesectioncontainer} `}
				>
					<div>
						<div className={styles.homeatividadesimage}>
							<Image src={iconFarming} alt="Icone de agricultura" />
						</div>
						<p className={styles.homeatividadestext}>
							Recuperação de áreas degradadas
						</p>
					</div>

					<div>
						<div className={styles.homeatividadesimage}>
							<Image src={iconFarming} alt="Icone de agricultura" />
						</div>
						<p className={styles.homeatividadestext}>
							Replicação da tecnologia do ILP e ILPF para a agricultura familiar
						</p>
					</div>

					<div>
						<div className={styles.homeatividadesimage}>
							<Image src={iconFarming} alt="Icone de agricultura" />
						</div>
						<p className={styles.homeatividadestext}>
							Produção e distribuição de mudas
						</p>
					</div>
				</div>

				<div
					className={`${styles.margintop64} ${styles.homesectioncontainer} `}
				>
					<div>
						<div className={styles.homeatividadesimage}>
							<Image src={iconFarming} alt="Icone de agricultura" />
						</div>
						<p className={styles.homeatividadestext}>
							Recuperação de áreas degradadas
						</p>
					</div>

					<div>
						<div className={styles.homeatividadesimage}>
							<Image src={iconFarming} alt="Icone de agricultura" />
						</div>
						<p className={styles.homeatividadestext}>
							Replicação da tecnologia do ILP e ILPF para a agricultura familiar
						</p>
					</div>

					<div>
						<div className={styles.homeatividadesimage}>
							<Image src={iconFarming} alt="Icone de agricultura" />
						</div>
						<p className={styles.homeatividadestext}>
							Produção e distribuição de mudas
						</p>
					</div>
				</div>
			</section>

			<section className={`${styles.margintop64} ${styles.homebannerhistoria}`}>
				<div>
					<p className={`${styles.homebannerhistoriatext}`}>
						Momentos que marcaram a nossa história
					</p>
				</div>

				<div>
					<p
						className={`${styles.margintop16} ${styles.homebannerhistoriasubtitle}`}
					>
						Momentos que marcaram a nossa história
					</p>
				</div>
			</section>

			<section className={`${styles.margintop64}`}></section>

			<Footer />
		</>
	);
}
