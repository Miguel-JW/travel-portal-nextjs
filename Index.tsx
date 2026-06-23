import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../../components/Layout";
import CardDestino from "../../components/CardDestino";
import { destinos } from "../../data/destinos";
import styles from "../../styles/Destinos.module.css";

const Destinos: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>Destinos — Horizonte</title>
        <meta name="description" content="Catálogo completo de destinos turísticos." />
      </Head>

      <div className={styles.pageHeader}>
        <div className={styles.pageHeaderInner}>
          <p className={styles.eyebrow}>Catálogo Completo</p>
          <h1 className={styles.pageTitle}>Todos os Destinos</h1>
          <p className={styles.pageSubtitle}>
            {destinos.length} lugares cuidadosamente selecionados — cada um com uma razão irrecusável para existir na sua lista.
          </p>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.grid}>
          {destinos.map((destino) => (
            <CardDestino key={destino.id} destino={destino} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Destinos;
