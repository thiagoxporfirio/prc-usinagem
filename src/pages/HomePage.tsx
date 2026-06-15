import { motion } from 'motion/react'
import { fadeUp, staggerContainer } from '../animations/transitions'
import engrenagensImage from '../assets/engrenagens.avif'
import prcPersonImage from '../assets/pcr-person.avif'
import inetSeal from '../assets/selos/inet.jpeg'
import isoSeal from '../assets/selos/iso9001.jpeg'
import petroSeal from '../assets/selos/petro.jpeg'
import { SegmentsSection } from '../components/SegmentsSection'
import { SolutionsSection } from '../components/SolutionsSection'
import { BUDGET_WHATSAPP } from '../data/contact'

const CERTIFICATIONS = [
  {
    label: 'CRC Petrobras',
    image: petroSeal,
  },
  {
    label: 'IQNet Management System',
    image: inetSeal,
  },
  {
    label: 'ISO 9001',
    image: isoSeal,
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

const HOME_PROCESS_STEPS = [
  'Você envia projeto, desenho ou amostra',
  'Analisamos material, tolerâncias e prazo',
  'Usinamos com controle de qualidade',
  'Entregamos com segurança e pontualidade',
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
          <p className="eyebrow">Usinagem • Caldeiraria • Peças Industriais</p>
          <h1 className="hero-title">
            Usinagem e Caldeiraria
            <br />
            de Precisão
          </h1>
        </div>

        <aside className="hero-highlight">
          <h2>Qualidade que fala por si</h2>
          <p>
            A PRC Usinagem, de Sertãozinho/SP, atua com usinagem pesada,
            usinagem em geral e caldeiraria, fabricando peças e componentes
            industriais conforme projeto ou amostra, com foco em qualidade,
            prazo e confiança.
          </p>
          <div className="certification-strip" aria-label="Certificações">
            {CERTIFICATIONS.map((certification) => (
              <img
                className="certification-badge"
                key={certification.label}
                src={certification.image}
                alt={certification.label}
              />
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
            Usinagem e caldeiraria
            <br />
            com foco em qualidade
            <br />
            e prazo
          </motion.h2>

          <motion.p className="home-about-text" variants={fadeUp}>
            A PRC Usinagem atua em Sertãozinho/SP com usinagem pesada,
            usinagem em geral e caldeiraria, fabricando peças e componentes
            industriais conforme projeto ou amostra. Nosso objetivo é entregar
            soluções com precisão, confiabilidade e pontualidade.
          </motion.p>

          <motion.div className="home-about-actions" variants={fadeUp}>
            <a href={BUDGET_WHATSAPP.href} target="_blank" rel="noreferrer">
              Solicitar orçamento
            </a>
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
            <span>+35</span>
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
              <a href={BUDGET_WHATSAPP.href} target="_blank" rel="noreferrer">
                Solicitar Orçamento
              </a>
            </motion.article>
          ))}
        </motion.div>
      </motion.section>

      <SegmentsSection />

      <SolutionsSection />

      <motion.section
        className="home-process-section"
        variants={staggerContainer}
      >
        <motion.header className="home-process-header" variants={fadeUp}>
          <div>
            <p className="home-process-label">Processos</p>
            <h2>
              Como
              <br />
              trabalhamos
            </h2>
          </div>

          <div className="home-process-intro">
            <p>
              Um pouco sobre o nosso processo de trabalho, e como podemos te
              ajudar da melhor forma!
            </p>
            <a href={BUDGET_WHATSAPP.href} target="_blank" rel="noreferrer">
              Solicitar Orçamento
            </a>
          </div>
        </motion.header>

        <motion.div className="home-process-grid" variants={staggerContainer}>
          {HOME_PROCESS_STEPS.map((step, index) => (
            <motion.article
              className="home-process-card"
              key={step}
              variants={fadeUp}
            >
              <span>{index + 1}</span>
              <p>{step}</p>
            </motion.article>
          ))}
        </motion.div>
      </motion.section>
    </motion.section>
  )
}
