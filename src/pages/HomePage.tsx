import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import { fadeUp, staggerContainer } from '../animations/transitions'
import engrenagensImage from '../assets/engrenagens.avif'
import prcPersonImage from '../assets/pcr-person.avif'
import { PATHS } from '../routers/paths'

const CERTIFICATIONS = [
  {
    label: 'CRC',
    detail: 'PETROBRAS',
    className: 'certification-petrobras',
  },
  {
    label: 'DQS',
    detail: 'Certified',
    className: 'certification-dqs',
  },
  {
    label: 'IQNet',
    detail: 'Management System',
    className: 'certification-iqnet',
  },
  {
    label: 'ISO',
    detail: '9001:2015',
    className: 'certification-iso',
  },
]

export function HomePage() {
  return (
    <motion.section
      className="page"
      variants={staggerContainer}
      initial="hidden"
      animate="show"
    >
      <motion.article className="home-hero" variants={fadeUp}>
        <div className="hero-copy-block">
          <p className="eyebrow">Usinagem • Peças Industriais</p>
          <h1 className="hero-title">
            Usinagem
            <br />
            com precisão
          </h1>
        </div>

        <aside className="hero-highlight">
          <h2>Qualidade que fala por si</h2>
          <p>
            A PRC Usinagem, de Sertãozinho/SP, atua com usinagem pesada e
            usinagem em geral, fabricando peças e componentes industriais
            conforme projeto ou amostra, com foco em qualidade, prazo e
            confiança.
          </p>
          <div className="certification-strip" aria-label="Certificações">
            {CERTIFICATIONS.map((certification) => (
              <span
                className={`certification-badge ${certification.className}`}
                key={certification.label}
              >
                <strong>{certification.label}</strong>
                <small>{certification.detail}</small>
              </span>
            ))}
          </div>
        </aside>
      </motion.article>

      <motion.article className="home-about-section" variants={staggerContainer}>
        <motion.div className="home-about-primary" variants={fadeUp}>
          <img
            src={prcPersonImage}
            alt="Profissional da PRC avaliando componente industrial usinado"
          />
        </motion.div>

        <motion.div className="home-about-content" variants={staggerContainer}>
          <motion.p className="home-about-label" variants={fadeUp}>
            Sobre a PRC
          </motion.p>

          <motion.h2 className="home-about-title" variants={fadeUp}>
            Usinagem industrial
            <br />
            com foco em qualidade
            <br />
            e prazo
          </motion.h2>

          <motion.p className="home-about-text" variants={fadeUp}>
            A PRC Usinagem atua em Sertãozinho/SP com usinagem pesada e
            usinagem em geral, fabricando peças e componentes industriais
            conforme projeto ou amostra. Nosso objetivo é entregar soluções com
            precisão, confiabilidade e pontualidade.
          </motion.p>

          <motion.div className="home-about-actions" variants={fadeUp}>
            <Link to={PATHS.TALK_TO_US}>Solicitar orçamento</Link>
          </motion.div>

          <motion.img
            className="home-about-secondary"
            src={engrenagensImage}
            alt="Engrenagens usinadas em ambiente industrial"
            variants={fadeUp}
          />
        </motion.div>

        <motion.div className="home-about-kpis" variants={staggerContainer}>
          <motion.p className="home-about-kpi" variants={fadeUp}>
            <span>1991</span>
            <small>Fundada</small>
          </motion.p>
          <motion.p className="home-about-kpi" variants={fadeUp}>
            <span>+25</span>
            <small>Anos de atuação no mercado</small>
          </motion.p>
        </motion.div>
      </motion.article>
    </motion.section>
  )
}
