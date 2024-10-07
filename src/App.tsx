import ButtonSelector from '@/ButtonSelector.tsx'
import { Attack } from '@/types.ts'
import Header from '@/Header.tsx'
import { useState } from 'react'
import Footer from '@/Footer.tsx'

function App() {
  const [score, setScore] = useState(12)

  function handleAttack(attack: Attack) {
    console.log(attack)
  }

  return (
    <div className="min-h-dvh bg-radial flex flex-col px-8 pt-8 pb-14 items-center">
      <Header className="mb-[145px]" score={score} />
      <ButtonSelector className="mb-[154px]" onClick={handleAttack} />
      <Footer />
    </div>
  )
}

export default App
