import { Money } from '../src/money'

describe('Money module', () => {
  test('times()', () => {
    const five = Money.dollar(5)
    expect(five.times(2)).toEqual(Money.dollar(10))
    expect(five.times(3)).toEqual(Money.dollar(15))
  })
})
