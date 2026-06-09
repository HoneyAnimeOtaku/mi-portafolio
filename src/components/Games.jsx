import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import DinoGame from './games/DinoGame'

function Games() {
  const { t } = useTranslation()
  const [activeGame, setActiveGame] = useState('dino')

  const games = [
    { id: 'dino',  label: t('games.dino'),  color: '#00ff9f' },
    { id: 'go',    label: t('games.go'),    color: '#c800ff' },
    { id: 'chess', label: t('games.chess'), color: '#00c3ff' },
  ]

  const gameContent = {
    go: {
      title: t('games.go'),
      color: '#c800ff',
      desc: t('games.go_desc'),
      code: t('games.go_code'),
    },
    chess: {
      title: t('games.chess'),
      color: '#00c3ff',
      desc: t('games.chess_desc'),
      code: t('games.chess_code'),
    },
  }

  return (
    <section id="juegos" style={styles.section}>

      <div style={styles.secHead}>
        <span style={styles.secNum}>[05]</span>
        <span style={styles.secTitle}>{t('games.title')}</span>
        <div style={styles.secLine}></div>
      </div>

      <div style={styles.tabs}>
        {games.map((game) => (
          <button
            key={game.id}
            onClick={() => setActiveGame(game.id)}
            style={{
              ...styles.tab,
              color: activeGame === game.id ? game.color : '#5a4a6a',
              borderColor: activeGame === game.id ? game.color : '#1a0028',
              background: activeGame === game.id ? `${game.color}11` : 'transparent',
            }}
          >
            {game.label}
          </button>
        ))}
      </div>

      <div style={styles.gameArea}>
        {activeGame === 'dino' && <DinoGame />}
        {activeGame === 'go' && (
          <div style={styles.comingSoon}>
            <p style={{ ...styles.comingTitle, color: gameContent.go.color }}>
              {gameContent.go.title}
            </p>
            <p style={styles.comingDesc}>{gameContent.go.desc}</p>
            <p style={styles.comingCode}>{gameContent.go.code}</p>
          </div>
        )}
        {activeGame === 'chess' && (
          <div style={styles.comingSoon}>
            <p style={{ ...styles.comingTitle, color: gameContent.chess.color }}>
              {gameContent.chess.title}
            </p>
            <p style={styles.comingDesc}>{gameContent.chess.desc}</p>
            <p style={styles.comingCode}>{gameContent.chess.code}</p>
          </div>
        )}
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
    fontSize: '11px',
    fontWeight: '700',
    letterSpacing: '0.1em',
    color: '#ff2d9b',
  },
  secLine: {
    flex: '1',
    height: '1px',
    background: 'linear-gradient(to right, #2a003a, transparent)',
  },
  tabs: {
    display: 'flex',
    gap: '8px',
    marginBottom: '1rem',
    flexWrap: 'wrap',
  },
  tab: {
    padding: '6px 14px',
    border: '1px solid',
    borderRadius: '3px',
    background: 'transparent',
    cursor: 'pointer',
    fontSize: '13px',
    fontFamily: "'Share Tech Mono', monospace",
    transition: 'all 0.2s',
  },
  gameArea: {
    background: '#08010f',
    border: '1px solid #1a0028',
    borderRadius: '8px',
    minHeight: '300px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '1rem',
  },
  comingSoon: { textAlign: 'center', padding: '2rem' },
  comingTitle: {
    fontFamily: "'Orbitron', monospace",
    fontSize: '18px',
    fontWeight: '700',
    margin: '0 0 0.5rem',
  },
  comingDesc: { fontSize: '13px', color: '#5a4a6a', margin: '0 0 0.5rem' },
  comingCode: { fontSize: '11px', color: '#2a003a', margin: '0', fontStyle: 'italic' },
}

export default Games