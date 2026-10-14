import { servicios } from '../data.js'

const pasos = [
  'Visita y medición en tu casa.',
  'Diseño y presupuesto cerrado.',
  'Fabricación en el taller.',
  'Instalación y repaso final.',
]

export default function Servicios() {
  return (
    <>
      <section className="page-hero">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:py-20">
          <p className="eyebrow">De la primera idea a la instalación</p>
          <h1 className="mt-4 max-w-3xl text-5xl font-extrabold leading-[1.02] sm:text-6xl lg:text-7xl">
            Buen diseño. <span className="text-orange">Mejor oficio.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-steel sm:text-xl">
            Soluciones de carpintería pensadas para tu espacio, tus necesidades y tu forma de vivir.
          </p>
        </div>
      </section>
      <div className="mx-auto max-w-7xl px-5 py-14 sm:py-20">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {servicios.map((s, index) => (
            <article key={s.medida} className="border border-ink/10 bg-white p-6 sm:p-8">
              <span className="flex h-11 w-11 items-center justify-center bg-orange/10 font-display text-sm font-extrabold text-orange">0{index + 1}</span>
              <h2 className="mt-6 text-2xl font-bold">{s.medida}</h2>
              <p className="mt-2 text-base text-steel">{s.texto}</p>
            </article>
          ))}
        </div>

        <section className="mt-20 sm:mt-28">
          <div className="max-w-2xl">
            <p className="eyebrow">Así trabajamos</p>
            <h2 className="mt-2 text-4xl font-bold sm:text-5xl">Un proceso claro, de principio a fin.</h2>
          </div>
          <ol className="mt-9 grid gap-px bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
            {pasos.map((paso, index) => (
              <li key={paso} className="bg-chalk p-6 sm:p-7">
                <span className="font-display text-4xl font-extrabold text-orange">0{index + 1}</span>
                <p className="mt-5 font-display text-lg font-bold leading-snug">{paso}</p>
              </li>
            ))}
          </ol>
        </section>
      </div>
    </>
  )
}