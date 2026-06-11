type ServiceGallery = {
  slug: string
  title: string
  image: string
  featured?: boolean
  layout?: 'wide' | 'compact' | 'half'
  galleryImages: string[]
}

const serviceImageModules = import.meta.glob<string>(
  '../assets/**/*.{jpg,jpeg,JPG,JPEG,png,PNG}',
  {
    eager: true,
    import: 'default',
    query: '?url',
  },
)

function normalizePath(path: string) {
  return path
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .toLowerCase()
}

function loadServiceImages(directoryName: string, coverFileName: string) {
  const directoryPath = `/${normalizePath(directoryName)}/`
  const coverPath = `/${normalizePath(coverFileName)}`
  const entries = Object.entries(serviceImageModules)
    .filter(([path]) => normalizePath(path).includes(directoryPath))
    .sort(([pathA], [pathB]) =>
      pathA.localeCompare(pathB, undefined, { numeric: true }),
    )

  const coverEntry = entries.find(([path]) =>
    normalizePath(path).endsWith(coverPath),
  )
  const orderedEntries = coverEntry
    ? [coverEntry, ...entries.filter(([path]) => path !== coverEntry[0])]
    : entries

  return orderedEntries.map(([, image]) => image)
}

const usinagemImages = loadServiceImages('USINAGEM', 'Usinagem.jpg')

const maquinasImages = loadServiceImages(
  'MÁQUINAS ALTAMENTE CAPACITADAS',
  'Torno.jpg',
)

const caldeirariaImages = loadServiceImages(
  'Caldeiraria',
  'WhatsApp Image 2026-05-29 at 07.27.24 (3).jpeg',
)

const equipamentosImages = loadServiceImages(
  'EQUIPAMENTO DE AUTOMATIZAÇÃO HIDRÁULICA',
  'Central.JPG',
)

const reformaImages = loadServiceImages(
  'REFORMA E FABRICAÇÃO DE EQUIPAMENTOS',
  'Engrenagens.jpg',
)

function createServiceGallery(
  service: Omit<ServiceGallery, 'image'> & { galleryImages: string[] },
): ServiceGallery {
  return {
    ...service,
    image: service.galleryImages[0],
  }
}

export const SERVICE_GALLERIES: ServiceGallery[] = [
  createServiceGallery({
    slug: 'usinagem-com-precisao',
    title: 'Usinagem com precisão',
    featured: true,
    galleryImages: usinagemImages,
  }),
  createServiceGallery({
    slug: 'maquinas-altamente-capacitadas',
    title: 'Máquinas altamente capacitadas',
    layout: 'wide',
    galleryImages: maquinasImages,
  }),
  createServiceGallery({
    slug: 'caldeiraria',
    title: 'Caldeiraria',
    layout: 'compact',
    galleryImages: caldeirariaImages,
  }),
  createServiceGallery({
    slug: 'equipamentos-de-automatizacao-hidraulica',
    title: 'Equipamentos de automatização hidráulica',
    layout: 'half',
    galleryImages: equipamentosImages,
  }),
  createServiceGallery({
    slug: 'reforma-e-fabricacao-de-equipamentos',
    title: 'Reforma e fabricação de equipamentos',
    layout: 'half',
    galleryImages: reformaImages,
  }),
]

export function getServiceGalleryBySlug(slug?: string) {
  return SERVICE_GALLERIES.find((service) => service.slug === slug)
}
