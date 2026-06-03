import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import { fadeUp, staggerContainer } from '../animations/transitions'
import engrenagensDenteImage from '../assets/engrenagensDente.avif'
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

const HOME_SERVICES = [
  {
    title: 'Usinagem pesada',
    description:
      'Peças e componentes para aplicações industriais, com foco em robustez e precisão.',
  },
  {
    title: 'Usinagem em geral',
    description:
      'Fabricação e usinagem de itens sob demanda, conforme necessidade do cliente.',
    featured: true,
  },
  {
    title: 'Peças sob medida',
    description: 'Produção conforme desenho técnico, projeto ou amostra.',
    featured: true,
  },
  {
    title: 'Fabricação de componentes',
    description:
      'Soluções para substituição e reposição de peças em equipamentos.',
  },
]

const HOME_SEGMENTS = [
  'Metalúrgica e manutenção industrial',
  'Usinas e agroindústria',
  'Indústrias da região de Sertãozinho e entorno',
  'Empresas com demanda de peças sob medida',
]

const HOME_MANUFACTURED_PARTS = [
  {
    title: 'Eixos',
    description: '(rotor, ventilador, mesa, esteirão)',
  },
  {
    title: 'Buchas de bronze',
  },
  {
    title: 'Engrenagens e polias',
  },
  {
    title: 'Anéis e componentes diversos',
  },
  {
    title: 'Abertura e fechamento de trocadores',
  },
  {
    title: 'Saca pinos',
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

      <motion.section className="home-services-section" variants={staggerContainer}>
        <motion.h2 className="home-services-title" variants={fadeUp}>
          O que a PRC faz
        </motion.h2>

        <motion.div className="home-services-grid" variants={staggerContainer}>
          {HOME_SERVICES.map((service) => (
            <motion.article
              className={`home-service-card${
                service.featured ? ' home-service-card-dark' : ''
              }`}
              key={service.title}
              variants={fadeUp}
            >
              <span className="home-service-dot" aria-hidden="true" />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <Link to={PATHS.TALK_TO_US}>Solicitar Orçamento</Link>
            </motion.article>
          ))}
        </motion.div>
      </motion.section>

      <motion.section className="home-segments-section" variants={staggerContainer}>
        <motion.header className="home-segments-header" variants={fadeUp}>
          <div>
            <p className="home-segments-label">Segmentos</p>
            <h2>Segmentos atendidos</h2>
          </div>
          <p>Atendemos diferentes áreas da indústria</p>
        </motion.header>

        <motion.div className="home-segments-showcase" variants={staggerContainer}>
          <motion.ul className="home-segments-list" variants={staggerContainer}>
            {HOME_SEGMENTS.map((segment) => (
              <motion.li key={segment} variants={fadeUp}>
                {segment}
              </motion.li>
            ))}
          </motion.ul>

          <motion.figure className="home-segments-image" variants={fadeUp}>
            <img
              src={engrenagensDenteImage}
              alt="Componente industrial usinado para segmentos atendidos pela PRC"
            />
          </motion.figure>
        </motion.div>
      </motion.section>

      <motion.section
        className="home-parts-section"
        variants={staggerContainer}
      >
        <motion.div className="home-parts-heading" variants={fadeUp}>
          <p className="home-parts-label">Nossos serviços</p>
          <h2>Peças fabricadas</h2>
        </motion.div>

        <motion.div className="home-parts-grid" variants={staggerContainer}>
          {HOME_MANUFACTURED_PARTS.map((part) => (
            <motion.article
              className="home-part-card"
              key={part.title}
              variants={fadeUp}
            >
              <img src={engrenagensDenteImage} alt="" aria-hidden="true" />
              <div>
                <span className="home-part-dot" aria-hidden="true" />
                <h3>{part.title}</h3>
                {part.description && <p>{part.description}</p>}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </motion.section>
    </motion.section>
  )
}
