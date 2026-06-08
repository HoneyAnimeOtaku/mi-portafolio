import { useTranslation } from 'react-i18next'

function Skills() {
  const { t } = useTranslation()

  const skillBlocks = [
    {
      label: t('skills.languages'),
      color: '#00ff9f',
      items: ['Python', 'C++', 'C', 'C#', 'Java','Rust', 'Julia', 'HTML', 'CSS', 'JavaScript', 'SQL'],
    },
    {
      label: t('skills.crypto'),
      color: '#c800ff',
      items: ['Post-quantum', 'ZKP', 'PKI', 'TLS'],
    },
    {
      label: 'IA / ML',
      color: '#ff2d9b',
      items: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'MatpLotlib'],
    },
    {
      label: 'Cloud & DevOps',
      color: '#00c3ff',
      items: ['AWS', 'Docker', 'Kubernetes'],
    },
    {
      label: t('skills.math'),
      color: '#00ff9f',
      items: [t('skills.linear'), t('skills.groups'), t('skills.calculus')],
    },
    {
      label: t('skills.security'),
      color: '#ff2d9b',
      items: ['Pentesting', 'SIEM', 'Zero-trust'],
    },
  ]

  return (
    <section id="habilidades" style={styles.section}>

      <div style={styles.secHead}>
        <span style={styles.secNum}>[04]</span>
        <span style={styles.secTitle}>{t('sections.skills')}</span>
        <div style={styles.secLine}></div>
      </div>

      <div style={styles.grid}>
        {skillBlocks.map((block, i) => (
          <div key={i} style={styles.block}>
            <p style={styles.label}>// {block.label}</p>
            <div style={styles.tags}>
              {block.items.map((item, j) => (
                <span key={j} style={{ ...styles.tag, color: block.color }}>
                  {item}
                </span>
              ))}
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
  secNum: { fontSize: '16px', color: '#ff2d9b' },
  secTitle: {
    fontFamily: "'Orbitron', monospace",
    fontSize: '17px',
    fontWeight: '700',
    letterSpacing: '0.1em',
    color: '#a855f7',
  },
  secLine: {
    flex: '1',
    height: '1px',
    background: 'linear-gradient(to right, #2a003a, transparent)',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
    gap: '10px',
  },
  block: {
    background: '#06010f',
    border: '1px solid #1a0028',
    borderRadius: '6px',
    padding: '0.8rem 1rem',
  },
  label: { fontSize: '15px', color: '#5a4a6a', margin: '0 0 8px', letterSpacing: '0.1em' },
  tags:  { display: 'flex', flexWrap: 'wrap', gap: '6px' },
  tag:   { fontSize: '17px' },
}

export default Skills