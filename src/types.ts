export const attackList = [
  'rock',
  'paper',
  'scissors',
  'lizard',
  'spock',
] as const
export type Attack = (typeof attackList)[number]

export type Stage = 'picking' | 'result'
export type Result = 'win' | 'lose' | 'draw'
