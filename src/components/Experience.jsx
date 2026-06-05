import { useTranslation } from 'react-i18next'

function Experience() {
  const { t } = useTranslation()

  return (
    <section id="experiencia" style={styles.section}>

      <div style={styles.secHead}>
        <span style={styles.secNum}>[02]</span>
        <span style={styles.secTitle}>{t('sections.experience')}</span>
        <div style={styles.secLine}></div>
      </div>

      <div style={styles.list}>

        <div style={styles.item}>
          <div style={styles.dotCol}>
            <div style={{ ...styles.dot, borderColor: '#00ff9f', boxShadow: '0 0 6px #00ff9f55' }}></div>
            <div style={styles.lineV}></div>
          </div>
          <div>
            <p style={{ ...styles.role, color: '#00ff9f' }}>{t('experience.e1.role')}</p>
            <p style={styles.org}>IPN — Escuela Superior de Física y Matemáticas (ESFM)</p>
            <p style={styles.date}>{t('experience.e1.date')}</p>
            <p style={styles.desc}>{t('experience.e1.desc')}</p>
          </div>
        </div>

        <div style={styles.item}>
          <div style={styles.dotCol}>
            <div style={{ ...styles.dot, borderColor: '#ff2d9b', boxShadow: '0 0 6px #ff2d9b55' }}></div>
          </div>
          <div>
            <p style={{ ...styles.role, color: '#ff2d9b' }}>{t('experience.e2.role')}</p>
            <p style={{ ...styles.org, color: '#ff2d9b' }}>{t('experience.e2.org')}</p>
            <p style={styles.date}>{t('experience.e2.date')}</p>
            <p style={styles.desc}>{t('experience.e2.desc')}</p>
          </div>
        </div>

      </div>
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
    marginBottom: '1.2rem',
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
  list: { display: 'flex', flexDirection: 'column', gap: '14px' },
  item: { display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '0 1rem' },
  dotCol: { display: 'flex', flexDirection: 'column', alignItems: 'center' },
  dot: {
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    border: '2px solid',
    background: '#05020f',
    flexShrink: '0',
    marginTop: '3px',
  },
  lineV: {
    flex: '1',
    width: '1px',
    background: '#200030',
    margin: '4px 0',
  },
  role: { fontSize: '15px', margin: '0 0 2px' },
  org:  { fontSize: '17px', color: '#c800ff', margin: '0 0 2px' },
  date: { fontSize: '16px', color: '#5a4a6a', margin: '0 0 4px' },
  desc: { fontSize: '17px', color: '#5a4a6a', margin: '0', lineHeight: '1.5' },
}

export default Experience