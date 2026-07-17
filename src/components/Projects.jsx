import { useTranslation } from 'react-i18next'

function Projects() {
  const { t } = useTranslation()

  const projects = [
    {
      tag: 'GITHUB',
      tagStyle: 'g',
      title: 'esfmcialidad',
      descKey: 'projects.p1.desc',
      link: 'https://github.com/HoneyAnimeOtaku/ESFMCIALIDAD',
      future: false,
    },
    {
      tag: t('projects.soon'),
      tagStyle: 'p',
      title: t('projects.p2.title'),
      descKey: 'projects.p2.desc',
      future: true,
    },
    {
      tag: t('projects.soon'),
      tagStyle: 'pk',
      title: t('projects.p3.title'),
      descKey: 'projects.p3.desc',
      future: true,
    },
    {
      tag: t('projects.soon'),
      tagStyle: 'b',
      title: t('projects.p4.title'),
      descKey: 'projects.p4.desc',
      future: true,
    },
  ]

  const tagColors = {
    g:  { color: '#00ff9f', borderColor: '#00ff9f' },
    p:  { color: '#c800ff', borderColor: '#c800ff' },
    pk: { color: '#ff2d9b', borderColor: '#ff2d9b' },
    b:  { color: '#00c3ff', borderColor: '#00c3ff' },
  }

  return (
    <section id="proyectos" style={styles.section}>

      <div style={styles.secHead}>
        <span style={styles.secNum}>[01]</span>
        <span style={styles.secTitle}>{t('sections.projects')}</span>
        <div style={styles.secLine}></div>
      </div>

      <div style={styles.grid}>
        {projects.map((proj, i) => (
          <div
            key={i}
            style={{
              ...styles.card,
              ...(proj.future ? styles.cardFuture : {}),
            }}
          >
            <div style={{ ...styles.tag, ...tagColors[proj.tagStyle] }}>
              {proj.tag}
            </div>
            <h3 style={styles.cardTitle}>{proj.title}</h3>
            <p style={styles.cardDesc}>{t(proj.descKey)}</p>
            {proj.link && (
              <a href={proj.link} target="_blank" style={styles.link}>
                ▸ ver en GitHub →
              </a>
            )}
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
    color: '#00ff9f',
  },
  secLine: {
    flex: '1',
    height: '1px',
    background: 'linear-gradient(to right, #2a003a, transparent)',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
    gap: '10px',
  },
  card: {
    background: '#08010f',
    border: '1px solid #200030',
    borderRadius: '6px',
    padding: '1rem',
    cursor: 'pointer',
  },
  cardFuture: {
    borderStyle: 'dashed',
    opacity: '0.7',
  },
  tag: {
    fontSize: '15px',
    border: '1px solid',
    borderRadius: '2px',
    padding: '2px 6px',
    display: 'inline-block',
    marginBottom: '0.6rem',
  },
  cardTitle: {
    fontSize: '15px',
    color: '#ddd',
    margin: '0 0 0.4rem',
    lineHeight: '1.4',
  },
  cardDesc: {
    fontSize: '17px',
    color: '#5a4a6a',
    margin: '0 0 6px',
    lineHeight: '1.5',
  },
  link: {
    fontSize: '16px',
    color: '#00ff9f',
    textDecoration: 'none',
  },
}

export default Projects