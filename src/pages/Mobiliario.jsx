import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Keyboard } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { colecciones } from '../data.js'

export default function Mobiliario() {
  return (
    <div className="pb-8">
      <section className="page-hero">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:py-20">
          <p className="eyebrow">Hecho a medida, hecho para durar</p>
          <h1 className="mt-4 max-w-3xl text-5xl font-extrabold leading-[1.02] sm:text-6xl lg:text-7xl">
            Cada espacio tiene su <span className="text-orange">propia forma.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-steel sm:text-xl">
            Explora ideas para tu hogar. Diseñamos y fabricamos cada pieza a medida, cuidando los materiales y cada acabado.
          </p>
          <a href="#armarios" className="button-primary mt-8 inline-flex">Explorar colecciones <span aria-hidden="true">↓</span></a>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-5">
        <div className="gallery-note -mt-5">
          <span className="gallery-note-mark" aria-hidden="true">i</span>
          <p>Imágenes de referencia para inspirarte; sustitúyelas por fotografías propias para mostrar tus proyectos reales.</p>
        </div>

        <div className="mt-16 space-y-16 sm:mt-20 sm:space-y-20">
          {colecciones.map((coleccion, index) => (
            <section key={coleccion.id} id={coleccion.id} aria-labelledby={`${coleccion.id}-title`}>
              <div className="mb-6 flex flex-wrap items-end justify-between gap-4 sm:mb-8">
                <div>
                  <p className="eyebrow">0{index + 1} / Colección</p>
                  <h2 id={`${coleccion.id}-title`} className="mt-2 text-3xl font-bold sm:text-4xl">{coleccion.nombre}</h2>
                  <p className="mt-2 max-w-xl text-steel">{coleccion.descripcion}</p>
                </div>
                <span className="hidden font-display text-sm font-bold text-steel sm:block">
                  {coleccion.piezas.length} ideas
                </span>
              </div>

              <Swiper
                className="collection-swiper"
                modules={[Navigation, Pagination, Keyboard]}
                navigation
                pagination={{ clickable: true }}
                keyboard
                spaceBetween={18}
                slidesPerView={1.12}
                breakpoints={{
                  640: { slidesPerView: 2, spaceBetween: 20 },
                  1024: { slidesPerView: 3, spaceBetween: 24 },
                }}
              >
                {coleccion.piezas.map((pieza) => (
                  <SwiperSlide key={pieza.titulo}>
                    <article className="gallery-card">
                      <img
                        src={`https://images.unsplash.com/${pieza.imagen}?auto=format&fit=crop&w=900&q=80`}
                        alt={pieza.titulo}
                        loading="lazy"
                        className="gallery-image"
                      />
                      <div className="gallery-caption">
                        <span className="gallery-caption-kicker">Diseño a medida</span>
                        <h3>{pieza.titulo}</h3>
                      </div>
                    </article>
                  </SwiperSlide>
                ))}
              </Swiper>
            </section>
          ))}
        </div>
      </div>
    </div>
  )
}