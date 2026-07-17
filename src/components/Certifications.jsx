import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

function Certifications() {
  const { t } = useTranslation()
  const navigate = useNavigate()

  const certs = [
    { title: 'Voluntaria IEEE SSCI', org: 'IEEE', year: 'Diciembre 2023', color: '#ff2d9b', icon: '🏅' },
    { title: 'CCST Cybersecurity', org: 'Cisco Certified Support Technician', year: 'Julio 2024', color: '#00ff9f', icon: '🛡️' },
    { title: 'Lic. en Física y Matemáticas', org: 'IPN — ESFM', year: 'Diciembre 2024', color: '#00c3ff', icon: '🎓' },
    { title: 'Ingeniería de Software', org: 'Escuela de Código CDMX', year: '2026', color: '#c800ff', icon: '💻' },
    { title: 'Control de Versiones GIT', org: 'Agencia Digital CDMX', year: '2026', color: '#00ff9f', icon: '🔧' },
    { title: t('certs.inprogress.title'), org: t('certs.inprogress.org'), year: '2025', color: '#ff2d9b', icon: '⏳', dashed: true },
  ]

  return (
    <section id="certificaciones" style={styles.section}>

      <div style={styles.secHead}>
        <span style={styles.secNum}>[03]</span>
        <span style={styles.secTitle}>{t('sections.certifications')}</span>
        <div style={styles.secLine}></div>
      </div>

      <p style={styles.hint}>▸ {t('certs.clickhint')}</p>

      <div
        onClick={() => navigate('/certificaciones')}
        style={{ cursor: 'pointer' }}
      >
        <div style={styles.grid}>
          {certs.map((cert, i) => (
            <div
              key={i}
              style={{
                ...styles.card,
                borderColor: '#1a0028',
                borderStyle: cert.dashed ? 'dashed' : 'solid',
                opacity: cert.dashed ? 0.7 : 1,
              }}
            >
              <div style={styles.icon}>{cert.icon}</div>
              <p style={styles.certTitle}>{cert.title}</p>
              <p style={{ ...styles.certOrg, color: cert.color }}>{cert.org}</p>
              <p style={styles.certYear}>{cert.year}</p>
            </div>
          ))}
        </div>
      </div>

      <p style={styles.note}>{t('certs.note')}</p>

    </section>
  )
}

const styles = {
  section: {
    padding: '1.4rem 1.5rem',
    borderBottom: '1px solid #100018',
    fontFamily: "'Share Tech Mono', monospace",
  },
  secHead: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginBottom: '0.8rem',
  },
  secNum: { fontSize: '13px', color: '#ff2d9b' },
  secTitle: {
    fontFamily: "'Orbitron', monospace",
    fontSize: '11px',
    fontWeight: '700',
    letterSpacing: '0.1em',
    color: '#00c3ff',
  },
  secLine: {
    flex: '1',
    height: '1px',
    background: 'linear-gradient(to right, #2a003a, transparent)',
  },
  hint: {
    fontSize: '13px',
    color: '#c800ff',
    margin: '0 0 1rem',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
    gap: '10px',
  },
  card: {
    background: '#06010f',
    border: '1px solid',
    borderRadius: '6px',
    padding: '0.9rem 1rem',
    transition: 'box-shadow 0.2s',
  },
  icon: { fontSize: '20px', marginBottom: '6px' },
  certTitle: { fontSize: '11px', color: '#ddd', margin: '0 0 3px', lineHeight: '1.3' },
  certOrg:   { fontSize: '10px', margin: '0 0 2px' },
  certYear:  { fontSize: '10px', color: '#5a4a6a', margin: '0' },
  note: { fontSize: '13px', color: '#5a4a6a', marginTop: '1rem' },
}

export default Certifications