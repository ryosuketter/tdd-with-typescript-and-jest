import { Expression } from './expression'

export class Money {
  protected amount: number
  protected cur: string

  constructor(amount: number, currency: string) {
    this.amount = amount
    this.cur = currency
  }

  times(multiplier: number): Expression {
    return new Money(this.amount * multiplier, this.cur)
  }

  currency(): string {
    return this.cur
  }

  equals(object: any): boolean {
    const money = object as Money
    return this.amount === money.amount && this.currency() === money.currency()
  }

  static dollar(amount: number): Money {
    return new Money(amount, 'USD')
  }

  static yen(amount: number): Money {
    return new Money(amount, 'JPY')
  }
}
