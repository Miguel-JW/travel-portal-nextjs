import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Layout from "../../components/Layout";
import { destinos, getDestinoById, Destino } from "../../data/destinos";
import styles from "../../styles/DestinoDetalhe.module.css";

interface Props {
  destino: Destino;
}

const DestinoDetalhe: NextPage<Props> = ({ destino }) => {
  return (
    <Layout>
      <Head>
        <title>{destino.nome} — Horizonte</title>
        <meta name="description" content={destino.descricao} />
      </Head>

      {/* ── Hero com imagem full ─────────────── */}
      <div className={styles.hero}>
        <img src={destino.imagemFull} alt={destino.nome} className={styles.heroImage} />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <Link href="/destinos" className={styles.back}>
            ← Voltar aos destinos
          </Link>
          <div>
            <span className={styles.continenteBadge}>{destino.continente}</span>
            <h1 className={styles.heroTitle}>{destino.nome}</h1>
            <p className={styles.heroPais}>{destino.pais}</p>
          </div>
        </div>
        <div className={styles.accentBar} style={{ background: destino.cor }} />
      </div>

      {/* ── Conteúdo ─────────────────────────── */}
      <div className={styles.content}>
        <div className={styles.contentInner}>

          {/* Coluna principal */}
          <div className={styles.main}>
            <p className={styles.tagline}>{destino.descricao}</p>
            <div className={styles.divider} />
            <h2 className={styles.sectionLabel}>Sobre o destino</h2>
            <p className={styles.descricao}>{destino.descricaoLonga}</p>

            <h2 className={styles.sectionLabel} style={{ marginTop: "2.5rem" }}>
              O que não perder
            </h2>
            <ul className={styles.destaqueList}>
              {destino.destaques.map((item, i) => (
                <li key={i} className={styles.destaqueItem}>
                  <span className={styles.destaqueMarker} style={{ background: destino.cor }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Sidebar de informações */}
          <aside className={styles.sidebar}>
            <h3 className={styles.sidebarTitle}>Informações práticas</h3>
            <div className={styles.infoGrid}>
              <div className={styles.infoCard}>
                <span className={styles.infoIcon}>🌡</span>
                <span className={styles.infoLabel}>Temperatura</span>
                <span className={styles.infoValue}>{destino.temperatura}</span>
              </div>
              <div className={styles.infoCard}>
                <span className={styles.infoIcon}>📅</span>
                <span className={styles.infoLabel}>Melhor época</span>
                <span className={styles.infoValue}>{destino.melhorEpoca}</span>
              </div>
              <div className={styles.infoCard}>
                <span className={styles.infoIcon}>💱</span>
                <span className={styles.infoLabel}>Moeda</span>
                <span className={styles.infoValue}>{destino.moeda}</span>
              </div>
              <div className={styles.infoCard}>
                <span className={styles.infoIcon}>🗣</span>
                <span className={styles.infoLabel}>Idioma</span>
                <span className={styles.infoValue}>{destino.idioma}</span>
              </div>
            </div>
          </aside>
        </div>

        <div className={styles.backBottom}>
          <Link href="/destinos" className={styles.backBtn}>
            ← Explorar outros destinos
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = destinos.map((d) => ({ params: { id: d.id } }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const destino = getDestinoById(params?.id as string);
  if (!destino) return { notFound: true };
  return { props: { destino } };
};

export default DestinoDetalhe;
