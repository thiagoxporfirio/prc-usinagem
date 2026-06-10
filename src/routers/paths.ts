export const PATHS = {
  HOME: '/',
  ABOUT: '/sobre-nos',
  CONTACT: '/contato',
  PRODUCTS: '/produtos',
  SERVICE_GALLERIES: '/servicos',
  SERVICE_GALLERY: '/servicos/:serviceSlug',
  TALK_TO_US: '/fale-conosco',
} as const

export function getServiceGalleryPath(slug: string) {
  return `${PATHS.SERVICE_GALLERIES}/${slug}`
}
