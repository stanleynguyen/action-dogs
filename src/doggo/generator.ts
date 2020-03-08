import dogs from './dogs.json'

export function generate(): string {
  return dogs[Math.floor(Math.random() * dogs.length)]
}
