import { AnimatePresence, motion } from 'motion/react'
import { Outlet, useLocation } from 'react-router-dom'
import { pageTransition } from '../animations/transitions'
import { Footer } from '../components/Footer'
import { NavBar } from '../components/NavBar'
import { PATHS } from '../routers/paths'

export function MainLayout() {
  const location = useLocation()
  const isHome = location.pathname === PATHS.HOME

  return (
    <div className={`app-shell${isHome ? ' home-shell' : ''}`}>
      <header className={`site-header${isHome ? ' home-header' : ''}`}>
        <NavBar />
      </header>

      <main className={`site-content${isHome ? ' home-content' : ''}`}>
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            className="route-transition"
            variants={pageTransition}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  )
}
