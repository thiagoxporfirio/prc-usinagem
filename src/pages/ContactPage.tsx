import { motion } from 'motion/react'
import {
  LuArrowUpRight,
  LuMail,
  LuMapPin,
  LuMessageCircle,
  LuPhone,
} from 'react-icons/lu'
import { fadeUp, staggerContainer } from '../animations/transitions'
import prcMatrizImage from '../assets/prcMatriz.avif'
import {
  BUDGET_WHATSAPP,
  CONTACT_EMAIL,
  MAIN_PHONE,
  SECONDARY_PHONE,
} from '../data/contact'

const CONTACT_ITEMS = [
  {
    icon: LuMapPin,
    label: 'Endereço',
    content: (
      <>
        Av. (Marginal) Maurílio Bacega, 2277
        <br />
        Jardim Europa — Sertãozinho/SP
      </>
    ),
  },
  {
    icon: LuMail,
    label: 'E-mail',
    content: CONTACT_EMAIL,
    href: `mailto:${CONTACT_EMAIL}`,
  },
  {
    icon: LuPhone,
    label: 'Telefone',
    content: (
      <>
        {MAIN_PHONE.label}
        <br />
        {SECONDARY_PHONE.label}
      </>
    ),
    href: MAIN_PHONE.href,
  },
  {
    icon: LuMessageCircle,
    label: 'WhatsApp para orçamento',
    content: BUDGET_WHATSAPP.label,
    href: BUDGET_WHATSAPP.href,
  },
]

export function ContactPage() {
  return (
    <motion.section
      className="page contact-page"
      variants={staggerContainer}
      initial="hidden"
      animate="show"
    >
      <motion.header className="contact-hero" variants={fadeUp}>
        <p className="contact-kicker">Contato</p>
        <h1>
          Precisa de <strong>usinagem ou peça sob medida?</strong> Envie o
          projeto e <strong>solicite um orçamento.</strong>
        </h1>
      </motion.header>

      <motion.div className="contact-grid" variants={staggerContainer}>
        <motion.section className="contact-map-card" variants={fadeUp}>
          <div className="contact-section-heading">
            <span />
            <h2>Venha nos visitar</h2>
          </div>
          <div className="contact-map-wrap">
            <iframe
              title="Mapa da PRC Usinagem"
              src="https://www.google.com/maps?q=Av.+Marginal+Maurilio+Bacega,+2277,+Sertaozinho,+SP&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </motion.section>

        <motion.section className="contact-info-card" variants={fadeUp}>
          <div className="contact-section-heading">
            <span />
            <h2>Entre em contato</h2>
          </div>

          <ul className="contact-list">
            {CONTACT_ITEMS.map((item) => {
              const Icon = item.icon
              const content = (
                <>
                  <Icon className="contact-icon" aria-hidden="true" />
                  <span>
                    <small>{item.label}</small>
                    {item.content}
                  </span>
                </>
              )

              return (
                <li key={item.label}>
                  {item.href ? (
                    <a href={item.href} className="contact-item">
                      {content}
                    </a>
                  ) : (
                    <div className="contact-item">{content}</div>
                  )}
                </li>
              )
            })}
          </ul>

          <a
            href={BUDGET_WHATSAPP.href}
            className="contact-budget-link"
            target="_blank"
            rel="noreferrer"
          >
            Solicitar orçamento
            <LuArrowUpRight aria-hidden="true" />
          </a>
        </motion.section>
      </motion.div>

      <motion.img
        className="contact-feature-image"
        src={prcMatrizImage}
        alt="Fachada da PRC Usinagem"
        variants={fadeUp}
      />
    </motion.section>
  )
}
