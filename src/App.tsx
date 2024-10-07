import ButtonSelector from '@/ButtonSelector.tsx'
import { Attack, attackList, Stage } from '@/types.ts'
import Header from '@/Header.tsx'
import { useState } from 'react'
import Footer from '@/Footer.tsx'
import ResultScreen from '@/ResultScreen.tsx'

function getRandomAttack() {
  return attackList[Math.floor(Math.random() * attackList.length)] as Attack
}

function computeResult(attack: Attack, houseAttack: Attack) {
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

function App() {
  const [score, setScore] = useState(0)
  const [stage, setStage] = useState<Stage>('picking')
  const [attack, setAttack] = useState<Attack | null>(null)
  const [houseAttack, setHouseAttack] = useState<Attack | null>(null)

  const result =
    attack === null || houseAttack === null
      ? null
      : computeResult(attack, houseAttack)

  function handleAttack(attack: Attack) {
    setAttack(attack)
    const randomAttack = getRandomAttack()
    setHouseAttack(randomAttack)
    const result = computeResult(attack, randomAttack)
    if (result === 'win') {
      setScore(score + 1)
    } else if (result === 'lose') {
      setScore(score - 1)
    }
    setStage('result')
  }

  function handlePlayAgain() {
    setStage('picking')
    setAttack(null)
    setHouseAttack(null)
  }

  return (
    <div className="min-h-dvh bg-radial flex flex-col px-8 pt-8 pb-14 items-center">
      <Header className="" score={score} />

      {stage === 'picking' ? (
        <ButtonSelector
          className="mt-[145px] mb-[154px]"
          onClick={handleAttack}
        />
      ) : (
        <ResultScreen
          className="mt-[99px] mb-[52px]"
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
