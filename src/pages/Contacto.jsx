import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { mapQuery, site } from '../data.js'

const field = 'mt-2 w-full border border-ink/15 bg-white px-4 py-3 text-base outline-none transition placeholder:text-steel/60 focus:border-orange focus:ring-2 focus:ring-orange/15'

export default function Contacto() {
  const form = useRef(null)
  const [estado, setEstado] = useState('idle')

  const enviar = async (e) => {
    e.preventDefault()
    setEstado('enviando')
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE,
        import.meta.env.VITE_EMAILJS_TEMPLATE,
        form.current,
        { publicKey: import.meta.env.VITE_EMAILJS_KEY }
      )
      setEstado('ok')
      form.current.reset()
    } catch {
      setEstado('error')
    }
  }

  return (
    <>
      <section className="page-hero">
        <div className="mx-auto max-w-7xl px-5 py-14 sm:py-16">
          <p className="eyebrow">Cuéntanos qué tienes en mente</p>
          <h1 className="mt-3 text-5xl font-extrabold sm:text-6xl">Hablemos de tu <span className="text-orange">proyecto.</span></h1>
        </div>
      </section>
      <div className="mx-auto grid max-w-7xl items-stretch gap-6 px-5 py-12 sm:gap-8 sm:py-16 lg:grid-cols-2">
        <section className="contact-panel flex flex-col" aria-labelledby="ubicacion-title">
          <div className="p-6 sm:p-8">
            <h2 id="ubicacion-title" className="text-2xl font-bold">Ven a conocernos</h2>
            <p className="mt-2 text-base text-steel">{site.address}</p>
            <p className="mt-1 text-sm text-steel">{site.hours}</p>
            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3">
              <a
                className="call-button"
                href={`tel:${site.phone.replace(/[^\d+]/g, '')}`}
                aria-label={`Llamar a KalterWoodtech al ${site.phone}`}
              >
                <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
                  <path d="M5 3h4l2 5-2.5 1.5a15 15 0 0 0 6 6L16 13l5 2v4c0 1.1-.9 2-2 2C10.2 21 3 13.8 3 5c0-1.1.9-2 2-2Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                </svg>
                Llamar: {site.phone}
              </a>
              <a className="text-sm font-semibold text-ink underline decoration-orange underline-offset-4 hover:text-orange" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </div>
          </div>
          <div className="contact-map-frame" aria-label="Mapa de ubicación">
            <iframe
              title={`Ubicación de KalterWoodtech: ${mapQuery}`}
              src={`https://maps.google.com/maps?q=${encodeURIComponent(mapQuery)}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <a
            className="map-directions"
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(mapQuery)}`}
            target="_blank"
            rel="noreferrer"
          >
            Abrir indicaciones en Google Maps <span aria-hidden="true">↗</span>
          </a>
        </section>
        <form ref={form} onSubmit={enviar} className="contact-panel flex flex-col space-y-5 p-6 shadow-sm sm:p-8">
          <div>
            <p className="eyebrow">Cuéntanos tu idea</p>
            <h2 className="mt-2 text-2xl font-bold">¿Qué proyecto tienes en mente?</h2>
            <p className="mt-1 text-sm text-steel">Completa el formulario y nos pondremos en contacto contigo.</p>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block font-display text-sm font-bold">Nombre
              <input className={field} name="from_name" required autoComplete="name" placeholder="Tu nombre" /></label>
            <label className="block font-display text-sm font-bold">Email
              <input className={field} type="email" name="reply_to" required autoComplete="email" placeholder="tu@email.com" /></label>
          </div>
          <label className="block font-display text-sm font-bold">Teléfono <span className="font-normal text-steel">(opcional)</span>
            <input className={field} type="tel" name="phone" autoComplete="tel" placeholder="Tu teléfono" /></label>
          <label className="flex flex-1 flex-col font-display text-sm font-bold">Cuéntanos tu proyecto
            <textarea className={`${field} min-h-[140px] flex-1 resize-y`} name="message" rows="5" required placeholder="¿Qué te gustaría hacer? ¿Tienes medidas o ideas de materiales?" /></label>
          <button disabled={estado === 'enviando'}
            className="button-primary w-full cursor-pointer disabled:cursor-wait disabled:opacity-60 sm:w-auto">
            {estado === 'enviando' ? 'Enviando…' : 'Enviar consulta'} <span aria-hidden="true">↗</span>
          </button>
          <p role="status" aria-live="polite" className="text-sm text-steel">
            {estado === 'ok' && 'Mensaje enviado. Te contestaremos pronto.'}
            {estado === 'error' && 'No se pudo enviar. Revisa tu conexión o llámanos al ' + site.phone + '.'}
          </p>
        </form>
      </div>
    </>
  )
}