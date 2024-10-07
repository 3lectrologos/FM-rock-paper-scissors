export const attackList = [
  'rock',
  'paper',
  'scissors',
  'lizard',
  'spock',
] as const
export type Attack = (typeof attackList)[number]
