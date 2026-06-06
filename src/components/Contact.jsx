import { useTranslation } from 'react-i18next'

function Contact() {
  const { t } = useTranslation()

  const links = [
    { label: 'GitHub',         href: 'https://github.com/HoneyAnimeOtaku', color: '#00ff9f' },
    { label: 'LinkedIn',       href: 'https://linkedin.com/in/honey-maldonado', color: '#00c3ff' },
    { label: 'Google Scholar', href: '#', color: '#c800ff' },
    { label: 'Email',          href: 'hmaldonadod1700@alumno.ipn.mx', color: '#ff2d9b' },
  ]

  return (
    <section id="contacto" style={styles.section}>
      <div style={styles.secHead}>
        <span style={styles.secNum}>[06]</span>
        <span style={styles.secTitle}>{t('sections.contact')}</span>
        <div style={styles.secLine}></div>
      </div>
      <div style={styles.content}>
        <div>
          <p style={styles.prompt}>&gt; {t('contact.title')}_</p>
          <p style={styles.sub}>{t('contact.sub')}</p>
        </div>
        <div style={styles.links}>
          {links.map((link, i) => (
            <a
              key={i}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              style={{
                ...styles.link,
                color: link.color,
                borderColor: link.color,
              }}
            >
              {link.label} ↗
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

const styles = {
  section: {
    padding: '1.4rem 1.5rem 2.5rem',
    fontFamily: "'Share Tech Mono', monospace",
  },
  secHead: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginBottom: '1.4rem',
  },
  secNum: { fontSize: '16px', color: '#ff2d9b' },
  secTitle: {
    fontFamily: "'Orbitron', monospace",
    fontSize: '17px',
    fontWeight: '700',
    letterSpacing: '0.1em',
    color: '#ff2d9b',
  },
  secLine: {
    flex: '1',
    height: '1px',
    background: 'linear-gradient(to right, #2a003a, transparent)',
  },
  content: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '1.2rem',
  },
  prompt: {
    fontFamily: "'Orbitron', monospace",
    fontSize: '17px',
    color: '#ff2d9b',
    margin: '0 0 4px',
  },
  sub: {
    fontSize: '16px',
    color: '#5a4a6a',
    margin: '0',
  },
  links: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
  },
  link: {
    fontSize: '16px',
    border: '1px solid',
    borderRadius: '3px',
    padding: '6px 12px',
    textDecoration: 'none',
  },
}

export default Contact