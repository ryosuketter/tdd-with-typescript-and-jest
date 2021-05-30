import { Money } from '../src/money'

describe('Money module', () => {
  test('times()', () => {
    const five = Money.dollar(5)
    expect(five.times(2)).toEqual(Money.dollar(10))
    expect(five.times(3)).toEqual(Money.dollar(15))
  })

  describe('equals()', () => {
    describe('amount and currency each is the same value', () => {
      test('return TRUE', () => {
        expect(Money.dollar(5).equals(Money.dollar(5))).toBeTruthy()
      })
    })
    describe('ONLY amount is the same value', () => {
      test('return FALSE', () => {
        expect(Money.dollar(5).equals(Money.yen(5))).toBeFalsy()
      })
    })
    describe('ONLY currency is the same value', () => {
      test('return FALSE', () => {
        expect(Money.dollar(5).equals(Money.dollar(6))).toBeFalsy()
      })
    })
    describe('amount and currency each is NOT the same value', () => {
      test('return FALSE', () => {
        expect(Money.dollar(5).equals(Money.yen(6))).toBeFalsy()
      })
    })
  })
})
