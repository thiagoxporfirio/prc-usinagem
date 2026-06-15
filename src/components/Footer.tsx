import { Link, useLocation } from 'react-router-dom'
import {
  LuArrowUpRight,
  LuMail,
  LuMapPin,
  LuMessageCircle,
  LuPhone,
} from 'react-icons/lu'
import footerLogo from '../assets/Logoazul.svg'
import {
  BUDGET_WHATSAPP,
  CONTACT_EMAIL,
  MAIN_PHONE,
  SECONDARY_PHONE,
} from '../data/contact'
import { PATHS } from '../routers/paths'

export function Footer() {
  const year = new Date().getFullYear()
  const location = useLocation()
  const shouldShowFooterCta =
    location.pathname !== PATHS.ABOUT && location.pathname !== PATHS.CONTACT

  return (
    <footer className="site-footer">
      <div className="footer-container">
        {shouldShowFooterCta && (
          <div className="footer-cta">
            <div>
              <p className="footer-kicker">Projetos sob medida</p>
              <h2>Precisa de usinagem e caldeiraria de precisão?</h2>
            </div>
            <a
              href={BUDGET_WHATSAPP.href}
              className="footer-cta-link"
              target="_blank"
              rel="noreferrer"
            >
              Solicitar orçamento
              <LuArrowUpRight aria-hidden="true" />
            </a>
          </div>
        )}

        <div className="footer-grid">
          <section className="footer-brand-column">
            <img className="footer-brand" src={footerLogo} alt="PRC Usinagem" />
            <p className="footer-copy">
              Usinagem, caldeiraria, peças sob medida e soluções técnicas para
              empresas que precisam de qualidade, prazo e confiança.
            </p>
          </section>

          <section>
            <h3 className="footer-title">Contato</h3>
            <ul className="footer-list">
              <li className="footer-contact-item">
                <LuMapPin className="footer-icon" aria-hidden="true" />
                <span>
                  Av. (Marginal) Maurilio Bacega, 2277
                  <br />
                  Jardim Europa - Sertãozinho/SP
                </span>
              </li>
              <li>
                <a href={`mailto:${CONTACT_EMAIL}`} className="footer-contact-item">
                  <LuMail className="footer-icon" aria-hidden="true" />
                  <span>{CONTACT_EMAIL}</span>
                </a>
              </li>
              <li>
                <a href={MAIN_PHONE.href} className="footer-contact-item">
                  <LuPhone className="footer-icon" aria-hidden="true" />
                  <span>
                    {MAIN_PHONE.label}
                    <br />
                    {SECONDARY_PHONE.label}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={BUDGET_WHATSAPP.href}
                  className="footer-contact-item"
                  target="_blank"
                  rel="noreferrer"
                >
                  <LuMessageCircle className="footer-icon" aria-hidden="true" />
                  <span>{BUDGET_WHATSAPP.label}</span>
                </a>
              </li>
            </ul>
          </section>

          <section>
            <h3 className="footer-title">Saiba Mais</h3>
            <nav aria-label="Links de rodape">
              <ul className="footer-links">
                <li>
                  <Link to={PATHS.HOME}>Início</Link>
                </li>
                <li>
                  <Link to={PATHS.ABOUT}>Sobre nós</Link>
                </li>
                <li>
                  <Link to={PATHS.PRODUCTS}>Produtos</Link>
                </li>
                <li>
                  <Link to={PATHS.CONTACT}>Contato</Link>
                </li>
                <li>
                  <Link to={PATHS.TALK_TO_US}>Fale Conosco</Link>
                </li>
              </ul>
            </nav>
          </section>
        </div>

        <div className="footer-bottom">
          <span>© {year} PRC Usinagem</span>
          <span>Usinagem • Caldeiraria • Peças Industriais • Sertãozinho/SP</span>
        </div>
      </div>
    </footer>
  )
}
