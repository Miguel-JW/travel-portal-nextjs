import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Layout from "../components/Layout";
import CardDestino from "../components/CardDestino";
import { destinos } from "../data/destinos";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const destaques = destinos.slice(0, 3);

  return (
    <Layout>
      <Head>
        <title>Horizonte — Portal de Viagens</title>
        <meta name="description" content="Descubra destinos únicos ao redor do mundo." />
      </Head>

      {/* ── Hero ─────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroBackground} />
        <div className={styles.heroGrid} />

        <div className={styles.heroContent}>
          <div className={styles.heroLeft}>
            <p className={styles.eyebrow}>
              <span className={styles.eyebrowLine} />
              Portal de Viagens
            </p>
            <h1 className={styles.heroTitle}>
              O mundo está<br />
              esperando por{" "}
              <span className={styles.heroTitleAccent}>você.</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Explore destinos extraordinários — de fiordes noruegueses a desertos de especiarias. Cada lugar conta uma história que só pode ser vivida.
            </p>
            <Link href="/destinos" className={styles.heroCta}>
              Ver todos os destinos →
            </Link>
          </div>

          <div className={styles.heroRight}>
            <div className={styles.heroImageCard}>
              <img src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=400&q=80" alt="Kyoto" />
              <span className={styles.heroImageLabel}>Kyoto, Japão</span>
            </div>
            <div className={styles.heroImageCard}>
              <img src="https://images.unsplash.com/photo-1520769945061-0a448c463865?w=400&q=80" alt="Islândia" />
              <span className={styles.heroImageLabel}>Islândia</span>
            </div>
            <div className={styles.heroImageCard}>
              <img src="https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&q=80" alt="Patagônia" />
              <span className={styles.heroImageLabel}>Patagônia</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats ────────────────────────────── */}
      <div className={styles.stats}>
        <div className={styles.statsInner}>
          <div className={styles.statItem}>
            <span className={styles.statNum}>6</span>
            <p className={styles.statLabel}>Destinos catalogados</p>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNum}>4</span>
            <p className={styles.statLabel}>Continentes</p>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNum}>∞</span>
            <p className={styles.statLabel}>Histórias para viver</p>
          </div>
        </div>
      </div>

      {/* ── Destaque ─────────────────────────── */}
      <section className={styles.section}>
        <p className={styles.sectionEyebrow}>Destinos em Destaque</p>
        <h2 className={styles.sectionTitle}>Escolhas dos nossos viajantes</h2>
        <p className={styles.sectionDesc}>
          Três lugares que permanecem na memória muito depois do retorno. Cada um com uma personalidade impossível de imitar.
        </p>

        <div className={styles.destaqueGrid}>
          {destaques.map((d) => (
            <CardDestino key={d.id} destino={d} />
          ))}
        </div>

        <div className={styles.sectionFooter}>
          <Link href="/destinos" className={styles.linkAll}>
            Ver catálogo completo — {destinos.length} destinos →
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
