import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = Pricing._checkForAmountType(amount);
    this._currency = Pricing._checkForCurrencyType(currency);
  }

  set amount(amount) {
    this._amount = amount;
  }

  get amount() {
    return this._amount;
  }

  static _checkForCurrencyType(type) {
    if (!(type instanceof Currency)) {
      throw new TypeError('Currency must be an instance of Currency class');
    }
    return type;
  }

  static _checkForAmountType(type) {
    if (typeof type !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    return type;
  }

  displayFullPrice() {
    return `${this.amount} ${this._currency.name} (${this._currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
