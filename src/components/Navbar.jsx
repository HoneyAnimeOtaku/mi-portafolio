import { useTranslation } from 'react-i18next'

function Navbar() {
  const { t, i18n } = useTranslation()

  function cambiarIdioma(lang) {
    i18n.changeLanguage(lang)
  }

  function scrollTo(id) {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav style={styles.nav}>
      <span style={styles.logo}>◈ HM_SYS &gt;_</span>

      <div style={styles.navRight}>
        <div style={styles.links}>
          <span style={styles.link} onClick={() => scrollTo('proyectos')}>
            {t('nav.projects')}
          </span>
          <span style={styles.link} onClick={() => scrollTo('experiencia')}>
            {t('nav.experience')}
          </span>
          <span style={styles.link} onClick={() => scrollTo('certificaciones')}>
            {t('nav.certifications')}
          </span>
          <span style={styles.link} onClick={() => scrollTo('contacto')}>
            {t('nav.contact')}
          </span>
        </div>

        <div style={styles.langToggle}>
          <button
            style={i18n.language === 'es' ? styles.langActive : styles.langBtn}
            onClick={() => cambiarIdioma('es')}
          >
            ES
          </button>
          <button
            style={i18n.language === 'en' ? styles.langActive : styles.langBtn}
            onClick={() => cambiarIdioma('en')}
          >
            EN
          </button>
        </div>
      </div>
    </nav>
  )
}

const styles = {
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0.9rem 1.5rem',
    borderBottom: '1px solid #2a003a',
    background: '#06020e',
    flexWrap: 'wrap',
    gap: '8px',
    fontFamily: "'Share Tech Mono', monospace",
    position: 'sticky',
    top: '0',
    zIndex: '100',
  },
  logo: {
    fontFamily: "'Orbitron', monospace",
    fontSize: '16px',
    fontWeight: '900',
    color: '#c800ff',
    letterSpacing: '0.12em',
  },
  navRight: {
    display: 'flex',
    alignItems: 'center',
    gap: '1.2rem',
  },
  links: {
    display: 'flex',
    gap: '1rem',
  },
  link: {
    fontSize: '16px',
    color: '#7a5f8a',
    cursor: 'pointer',
    transition: 'color 0.2s',
  },
  langToggle: {
    display: 'flex',
    border: '1px solid #c800ff',
    borderRadius: '3px',
    overflow: 'hidden',
  },
  langBtn: {
    padding: '4px 10px',
    fontSize: '16px',
    fontFamily: "'Share Tech Mono', monospace",
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    color: '#7a5f8a',
  },
  langActive: {
    padding: '4px 10px',
    fontSize: '16px',
    fontFamily: "'Share Tech Mono', monospace",
    background: 'rgba(200,0,255,0.15)',
    border: 'none',
    cursor: 'pointer',
    color: '#c800ff',
  },
}

export default Navbar