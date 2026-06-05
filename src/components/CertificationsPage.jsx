import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

function CertificationsPage() {
  const { t } = useTranslation()
  const navigate = useNavigate()

  const certs = [
    {
      title: 'CCST Cybersecurity',
      org: 'Cisco Certified Support Technician',
      year: '2024',
      color: '#00ff9f',
      file: '/certs/ccst.pdf',
    },
    {
      title: 'AWS Cloud Practitioner',
      org: 'Amazon Web Services',
      year: '2024',
      color: '#00c3ff',
      file: '/certs/aws.pdf',
    },
  ]

  return (
    <div style={styles.page}>
      <div style={styles.header}>
        <button style={styles.back} onClick={() => navigate('/')}>
          ← volver
        </button>
        <span style={styles.title}>◈ CERTIFICACIONES & DIPLOMAS</span>
      </div>

      <div style={styles.grid}>
        {certs.map((cert, i) => (
          <div key={i} style={{ ...styles.card, borderColor: cert.color }}>
            <p style={{ ...styles.certTitle, color: cert.color }}>{cert.title}</p>
            <p style={styles.certOrg}>{cert.org}</p>
            <p style={styles.certYear}>{cert.year}</p>
            <div style={styles.preview}>
              <p style={styles.previewText}>📄 PDF disponible próximamente</p>
            </div>
            <a
              href={cert.file}
              target="_blank"
              rel="noreferrer"
              style={{ ...styles.viewBtn, color: cert.color, borderColor: cert.color }}
            >
              Ver certificado ↗
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
    fontSize: '17px',
  },
  title: {
    fontFamily: "'Orbitron', monospace",
    fontSize: '16px',
    fontWeight: '700',
    color: '#c800ff',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '16px',
  },
  card: {
    background: '#08010f',
    border: '1px solid',
    borderRadius: '8px',
    padding: '1.5rem',
  },
  certTitle: {
    fontFamily: "'Orbitron', monospace",
    fontSize: '17px',
    fontWeight: '700',
    margin: '0 0 6px',
  },
  certOrg:  { fontSize: '17px', color: '#8a7a9a', margin: '0 0 4px' },
  certYear: { fontSize: '16px', color: '#5a4a6a', margin: '0 0 1rem' },
  preview: {
    background: '#0d0018',
    border: '1px dashed #2a003a',
    borderRadius: '4px',
    padding: '2rem',
    textAlign: 'center',
    marginBottom: '1rem',
  },
  previewText: { fontSize: '17px', color: '#5a4a6a', margin: '0' },
  viewBtn: {
    fontSize: '16px',
    border: '1px solid',
    borderRadius: '3px',
    padding: '6px 12px',
    textDecoration: 'none',
    display: 'inline-block',
  },
}

export default CertificationsPage