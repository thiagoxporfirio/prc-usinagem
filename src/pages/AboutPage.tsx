import { motion } from 'motion/react'
import { fadeUp, staggerContainer } from '../animations/transitions'
import engrenagensImage from '../assets/engrenagens.avif'
import prcMatrizImage from '../assets/prcMatriz.avif'

export function AboutPage() {
  return (
    <motion.section
      className="page about-page"
      variants={staggerContainer}
      initial="hidden"
      animate="show"
    >
      <motion.article className="about-section" variants={fadeUp}>
        <motion.div className="about-kpis" variants={staggerContainer}>
          <motion.p className="about-kpi" variants={fadeUp}>
            <span className="about-kpi-value">1991</span>
            <span>Fundada</span>
          </motion.p>
          <motion.p className="about-kpi" variants={fadeUp}>
            <span className="about-kpi-value">+35</span>
            <span>Anos de atuação no mercado</span>
          </motion.p>
        </motion.div>

        <div className="about-main-grid">
          <motion.img
            className="about-main-image"
            src={prcMatrizImage}
            alt="Fachada industrial da PRC"
            variants={fadeUp}
          />

          <motion.div className="about-main-content" variants={staggerContainer}>
            <motion.p className="about-label" variants={fadeUp}>
              Sobre a PRC
            </motion.p>
            <motion.h1 className="about-title" variants={fadeUp}>
              Usinagem e caldeiraria
              <br />
              com foco em qualidade
              <br />
              e prazo
            </motion.h1>
            <motion.p className="about-text" variants={fadeUp}>
              A PRC Usinagem atua em Sertãozinho/SP com usinagem pesada,
              usinagem em geral e caldeiraria, fabricando peças e componentes
              industriais conforme projeto ou amostra. Nosso objetivo é
              entregar soluções com precisão, confiabilidade e pontualidade.
            </motion.p>

            <motion.img
              className="about-small-image"
              src={engrenagensImage}
              alt="Componente usinado em destaque"
              variants={fadeUp}
            />
          </motion.div>
        </div>
      </motion.article>

      <motion.article className="about-section" variants={fadeUp}>
        <motion.h2 className="about-history-title" variants={fadeUp}>
          Um pouco da nossa história:
        </motion.h2>
        <motion.p className="about-history-text" variants={fadeUp}>
          A PRC Usinagem foi fundada em 1991 pelo saudoso Pedro Garcia, em
          Sertãozinho/SP, cidade reconhecida nacionalmente por sua forte
          tradição industrial e sucroenergética. Desde então, a empresa vem se
          destacando no setor de usinagem pesada e fabricação de peças
          industriais, investindo continuamente em tecnologia, qualificação
          profissional e modernização de seu parque fabril.
        </motion.p>
        <motion.p className="about-history-text" variants={fadeUp}>
          Com mais de 35 anos de história, a PRC construiu sua trajetória
          baseada em qualidade, precisão, pontualidade e compromisso com seus
          clientes, atendendo projetos industriais sob medida para diversos
          segmentos do mercado.
        </motion.p>

        <motion.div className="about-map-wrap" variants={fadeUp}>
          <iframe
            title="Mapa da PRC Usinagem"
            src="https://www.google.com/maps?q=Av.+Marginal+Maurilio+Bacega,+2277,+Sertaozinho,+SP&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
      </motion.article>
    </motion.section>
  )
}
