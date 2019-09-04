// G code

class CurrencyConverter {
  constructor(exchangeRate) {
    this.exchangeRate = exchangeRate
  }
​
  convert(amount) {
    return this.exchangeRate * amount
  }
}
​
class CurrencyConversion {
  constructor() {
    this.conversionLookups = {}
  }
​
  registerConverter(fromCurrency, toCurrency, converter) {
    const fromLookup = this.conversionLookups[fromCurrency] || {}
    fromLookup[toCurrency] = converter
    this.conversionLookups[fromCurrency] = fromLookup
  }
​
  convertAmount(amount, fromCurrency, toCurrency) {
    const converter = (this.conversionLookups[fromCurrency] || {})[toCurrency]
    return converter.convert(amount)
  }
}
​
class Money {
  constructor(amount, currency) {
    this.amount = amount
    this.currency = currency
  }
​
  in(currency, currencyConversion) {
    const convertedAmount = currencyConversion.convertAmount(this.amount, this.currency, currency)
    return new Money(convertedAmount, currency)
  }
​
  priceDiff(otherMoney, currencyConversion) {
    const convertedOtherMoney = otherMoney.in(this.currency, currencyConversion);
    return new Money(this.amount - convertedOtherMoney.amount, this.currency)
  }
}
​
class Product {
  constructor(price, salePrice) {
    this.price = price
    this.salePrice = salePrice
  }
​
  getCheapestPrice() {
    return this.salePrice ? this.salePrice : this.price
  }
​
  priceDiff(otherProduct, currencyConversion) {
    return this.getCheapestPrice().priceDiff(otherProduct.getCheapestPrice(), currencyConversion)
  }
}
​
​
const product1 = new Product(new Money(100, "USD"))
const product2 = new Product(new Money(120, "USD"))
​
const currencyConversion = new CurrencyConversion()
currencyConversion.registerConverter("USD", "USD", new CurrencyConverter(1))
​
console.log(product1.priceDiff(product2, currencyConversion))
