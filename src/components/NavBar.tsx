import { NavLink } from 'react-router-dom'
import logoWhite from '../assets/LogoBranca.svg'
import logoBlue from '../assets/Logoazul.svg'
import { PATHS } from '../routers/paths'

const NAV_ITEMS = [
  { label: 'Inicio', to: PATHS.HOME },
  { label: 'Sobre nos', to: PATHS.ABOUT },
  { label: 'Contato', to: PATHS.CONTACT },
  { label: 'Produtos', to: PATHS.PRODUCTS },
  { label: 'Fale Conosco', to: PATHS.TALK_TO_US, featured: true },
]

export function NavBar() {
  return (
    <nav className="top-nav" aria-label="Navegacao principal">
      <NavLink to={PATHS.HOME} className="logo" end>
        <img
          className="logo-image logo-image-blue"
          src={logoBlue}
          alt="PRC Usinagem"
        />
        <img
          className="logo-image logo-image-white"
          src={logoWhite}
          alt=""
          aria-hidden="true"
        />
      </NavLink>

      <div className="nav-links">
        {NAV_ITEMS.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === PATHS.HOME}
            className={({ isActive }) =>
              `nav-link${item.featured ? ' nav-link-featured' : ''}${
                isActive ? ' active' : ''
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </div>
    </nav>
  )
}
