import { motion } from 'motion/react'
import { fadeUp } from '../animations/transitions'
import { BUDGET_WHATSAPP } from '../data/contact'

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
        Solicite seu orçamento pelo WhatsApp {BUDGET_WHATSAPP.label} ou pelo
        atendimento comercial da PRC.
      </p>
      <a
        className="stage-tag"
        href={BUDGET_WHATSAPP.href}
        target="_blank"
        rel="noreferrer"
      >
        Solicitar orçamento
      </a>
    </motion.section>
  )
}
