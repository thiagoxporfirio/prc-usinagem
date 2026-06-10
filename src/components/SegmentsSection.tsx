import { motion } from 'motion/react'
import { fadeUp, staggerContainer } from '../animations/transitions'
import engrenagensDenteImage from '../assets/engrenagensDente.avif'
import { INDUSTRY_SEGMENTS } from '../data/segments'

type SegmentsSectionProps = {
  className?: string
}

export function SegmentsSection({ className = '' }: SegmentsSectionProps) {
  return (
    <motion.section
      className={`home-segments-section${className ? ` ${className}` : ''}`}
      variants={staggerContainer}
    >
      <motion.header className="home-segments-header" variants={fadeUp}>
        <div>
          <p className="home-segments-label">Segmentos</p>
          <h2>Segmentos atendidos</h2>
        </div>
        <p>Atendemos diferentes áreas da indústria</p>
      </motion.header>

      <motion.div className="home-segments-showcase" variants={staggerContainer}>
        <motion.ul className="home-segments-list" variants={staggerContainer}>
          {INDUSTRY_SEGMENTS.map((segment) => (
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
  )
}
