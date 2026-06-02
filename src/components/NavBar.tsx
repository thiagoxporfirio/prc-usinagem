import { NavLink } from 'react-router-dom'
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
        PRC
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
