import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import { LuArrowUpRight } from 'react-icons/lu'
import { fadeUp, staggerContainer } from '../animations/transitions'
import engrenagensDenteImage from '../assets/engrenagensDente.avif'
import prcMatrizImage from '../assets/prcMatriz.avif'
import { PATHS } from '../routers/paths'

const INDUSTRY_SEGMENTS = [
  'Metalúrgica e manutenção industrial',
  'Usinas e agroindústria',
  'Indústrias da região de Sertãozinho e entorno',
  'Peças e componentes conforme projeto',
]

const PRODUCT_ITEMS = [
  {
    title: 'Eixos',
    description:
      'Eixos industriais fabricados sob medida para aplicações de alta performance, garantindo resistência, precisão dimensional e confiabilidade operacional.',
  },
  {
    title: 'Engrenagens',
    description:
      'Componentes usinados para transmissão mecânica, com acabamento técnico e controle dimensional para diferentes segmentos industriais.',
  },
  {
    title: 'Flanges',
    description:
      'Peças conforme projeto ou amostra, produzidas com foco em encaixe, vedação, robustez e qualidade para manutenção industrial.',
  },
  {
    title: 'Rolos e cilindros',
    description:
      'Fabricação e recuperação de componentes cilíndricos para máquinas, equipamentos e linhas produtivas sob demanda.',
  },
  {
    title: 'Buchas',
    description:
      'Soluções usinadas para conjuntos mecânicos que exigem ajuste preciso, durabilidade e funcionamento confiável.',
  },
  {
    title: 'Peças especiais',
    description:
      'Desenvolvimento de componentes industriais personalizados a partir de desenho técnico, projeto ou referência física.',
  },
  {
    title: 'Manutenção industrial',
    description:
      'Apoio técnico para recuperação, adequação e fabricação de peças críticas em paradas e rotinas de manutenção.',
  },
  {
    title: 'Usinagem pesada',
    description:
      'Execução de serviços para peças de grande porte, priorizando precisão, prazo e segurança no processo produtivo.',
  },
]

export function ProductsPage() {
  return (
    <motion.section
      className="page products-page"
      variants={staggerContainer}
      initial="hidden"
      animate="show"
    >
      <motion.img
        className="products-banner-image"
        src={prcMatrizImage}
        alt="Fachada da PRC Usinagem"
        variants={fadeUp}
      />

      <motion.header className="products-hero" variants={fadeUp}>
        <div className="products-intro">
          <span className="products-line" />
          <p>
            Fabricação e usinagem de componentes industriais com precisão,
            qualidade e confiabilidade.
          </p>
        </div>

        <Link to={PATHS.TALK_TO_US} className="products-cta">
          Solicitar orçamento
          <LuArrowUpRight aria-hidden="true" />
        </Link>
      </motion.header>

      <motion.div className="products-title-row" variants={fadeUp}>
        <h1>
          Peças e soluções
          <br />
          industriais
        </h1>
        <p>Atendemos diferentes áreas da indústria</p>
      </motion.div>

      <motion.div className="products-showcase" variants={staggerContainer}>
        <motion.ul className="products-segments" variants={staggerContainer}>
          {INDUSTRY_SEGMENTS.map((segment) => (
            <motion.li key={segment} variants={fadeUp}>
              {segment}
            </motion.li>
          ))}
        </motion.ul>

        <motion.figure className="products-image-card" variants={fadeUp}>
          <img
            src={engrenagensDenteImage}
            alt="Componente industrial usinado com dentes de engrenagem"
          />
        </motion.figure>
      </motion.div>

      <motion.section className="products-catalog" variants={staggerContainer}>
        {PRODUCT_ITEMS.map((item) => (
          <motion.article
            className="product-card"
            key={item.title}
            variants={fadeUp}
          >
            <img src={engrenagensDenteImage} alt="" aria-hidden="true" />
            <div>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          </motion.article>
        ))}
      </motion.section>
    </motion.section>
  )
}
