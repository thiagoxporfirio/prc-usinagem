import { motion } from 'motion/react'
import { useState } from 'react'
import { LuArrowDown } from 'react-icons/lu'
import { Navigate, useParams } from 'react-router-dom'
import { fadeUp, staggerContainer } from '../animations/transitions'
import { getServiceGalleryBySlug } from '../data/serviceGalleries'
import { PATHS } from '../routers/paths'

const INITIAL_VISIBLE_IMAGES = 6

export function ServiceGalleryPage() {
  const { serviceSlug } = useParams()
  const service = getServiceGalleryBySlug(serviceSlug)
  const [visibleImages, setVisibleImages] = useState(INITIAL_VISIBLE_IMAGES)

  if (!service) {
    return <Navigate to={PATHS.HOME} replace />
  }

  const displayedImages = service.galleryImages.slice(0, visibleImages)
  const hasMoreImages = visibleImages < service.galleryImages.length

  return (
    <motion.section
      className="page service-gallery-page"
      variants={staggerContainer}
      initial="hidden"
      animate="show"
    >
      <motion.header className="service-gallery-heading" variants={fadeUp}>
        <p className="service-gallery-label">Nossos serviços</p>
        <h1>{service.title}</h1>
      </motion.header>

      <motion.div className="service-gallery-grid" variants={staggerContainer}>
        {displayedImages.map((image, index) => (
          <motion.figure
            className="service-gallery-photo"
            key={`${service.slug}-${index}`}
            variants={fadeUp}
          >
            <img
              src={image}
              alt={`${service.title} - foto ${index + 1}`}
            />
          </motion.figure>
        ))}
      </motion.div>

      {hasMoreImages && (
        <motion.div className="service-gallery-actions" variants={fadeUp}>
          <button
            type="button"
            onClick={() =>
              setVisibleImages((current) =>
                Math.min(current + 3, service.galleryImages.length),
              )
            }
          >
            Ver mais fotos
            <LuArrowDown aria-hidden="true" />
          </button>
        </motion.div>
      )}
    </motion.section>
  )
}
