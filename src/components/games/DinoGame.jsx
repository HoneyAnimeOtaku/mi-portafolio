import { useEffect, useRef, useState } from 'react'

const CANVAS_WIDTH = 800
const CANVAS_HEIGHT = 300
const GROUND_Y = 250
const GRAVITY = 0.6
const JUMP_FORCE = -13
const GAME_SPEED = 5

function DinoGame() {
  const canvasRef = useRef(null)
  const gameRef = useRef({
    dino: { x: 80, y: GROUND_Y, vy: 0, onGround: true, width: 40, height: 50 },
    obstacles: [],
    score: 0,
    gameOver: false,
    running: false,
    frameCount: 0,
    speed: GAME_SPEED,
  })
  const animRef = useRef(null)
  const [score, setScore] = useState(0)
  const [gameOver, setGameOver] = useState(false)
  const [started, setStarted] = useState(false)

  function jump() {
    const g = gameRef.current
    if (g.dino.onGround && g.running) {
      g.dino.vy = JUMP_FORCE
      g.dino.onGround = false
    }
  }

  function startGame() {
    const g = gameRef.current
    g.dino = { x: 80, y: GROUND_Y, vy: 0, onGround: true, width: 40, height: 50 }
    g.obstacles = []
    g.score = 0
    g.gameOver = false
    g.running = true
    g.frameCount = 0
    g.speed = GAME_SPEED
    setScore(0)
    setGameOver(false)
    setStarted(true)
  }

  useEffect(() => {
    const handleKey = (e) => {
      if (e.code === 'Space') {
        e.preventDefault()
        if (!started || gameOver) {
          startGame()
        } else {
          jump()
        }
      }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [started, gameOver])

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    function spawnObstacle() {
      const height = 30 + Math.random() * 40
      gameRef.current.obstacles.push({
        x: CANVAS_WIDTH,
        y: GROUND_Y + 50 - height,
        width: 25,
        height: height,
      })
    }

    function checkCollision(a, b) {
      const dinoX = a.x + 8
      const dinoW = a.width - 12
      const dinoY = a.y + 8
      const dinoH = a.height - 8
      return (
        dinoX < b.x + b.width &&
        dinoX + dinoW > b.x &&
        dinoY < b.y + b.height &&
        dinoY + dinoH > b.y
      )
    }

    function drawDino(ctx, dino) {
      ctx.fillStyle = '#00ff9f'
      ctx.fillRect(dino.x, dino.y, dino.width, dino.height)
      ctx.fillStyle = '#05020f'
      ctx.fillRect(dino.x + 24, dino.y + 8, 8, 8)
      ctx.fillStyle = '#ff2d9b'
      ctx.fillRect(dino.x + 30, dino.y + 14, 10, 4)
      ctx.fillStyle = '#00ff9f'
      const legOffset = Math.floor(gameRef.current.frameCount / 6) % 2 === 0 ? 0 : 6
      ctx.fillRect(dino.x + 8, dino.y + dino.height, 10, 10 + legOffset)
      ctx.fillRect(dino.x + 22, dino.y + dino.height, 10, 10 - legOffset)
    }

    function drawObstacle(ctx, obs) {
      ctx.fillStyle = '#c800ff'
      ctx.fillRect(obs.x, obs.y, obs.width, obs.height)
      ctx.fillStyle = '#ff2d9b'
      ctx.fillRect(obs.x + 5, obs.y, obs.width - 10, 6)
    }

    function drawGround(ctx) {
      ctx.strokeStyle = '#2a003a'
      ctx.lineWidth = 2
      ctx.beginPath()
      ctx.moveTo(0, GROUND_Y + 50)
      ctx.lineTo(CANVAS_WIDTH, GROUND_Y + 50)
      ctx.stroke()
      ctx.strokeStyle = '#1a0028'
      ctx.lineWidth = 1
      for (let x = 0; x < CANVAS_WIDTH; x += 40) {
        ctx.beginPath()
        ctx.moveTo(x, GROUND_Y + 52)
        ctx.lineTo(x + 20, GROUND_Y + 52)
        ctx.stroke()
      }
    }

    function gameLoop() {
      const g = gameRef.current
      ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)

      ctx.fillStyle = '#05020f'
      ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)

      drawGround(ctx)

      if (!g.running) {
        ctx.fillStyle = '#c800ff'
        ctx.font = "bold 18px 'Share Tech Mono', monospace"
        ctx.textAlign = 'center'
        ctx.fillText('[ PRESIONA ESPACIO PARA INICIAR ]', CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2)
        animRef.current = requestAnimationFrame(gameLoop)
        return
      }

      g.frameCount++
      g.score++
      g.speed = GAME_SPEED + Math.floor(g.score / 500) * 0.5
      setScore(g.score)

      g.dino.vy += GRAVITY
      g.dino.y += g.dino.vy
      if (g.dino.y >= GROUND_Y) {
        g.dino.y = GROUND_Y
        g.dino.vy = 0
        g.dino.onGround = true
      }

      const spawnInterval = Math.max(60, 120 - Math.floor(g.score / 500) * 5)
      if (g.frameCount % spawnInterval === 0) spawnObstacle()

      g.obstacles = g.obstacles.filter(obs => obs.x + obs.width > 0)
      g.obstacles.forEach(obs => { obs.x -= g.speed })

      for (const obs of g.obstacles) {
        if (checkCollision(g.dino, obs)) {
          g.running = false
          g.gameOver = true
          setGameOver(true)
          break
        }
      }

      drawDino(ctx, g.dino)
      g.obstacles.forEach(obs => drawObstacle(ctx, obs))

      ctx.fillStyle = '#00ff9f'
      ctx.font = "14px 'Share Tech Mono', monospace"
      ctx.textAlign = 'right'
      ctx.fillText(`SCORE: ${g.score}`, CANVAS_WIDTH - 16, 30)

      if (g.gameOver) {
        ctx.fillStyle = 'rgba(5, 2, 15, 0.75)'
        ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
        ctx.fillStyle = '#ff2d9b'
        ctx.font = "bold 28px 'Orbitron', monospace"
        ctx.textAlign = 'center'
        ctx.fillText('GAME OVER', CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2 - 20)
        ctx.fillStyle = '#c800ff'
        ctx.font = "15px 'Share Tech Mono', monospace"
        ctx.fillText(`SCORE FINAL: ${g.score}`, CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2 + 15)
        ctx.fillStyle = '#00ff9f'
        ctx.font = "13px 'Share Tech Mono', monospace"
        ctx.fillText('[ ESPACIO para reiniciar ]', CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2 + 45)
        animRef.current = requestAnimationFrame(gameLoop)
        return
      }

      animRef.current = requestAnimationFrame(gameLoop)
    }

    animRef.current = requestAnimationFrame(gameLoop)
    return () => cancelAnimationFrame(animRef.current)
  }, [])

  return (
    <div style={styles.container}>
      <canvas
        ref={canvasRef}
        width={CANVAS_WIDTH}
        height={CANVAS_HEIGHT}
        style={styles.canvas}
        onClick={() => {
          if (!started || gameOver) startGame()
          else jump()
        }}
      />
      <div style={styles.controls}>
        <span style={styles.hint}>⌨️ ESPACIO para saltar &nbsp;·&nbsp; 🖱️ CLIC para saltar en móvil</span>
      </div>
    </div>
  )
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '10px',
    width: '100%',
  },
  canvas: {
    borderRadius: '8px',
    border: '1px solid #2a003a',
    maxWidth: '100%',
    cursor: 'pointer',
  },
  controls: {
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  hint: {
    fontSize: '11px',
    color: '#5a4a6a',
    fontFamily: "'Share Tech Mono', monospace",
  },
}

export default DinoGame