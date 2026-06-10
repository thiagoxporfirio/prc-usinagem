import { Navigate, Route, Routes } from 'react-router-dom'
import { MainLayout } from '../layouts/MainLayout'
import { AboutPage } from '../pages/AboutPage'
import { ContactPage } from '../pages/ContactPage'
import { HomePage } from '../pages/HomePage'
import { ProductsPage } from '../pages/ProductsPage'
import { ServiceGalleryPage } from '../pages/ServiceGalleryPage'
import { TalkToUsPage } from '../pages/TalkToUsPage'
import { PATHS } from './paths'

export function AppRouter() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path={PATHS.HOME} element={<HomePage />} />
        <Route path={PATHS.ABOUT} element={<AboutPage />} />
        <Route path={PATHS.CONTACT} element={<ContactPage />} />
        <Route path={PATHS.PRODUCTS} element={<ProductsPage />} />
        <Route path={PATHS.SERVICE_GALLERY} element={<ServiceGalleryPage />} />
        <Route path={PATHS.TALK_TO_US} element={<TalkToUsPage />} />
        <Route path="*" element={<Navigate to={PATHS.HOME} replace />} />
      </Route>
    </Routes>
  )
}
