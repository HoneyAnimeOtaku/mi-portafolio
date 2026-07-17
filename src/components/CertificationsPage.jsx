import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

function CertificationsPage() {
  const { t } = useTranslation()
  const navigate = useNavigate()

  const certs = [
    { key: 'ccst',    year: 'Julio 2024',     color: '#00ff9f', icon: '🛡️', file: '/certs/ccst-cisco.pdf' },
    { key: 'aws',     year: 'Julio 2026',     color: '#00c3ff', icon: '☁️', link: 'https://www.credly.com/badges/587433a0-2c21-43bf-8cd2-70b43c663b2c/public_url' },
    { key: 'lic',     year: 'Diciembre 2024', color: '#00c3ff', icon: '🎓', file: '/certs/certificado-esfm-ipn.pdf' },
    { key: 'pasante', year: 'Diciembre 2024', color: '#c800ff', icon: '📜', file: '/certs/carta-pasante-ipn.pdf' },
    { key: 'ieee',    year: 'Diciembre 2023', color: '#ff2d9b', icon: '🏅', file: '/certs/ieee-ssci-volunteer.pdf' },
    { key: 'dev',     year: 'Marzo 2026',     color: '#00ff9f', icon: '💻', file: '/certs/fundamentos-dev-software.pdf' },
    { key: 'git',     year: 'Febrero 2026',   color: '#c800ff', icon: '🔧', file: '/certs/control-versiones-git.pdf' },
    { key: 'mod1',    year: 'Marzo 2026',     color: '#00c3ff', icon: '⚙️', file: '/certs/modulo-ingenieria-software-i.pdf' },
    { key: 'mod2',    year: 'Abril 2026',     color: '#ff2d9b', icon: '⚙️', file: '/certs/modulo-ingenieria-software-ii.pdf' },
    { key: 'mod3',    year: 'Mayo 2026',      color: '#00ff9f', icon: '📊', file: '/certs/modulo-gestion-proyectos.pdf' },
  ]

  return (
    <div style={styles.page}>
      <div style={styles.header}>
        <button style={styles.back} onClick={() => navigate('/')}>
          {t('certs.back')}
        </button>
        <span style={styles.title}>◈ {t('certs.pageTitle')}</span>
      </div>

      <div style={styles.grid}>
        {certs.map((cert, i) => (
          <div key={i} style={{ ...styles.card, borderColor: cert.color }}>
            <div style={styles.iconRow}>
              <span style={styles.icon}>{cert.icon}</span>
              <span style={{ ...styles.certYear, color: cert.color }}>{cert.year}</span>
            </div>
            <p style={{ ...styles.certTitle, color: cert.color }}>
              {t(`certs.items.${cert.key}.title`)}
            </p>
            <p style={styles.certOrg}>
              {t(`certs.items.${cert.key}.org`)}
            </p>
            <a
              href={cert.file || cert.link}
              target="_blank"
              rel="noreferrer"
              style={{ ...styles.viewBtn, color: cert.color, borderColor: cert.color }}
            >
              {t('certs.viewCert')}
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

const styles = {
  page: {
    background: '#05020f',
    minHeight: '100vh',
    padding: '1.5rem',
    fontFamily: "'Share Tech Mono', monospace",
    color: '#e0e0ff',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    marginBottom: '2rem',
    borderBottom: '1px solid #2a003a',
    paddingBottom: '1rem',
  },
  back: {
    background: 'transparent',
    border: '1px solid #ff2d9b',
    color: '#ff2d9b',
    padding: '6px 12px',
    borderRadius: '3px',
    cursor: 'pointer',
    fontFamily: "'Share Tech Mono', monospace",
    fontSize: '13px',
  },
  title: {
    fontFamily: "'Orbitron', monospace",
    fontSize: '13px',
    fontWeight: '700',
    color: '#c800ff',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
    gap: '16px',
  },
  card: {
    background: '#08010f',
    border: '1px solid',
    borderRadius: '8px',
    padding: '1.2rem',
    transition: 'box-shadow 0.2s',
  },
  iconRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '8px',
  },
  icon: { fontSize: '22px' },
  certTitle: {
    fontFamily: "'Orbitron', monospace",
    fontSize: '13px',
    fontWeight: '700',
    margin: '0 0 6px',
    lineHeight: '1.3',
  },
  certOrg: {
    fontSize: '11px',
    color: '#8a7a9a',
    margin: '0 0 1rem',
    lineHeight: '1.4',
  },
  certYear: {
    fontSize: '11px',
    fontWeight: '700',
  },
  viewBtn: {
    fontSize: '11px',
    border: '1px solid',
    borderRadius: '3px',
    padding: '6px 12px',
    textDecoration: 'none',
    display: 'inline-block',
  },
}

export default CertificationsPage