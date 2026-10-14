import { NavLink, Outlet, Link, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { site, socialLinks } from '../data.js'

const links = [
  ['/', 'Inicio'],
  ['/servicios', 'Servicios'],
  ['/mobiliario', 'Mobiliario'],
  ['/contacto', 'Contacto'],
]

export default function Layout() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <>
      <div className="ruler" aria-hidden="true" />
      <header className="site-header">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-8 gap-y-4 px-5 py-4">
          <Link to="/" className="brand" aria-label="KalterWoodtech, ir al inicio">
            <span className="brand-mark" aria-hidden="true">
              <svg viewBox="0 0 40 40" fill="none">
                <path d="M10 8v24m0-12 18-12M17 20l12 12" stroke="currentColor" strokeWidth="4" strokeLinecap="square" />
                <path d="M32 8v24" stroke="#E87524" strokeWidth="4" strokeLinecap="square" />
              </svg>
            </span>
            <span className="brand-name">Kalter<span>Wood</span>tech</span>
          </Link>
          <nav className="site-nav" aria-label="Navegación principal">
            {links.map(([to, label]) => (
              <NavLink key={to} to={to} end={to === '/'}
                className={({ isActive }) => `site-nav-link${isActive ? ' is-active' : ''}`}>
                {label}
              </NavLink>
            ))}
          </nav>
          <Link to="/contacto" className="header-contact">Hablemos <span aria-hidden="true">↗</span></Link>
        </div>
      </header>
      <main><Outlet /></main>
      <footer className="site-footer">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:grid-cols-2 lg:grid-cols-5 lg:py-16">
          <div className="lg:col-span-2">
            <p className="brand-name text-2xl text-chalk">Kalter<span>Wood</span>tech</p>
            <p className="mt-3 max-w-sm text-sm leading-6 text-chalk/70">
              Carpintería a medida. Diseño, oficio y materiales elegidos para acompañarte durante años.
            </p>
          </div>
          <div>
            <h2 className="footer-heading">Visítanos</h2>
            <p className="mt-3 text-sm leading-6 text-chalk/75">{site.address}<br />{site.hours}</p>
          </div>
          <div>
            <h2 className="footer-heading">Contacto</h2>
            <p className="mt-3 text-sm leading-7">
              <a href={`tel:${site.phone.replace(/[^\d+]/g, '')}`}>{site.phone}</a><br />
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </p>
          </div>
          <div>
            <h2 className="footer-heading">Síguenos</h2>
            <div className="mt-3 flex flex-wrap gap-3">
              {socialLinks.facebook && (
                <a className="social-link" href={socialLinks.facebook} target="_blank" rel="noreferrer" aria-label="KalterWoodtech en Facebook">
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M13.4 21v-8.2h2.8l.4-3.2h-3.2v-2c0-.9.3-1.6 1.6-1.6h1.7V3.1c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.3H7.2v3.2H10V21h3.4Z" />
                  </svg>
                  Facebook
                </a>
              )}
              {socialLinks.instagram && (
                <a className="social-link" href={socialLinks.instagram} target="_blank" rel="noreferrer" aria-label="KalterWoodtech en Instagram">
                  <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.8" r="1" fill="currentColor" stroke="none" />
                  </svg>
                  Instagram
                </a>
              )}
            </div>
          </div>
        </div>
        <div className="footer-bottom mx-auto max-w-7xl px-5 py-4 text-xs text-chalk/60">
          © {new Date().getFullYear()} KalterWoodtech · Carpintería a medida
        </div>
      </footer>
    </>
  )
}