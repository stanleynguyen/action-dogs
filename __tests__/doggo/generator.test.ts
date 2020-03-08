import { generate } from '../../src/doggo/generator'

describe('doggo generator', () => {
  test('to return a good boy', () => {
    Math.random = jest.fn().mockReturnValue(0)
    const good = 'https://media3.giphy.com/media/mCRJDo24UvJMA/giphy.gif'
    const boy = generate()
    expect(boy).toBe(good)
  })
})
