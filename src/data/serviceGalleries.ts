type ServiceGallery = {
  slug: string
  title: string
  image: string
  featured?: boolean
  layout?: 'wide' | 'compact' | 'half'
  galleryImages: string[]
}

function loadImages(modules: Record<string, string>) {
  return Object.entries(modules)
    .sort(([pathA], [pathB]) => pathA.localeCompare(pathB))
    .map(([, image]) => image)
}

const usinagemImages = loadImages(
  import.meta.glob<string>(
    '../assets/USINAGEM/*.{jpg,jpeg,JPG,JPEG,png,PNG}',
    {
      eager: true,
      import: 'default',
      query: '?url',
    },
  ),
)

const maquinasImages = loadImages(
  import.meta.glob<string>(
    '../assets/MÁQUINAS ALTAMENTE CAPACITADAS/*.{jpg,jpeg,JPG,JPEG,png,PNG}',
    {
      eager: true,
      import: 'default',
      query: '?url',
    },
  ),
)

const caldeirariaImages = loadImages(
  import.meta.glob<string>(
    '../assets/Caldeiraria/*.{jpg,jpeg,JPG,JPEG,png,PNG}',
    {
      eager: true,
      import: 'default',
      query: '?url',
    },
  ),
)

const equipamentosImages = loadImages(
  import.meta.glob<string>(
    '../assets/EQUIPAMENTO DE AUTOMATIZAÇÃO HIDRÁULICA/*.{jpg,jpeg,JPG,JPEG,png,PNG}',
    {
      eager: true,
      import: 'default',
      query: '?url',
    },
  ),
)

const reformaImages = loadImages(
  import.meta.glob<string>(
    '../assets/REFORMA E FABRICAÇÃO DE EQUIPAMENTOS/*.{jpg,jpeg,JPG,JPEG,png,PNG}',
    {
      eager: true,
      import: 'default',
      query: '?url',
    },
  ),
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
