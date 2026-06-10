import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import { fadeUp, staggerContainer } from '../animations/transitions'
import { SERVICE_GALLERIES } from '../data/serviceGalleries'
import { getServiceGalleryPath } from '../routers/paths'

type SolutionsSectionProps = {
  className?: string
}

export function SolutionsSection({ className = '' }: SolutionsSectionProps) {
  return (
    <motion.section
      className={`home-parts-section${className ? ` ${className}` : ''}`}
      variants={staggerContainer}
    >
      <motion.div className="home-parts-heading" variants={fadeUp}>
        <p className="home-parts-label">Nossos serviços</p>
        <h2>Nossas soluções</h2>
      </motion.div>

      <motion.div className="home-parts-grid" variants={staggerContainer}>
        {SERVICE_GALLERIES.map((part) => (
          <motion.article
            className={`home-part-card${
              part.featured ? ' home-part-card-featured' : ''
            }${part.layout ? ` home-part-card-${part.layout}` : ''}`}
            key={part.title}
            variants={fadeUp}
          >
            <img src={part.image} alt="" aria-hidden="true" />
            <footer>
              <span className="home-part-dot" aria-hidden="true" />
              <h3>{part.title}</h3>
              <Link to={getServiceGalleryPath(part.slug)}>Ver mais</Link>
            </footer>
          </motion.article>
        ))}
      </motion.div>
    </motion.section>
  )
}
