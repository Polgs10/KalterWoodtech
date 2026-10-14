import { Link } from 'react-router-dom'
import { servicios, site } from '../data.js'

export default function Inicio() {
  return (
    <>
      <section className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-12 sm:py-16 lg:grid-cols-2 lg:gap-16 lg:py-20">
        <div className="relative z-10">
          <p className="eyebrow">KalterWoodtech · Carpintería a medida</p>
          <h1 className="hero-in mt-5 max-w-3xl text-5xl font-extrabold leading-[.98] sm:text-6xl lg:text-7xl">
            Madera con intención. <span className="text-orange">Hecha para ti.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-steel sm:text-xl">
            Diseñamos y fabricamos cocinas, armarios y muebles que aprovechan cada espacio y están hechos para durar.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contacto" className="button-primary">Cuéntanos tu idea <span aria-hidden="true">↗</span></Link>
            <Link to="/mobiliario" className="inline-flex items-center border border-ink/20 px-5 py-3 font-display text-sm font-bold transition hover:border-orange hover:text-orange">Ver mobiliario</Link>
          </div>
          <div className="mt-10 flex items-center gap-3 text-sm text-steel">
            <span className="h-px w-10 bg-orange" />
            Diseño · Fabricación · Instalación
          </div>
        </div>
        <div className="relative">
          <img
            className="h-[360px] w-full object-cover sm:h-[480px] lg:h-[560px]"
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85"
            alt={`Interior de inspiración para un proyecto de ${site.name}`}
            fetchPriority="high"
          />
          <div className="absolute -bottom-5 left-4 bg-white px-5 py-4 shadow-xl sm:left-8 sm:px-7">
            <p className="font-display text-2xl font-extrabold">A medida.</p>
            <p className="text-sm text-steel">Con atención a cada detalle.</p>
          </div>
          <span className="absolute -right-3 -top-3 -z-10 h-28 w-28 border-2 border-orange sm:-right-5 sm:-top-5 sm:h-36 sm:w-36" />
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="eyebrow">Lo que hacemos</p>
              <h2 className="mt-2 text-4xl font-bold sm:text-5xl">Oficio para cada espacio.</h2>
            </div>
            <Link to="/servicios" className="font-display text-sm font-bold text-steel underline decoration-orange decoration-2 underline-offset-4 hover:text-ink">Ver todos los servicios ↗</Link>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {servicios.slice(0, 6).map((s, index) => (
              <article key={s.medida} className="group border border-ink/10 bg-chalk/60 p-6 transition hover:-translate-y-1 hover:border-orange/50 hover:bg-white sm:p-7">
                <span className="font-display text-sm font-extrabold text-orange">0{index + 1}</span>
                <h3 className="mt-4 text-2xl font-bold">{s.medida}</h3>
                <p className="mt-2 text-base text-steel">{s.texto}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:py-20">
        <div className="relative overflow-hidden bg-ink px-7 py-10 text-chalk sm:px-12 sm:py-14">
          <span className="absolute -right-14 -top-24 h-72 w-72 rounded-full border border-white/10" aria-hidden="true" />
          <span className="absolute -right-1 -top-12 h-56 w-56 rounded-full border border-orange/50" aria-hidden="true" />
          <div className="relative flex flex-wrap items-center justify-between gap-8">
            <div className="max-w-xl">
              <p className="eyebrow text-orange">Tu espacio, tu proyecto</p>
              <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight sm:text-4xl">¿Empezamos a diseñar algo único?</h2>
              <p className="mt-3 text-base text-chalk/70">Cuéntanos qué necesitas y lo convertimos en un proyecto a medida.</p>
            </div>
            <Link to="/contacto" className="inline-flex items-center gap-4 bg-orange px-6 py-4 font-display text-sm font-bold text-white transition hover:bg-white hover:text-ink">Pedir presupuesto <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>
    </>
  )
}