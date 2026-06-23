import React from "react";
import Link from "next/link";
import { Destino } from "../data/destinos";
import styles from "./CardDestino.module.css";

interface CardDestinoProps {
  destino: Destino;
}

const CardDestino: React.FC<CardDestinoProps> = ({ destino }) => {
  return (
    <Link href={`/destinos/${destino.id}`} className={styles.card}>
      <div className={styles.imageWrap}>
        <img
          src={destino.imagem}
          alt={`Foto de ${destino.nome}`}
          className={styles.image}
          loading="lazy"
        />
        <span className={styles.continente}>{destino.continente}</span>
        <div className={styles.overlay} />
      </div>

      <div className={styles.body}>
        <div className={styles.header}>
          <h3 className={styles.nome}>{destino.nome}</h3>
          <span className={styles.pais}>{destino.pais}</span>
        </div>
        <p className={styles.descricao}>{destino.descricao}</p>
        <span className={styles.cta}>
          Explorar <span className={styles.arrow}>→</span>
        </span>
      </div>

      <div className={styles.accent} style={{ background: destino.cor }} />
    </Link>
  );
};

export default CardDestino;
