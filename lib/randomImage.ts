function getRandomInt(max: number): number {
  return Math.floor(Math.random() * max)
}

export default function getRandomImg(): string {
  const imgs = ['daffodils', 'KissingSpring', 'SpringFlower']
  const index = getRandomInt(imgs.length)
  return imgs[index]
}
