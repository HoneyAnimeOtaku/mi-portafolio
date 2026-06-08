import { useTranslation } from 'react-i18next'

function Hero() {
  const { t } = useTranslation()

  return (
    <section style={styles.hero}>

      <div style={styles.content}>
        <div style={styles.prompt}>{t('hero.prompt')}</div>

        <h1 style={styles.h1}>
          Honey <span style={styles.pk}>Leticia</span>
          <br />
          <span style={styles.g}>Maldonado</span>{' '}
          <span style={styles.p}>Domínguez</span>
        </h1>

        <div style={styles.subtitle}>{t('hero.subtitle')}</div>
        <div style={styles.institution}>▸ {t('hero.institution')}</div>

        <p style={styles.desc}>{t('hero.description')}</p>

        <div style={styles.pills}>
          <span style={{...styles.pill, ...styles.pillG}}>{t('pills.crypto')}</span>
          <span style={{...styles.pill, ...styles.pillPk}}>IA / ML</span>
          <span style={{...styles.pill, ...styles.pillP}}>{t('pills.security')}</span>
          <span style={{...styles.pill, ...styles.pillB}}>Cloud & DevOps</span>
          <span style={{...styles.pill, ...styles.pillG}}>{t('pills.physics')}</span>
          <span style={{...styles.pill, ...styles.pillPk}}>{t('pills.dev')}</span>
        </div>
      </div>

      <div style={styles.avatarContainer}>
        <div style={styles.avatarFrame}>
          <img
            src="/foto-perfil.jpeg"
            alt="Honey Maldonado"
            style={styles.avatarImg}
            onError={(e) => {
              e.target.style.display = 'none'
            }}
          />
          <div style={styles.avatarFallback}>HM</div>
        </div>
        <p style={styles.avatarName}>Honey Maldonado</p>
        <p style={styles.avatarLogo}>◈ HM_SYS</p>
      </div>

    </section>
  )
}

const styles = {
  hero: {
    padding: '2.5rem 1.5rem 2rem',
    borderBottom: '1px solid #150020',
    display: 'grid',
    gridTemplateColumns: '1fr auto',
    gap: '0.5rem',
    alignItems: 'start',
    fontFamily: "'Share Tech Mono', monospace",
  },
  content: {
    maxWidth: '520px',
  },
  prompt: {
    fontSize: '13px',
    color: '#ff2d9b',
    marginBottom: '0.6rem',
  },
  h1: {
    fontFamily: "'Orbitron', monospace",
    fontSize: '32px',
    fontWeight: '900',
    lineHeight: '1.1',
    margin: '0 0 0.3rem',
    color: '#fff',
  },
  g:  { color: '#00ff9f' },
  p:  { color: '#c800ff' },
  pk: { color: '#ff2d9b' },
  b:  { color: '#00c3ff' },
  subtitle: {
    fontSize: '13px',
    color: '#c800ff',
    letterSpacing: '0.06em',
    margin: '0.5rem 0 0.4rem',
  },
  institution: {
    fontSize: '13px',
    color: '#00c3ff',
    marginBottom: '0.8rem',
    letterSpacing: '0.04em',
  },
  desc: {
    fontSize: '14px',
    color: '#8a7a9a',
    lineHeight: '1.8',
  },
  pills: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '5px',
    marginTop: '1rem',
  },
  pill: {
    fontSize: '12px',
    padding: '3px 8px',
    borderRadius: '2px',
    border: '1px solid',
  },
  pillG:  { borderColor: '#00ff9f', color: '#00ff9f' },
  pillP:  { borderColor: '#c800ff', color: '#c800ff' },
  pillPk: { borderColor: '#ff2d9b', color: '#ff2d9b' },
  pillB:  { borderColor: '#00c3ff', color: '#00c3ff' },
  avatarContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '8px',
    flexShrink: '0',
  },
  avatarFrame: {
    width: '200px',
    height: '240px',
    borderRadius: '8px',
    border: '1px solid #c800ff',
    background: '#0d0018',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
    boxShadow: '0 0 20px rgba(200,0,255,0.2), inset 0 0 20px rgba(200,0,255,0.06)',
    position: 'relative',
  },
  avatarImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
  },
  avatarFallback: {
    position: 'absolute',
    fontFamily: "'Orbitron', monospace",
    fontSize: '24px',
    fontWeight: '900',
    color: '#c800ff',
  },
  avatarName: {
    fontFamily: "'Orbitron', monospace",
    fontSize: '13px',
    fontWeight: '700',
    color: '#fff',
    margin: '0',
    textAlign: 'center',
  },
  avatarLogo: {
    fontSize: '13px',
    color: '#c800ff',
    margin: '0',
    textAlign: 'center',
  },
}

export default Hero