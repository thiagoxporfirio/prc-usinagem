import { motion } from 'motion/react'
import { SegmentsSection } from '../components/SegmentsSection'
import { SolutionsSection } from '../components/SolutionsSection'
import { staggerContainer } from '../animations/transitions'

export function ProductsPage() {
  return (
    <motion.section
      className="page products-page products-sections-page"
      variants={staggerContainer}
      initial="hidden"
      animate="show"
    >
      <SegmentsSection className="products-first-section" />
      <SolutionsSection />
    </motion.section>
  )
}
