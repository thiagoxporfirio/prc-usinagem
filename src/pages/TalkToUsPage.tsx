import { motion } from 'motion/react'
import { fadeUp } from '../animations/transitions'

export function TalkToUsPage() {
  return (
    <motion.section
      className="page inner-page"
      variants={fadeUp}
      initial="hidden"
      animate="show"
    >
      <h1>Fale Conosco</h1>
      <p>
        Aqui podemos criar uma pagina dedicada para pedidos de orcamento e
        atendimento comercial.
      </p>
      <span className="stage-tag">Em construcao inicial</span>
    </motion.section>
  )
}
