import ButtonSelector from '@/ButtonSelector.tsx'
import { Attack, attackList, Result, Stage } from '@/types.ts'
import Header from '@/Header.tsx'
import { useRef, useState } from 'react'
import Footer from '@/Footer.tsx'
import ResultScreen from '@/ResultScreen.tsx'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { cn } from '@/lib/utils.ts'
import { useIsTablet } from '@/use-is-tablet.ts'

function getRandomAttack() {
  return attackList[Math.floor(Math.random() * attackList.length)] as Attack
}

function computeResult(attack: Attack | null, houseAttack: Attack | null) {
  if (attack === null || houseAttack === null) {
    return null
  }

  if (attack === houseAttack) {
    return 'draw'
  }

  const winMap: Record<Attack, Attack[]> = {
    rock: ['scissors', 'lizard'],
    paper: ['rock', 'spock'],
    scissors: ['paper', 'lizard'],
    lizard: ['spock', 'paper'],
    spock: ['rock', 'scissors'],
  }

  return winMap[attack].includes(houseAttack) ? 'win' : 'lose'
}

function createRandomAttackSequence(length: number, lastAttack: Attack) {
  const sequence = [lastAttack]
  for (let i = 0; i < length - 1; i++) {
    let randomAttack = getRandomAttack()
    while (randomAttack === sequence[sequence.length - 1]) {
      randomAttack = getRandomAttack()
    }
    sequence.push(randomAttack)
  }
  return sequence.reverse()
}

function App() {
  const [score, setScore] = useState(0)
  const [stage, setStage] = useState<Stage>('picking')
  const [attack, setAttack] = useState<Attack | null>(null)
  const [houseAttack, setHouseAttack] = useState<Attack | null>(null)
  const [result, setResult] = useState<Result | null>(null)

  const isTablet = useIsTablet()

  const container = useRef(null)
  const timeline = useRef<GSAPTimeline>()
  const { contextSafe } = useGSAP(
    () => {
      timeline.current = gsap.timeline()
    },
    { scope: container }
  )

  const handleAttack = contextSafe((attack: Attack) => {
    setAttack(attack)
    const randomHouseAttack = getRandomAttack()

    if (timeline.current !== undefined) {
      timeline.current.to(`#${attack}`, {
        duration: 0.5,
        scale: 1.2,
        ease: 'elastic.out(1.5, 0.4)',
      })

      timeline.current.to(
        `#pentagon,.attack:not(#${attack})`,
        {
          duration: 0.3,
          opacity: 0,
          stagger: 0.05,
        },
        '<'
      )

      timeline.current
        .to(`#${attack}`, {
          duration: 0.3,
          scale: isTablet ? 2.05 : 1.294,
          translateX: isTablet ? '-173.5%' : '-26.5%',
          translateY: isTablet ? '-31%' : '-10%',
          top: isTablet ? '50%' : 0,
          left: isTablet ? '50%' : 0,
          ease: 'elastic.out(1.2, 0.7)',
          onComplete: () => {
            setStage('result')
          },
        })
        .to(
          {},
          {
            duration: 0.5,
          }
        )

      const randomSequence = createRandomAttackSequence(10, randomHouseAttack)
      for (const [index, randomAttack] of randomSequence.entries()) {
        timeline.current.to(`#${attack}`, {
          duration: 0.05 + 0.005 * index ** 1.5,
          onComplete: () => {
            setHouseAttack(randomAttack)
          },
        })
      }

      timeline.current.to(`#${attack}`, {
        duration: 0.5,
        onComplete: () => {
          const currentResult = computeResult(attack, randomHouseAttack)
          setResult(currentResult)
          if (currentResult === 'win') {
            setScore(score + 1)
          } else if (currentResult === 'lose') {
            setScore(score - 1)
          }
        },
      })
    }
  })

  function handlePlayAgain() {
    setStage('picking')
    setAttack(null)
    setHouseAttack(null)
    setResult(null)
  }

  return (
    <div
      className={cn(
        'relative min-h-dvh w-full bg-radial flex flex-col px-8 pt-8 pb-14 items-center overflow-hidden',
        'tablet:pb-8'
      )}
      ref={container}
    >
      <Header className="flex" score={score} />

      {stage === 'picking' ? (
        <ButtonSelector
          className="flex-grow flex flex-col items-center justify-center mt-[125px] mb-[130px] tablet:mt-[121px] tablet:mb-[60px]"
          onClick={handleAttack}
        />
      ) : (
        <ResultScreen
          className="flex-grow mt-[99px] mb-[52px] tablet:mt-[72px]"
          attack={attack}
          houseAttack={houseAttack}
          result={result}
          onPlayAgain={handlePlayAgain}
        />
      )}

      <Footer />
    </div>
  )
}

export default App
