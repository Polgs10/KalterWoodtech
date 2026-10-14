// Edita aquí los datos del cliente. Las imágenes son "public IDs" de Cloudinary.
export const site = {
  name: 'KalterWoodtech',
  phone: '657 927 357',
  email: 'simon@ejemplo.com',
  address: 'Calle P.º de los Leñadores, 10',
  hours: 'Lunes a viernes, 7:00–15:30',
}

export const mapQuery = import.meta.env.VITE_GOOGLE_MAPS_QUERY || site.address

export const socialLinks = {
  facebook: import.meta.env.VITE_FACEBOOK_URL || '',
  instagram: import.meta.env.VITE_INSTAGRAM_URL || '',
}

export const cloud = import.meta.env.VITE_CLOUDINARY_CLOUD
export const img = (id, w = 900) =>
  `https://res.cloudinary.com/${cloud}/image/upload/f_auto,q_auto,w_${w}/${id}`

export const servicios = [
  { medida: 'Cocinas', texto: 'Frentes, encimeras y columnas diseñados para el espacio exacto de tu cocina.' },
  { medida: 'Armarios', texto: 'Empotrados y vestidores con puertas correderas o abatibles, hasta el techo.' },
  { medida: 'Puertas y ventanas', texto: 'Fabricación y reparación en madera maciza, con ajuste en obra.' },
  { medida: 'Escaleras', texto: 'Peldaños, barandillas y zancas, tanto nuevas como restauradas.' },
  { medida: 'Exterior', texto: 'Pérgolas, vallas y tarimas tratadas para aguantar sol y humedad.' },
  { medida: 'Restauración', texto: 'Recuperamos muebles antiguos conservando la madera original.' },
]

export const colecciones = [
  {
    id: 'armarios',
    nombre: 'Armarios y vestidores',
    descripcion: 'Almacenaje a medida, pensado hasta el último detalle.',
    piezas: [
      { titulo: 'Ideas para aprovechar el espacio', imagen: 'photo-1615874694520-474822394e73' },
      { titulo: 'Almacenaje integrado', imagen: 'photo-1616486338812-3dadae4b4ace' },
      { titulo: 'Madera y luz natural', imagen: 'photo-1600210492486-724fe5c67fb0' },
      { titulo: 'Diseño de líneas sencillas', imagen: 'photo-1600607687939-ce8a6c25118c' },
      { titulo: 'Detalles que hacen hogar', imagen: 'photo-1600585154340-be6161a56a0c' },
    ],
  },
  {
    id: 'dormitorios',
    nombre: 'Dormitorios',
    descripcion: 'Muebles serenos, hechos para encajar en tu espacio.',
    piezas: [
      { titulo: 'Un espacio para descansar', imagen: 'photo-1615874694520-474822394e73' },
      { titulo: 'Tonos cálidos y naturales', imagen: 'photo-1633944095397-878622ebc01c' },
      { titulo: 'Madera en equilibrio', imagen: 'photo-1616486338812-3dadae4b4ace' },
      { titulo: 'Diseño pensado para ti', imagen: 'photo-1600210492486-724fe5c67fb0' },
      { titulo: 'Texturas para desconectar', imagen: 'photo-1600607687939-ce8a6c25118c' },
    ],
  },
  {
    id: 'cocinas',
    nombre: 'Cocinas',
    descripcion: 'Diseño funcional y materiales elegidos para durar.',
    piezas: [
      { titulo: 'Cocinas para vivirlas', imagen: 'photo-1600585154340-be6161a56a0c' },
      { titulo: 'Materiales con carácter', imagen: 'photo-1600607687939-ce8a6c25118c' },
      { titulo: 'Luz para cada momento', imagen: 'photo-1600210492486-724fe5c67fb0' },
      { titulo: 'Una distribución funcional', imagen: 'photo-1616486338812-3dadae4b4ace' },
      { titulo: 'Ideas para tu hogar', imagen: 'photo-1633944095397-878622ebc01c' },
    ],
  },
  {
    id: 'salones',
    nombre: 'Salones y comedores',
    descripcion: 'Piezas que reúnen diseño, oficio y vida cotidiana.',
    piezas: [
      { titulo: 'Un lugar para reunirse', imagen: 'photo-1600210492486-724fe5c67fb0' },
      { titulo: 'Mobiliario de líneas sencillas', imagen: 'photo-1616486338812-3dadae4b4ace' },
      { titulo: 'Espacios para compartir', imagen: 'photo-1600607687939-ce8a6c25118c' },
      { titulo: 'Texturas naturales', imagen: 'photo-1600585154340-be6161a56a0c' },
      { titulo: 'Un hogar a tu medida', imagen: 'photo-1633944095397-878622ebc01c' },
    ],
  },
]