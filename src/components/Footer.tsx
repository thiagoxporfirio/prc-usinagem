import { Link, useLocation } from 'react-router-dom'
import { LuArrowUpRight, LuMail, LuMapPin, LuPhone } from 'react-icons/lu'
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
              <h2>Precisa de usinagem com precisão?</h2>
            </div>
            <Link to={PATHS.TALK_TO_US} className="footer-cta-link">
              Solicitar orçamento
              <LuArrowUpRight aria-hidden="true" />
            </Link>
          </div>
        )}

        <div className="footer-grid">
          <section className="footer-brand-column">
            <p className="footer-brand">PRC</p>
            <p className="footer-copy">
              Usinagem industrial, peças sob medida e soluções técnicas para
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
                <a href="mailto:contato@prcusinagem.com.br" className="footer-contact-item">
                  <LuMail className="footer-icon" aria-hidden="true" />
                  <span>contato@prcusinagem.com.br</span>
                </a>
              </li>
              <li>
                <a href="tel:+551639479474" className="footer-contact-item">
                  <LuPhone className="footer-icon" aria-hidden="true" />
                  <span>(16) 3947-9474</span>
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
          <span>Usinagem • Peças Industriais • Sertãozinho/SP</span>
        </div>
      </div>
    </footer>
  )
}
