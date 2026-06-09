import { useTranslation } from 'react-i18next'

function Experience() {
  const { t } = useTranslation()

  const experiences = [
    { key: 'e1', dotColor: '#ff2d9b', roleColor: '#ff2d9b', orgColor: '#ff2d9b', showLine: true },
    { key: 'e2', dotColor: '#c800ff', roleColor: '#c800ff', orgColor: '#c800ff', showLine: true },
    { key: 'e3', dotColor: '#00ff9f', roleColor: '#00ff9f', orgColor: '#00ff9f', showLine: false },
  ]

  return (
    <section id="experiencia" style={styles.section}>

      <div style={styles.secHead}>
        <span style={styles.secNum}>[02]</span>
        <span style={styles.secTitle}>{t('sections.experience')}</span>
        <div style={styles.secLine}></div>
      </div>

      <div style={styles.list}>
        {experiences.map((exp) => (
          <div key={exp.key} style={styles.item}>
            <div style={styles.dotCol}>
              <div style={{
                ...styles.dot,
                borderColor: exp.dotColor,
                boxShadow: `0 0 6px ${exp.dotColor}55`,
              }}></div>
              {exp.showLine && <div style={styles.lineV}></div>}
            </div>
            <div>
              <p style={{ ...styles.role, color: exp.roleColor }}>
                {t(`experience.${exp.key}.role`)}
              </p>
              <p style={{ ...styles.org, color: exp.orgColor }}>
                {t(`experience.${exp.key}.org`)}
              </p>
              <p style={styles.date}>
                {t(`experience.${exp.key}.date`)}
              </p>
              <p style={styles.desc}>
                {t(`experience.${exp.key}.desc`)}
              </p>
            </div>
          </div>
        ))}
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
  secNum: { fontSize: '13px', color: '#ff2d9b' },
  secTitle: {
    fontFamily: "'Orbitron', monospace",
    fontSize: '13px',
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
  role: { fontSize: '14px', margin: '0 0 2px' },
  org:  { fontSize: '13px', margin: '0 0 2px' },
  date: { fontSize: '13px', color: '#5a4a6a', margin: '0 0 4px' },
  desc: { fontSize: '13px', color: '#5a4a6a', margin: '0', lineHeight: '1.5' },
}

export default Experience