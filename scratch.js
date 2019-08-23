const product1 = {
    name: "Product 1",
    retailPrice: {
        amount: 100,
        currency: "USD"
    },
}

const product2 = {
    name: "Product 2",
    retailPrice: {
        amount: 75,
        currency: "GBP"
    },
    salePrice: {
        amount: 50,
        currency: "GBP"
    }
}

const exchangeRate = {
    "USD": 1,
    "GBP": 0.82,
}

// desired currency          original currency
// 1                          0.82
// finalProductPrice      originalProductPrice

// function priceDiff(p1, p2) {
//     let price1 = (p1.salePrice || p1.retailPrice).amount
//     let currency1 = (p1.salePrice || p1.retailPrice).currency
//     let price2 = (p2.salePrice || p2.retailPrice).amount
//     let currency2 = (p2.salePrice || p2.retailPrice).currency

//     if (currency1 === "GBP") {
//         price1 = price1/exchangeRate["GBP"]
//     }
//     if (currency2 === "GBP") {
//         price2 = price2/exchangeRate["GBP"]
//     }
//     return  price1 - price2
// }

class Price {
    constructor(product) {
        this.product = product
    }
    
    getPrice(product) {
        (product.salePrice || product.retailPrice).amount
    }
}

class Currency {
    constructor(product) {
        this.product = product
    }
    
    getCurrency(product) {
        (product.salePrice || product.retailPrice).currency
    }
}

class convertCurrency {
    constructor(product) {
        this.product = product
    }
    
    getConvertedPrice(desiredCurrency, product) {
        let originalCurrency = Currency.getCurrency(product)
        let originalProductPrice = Price.getPrice(product)
        finalProductPrice = (originalProductPrice * exchangeRate[desiredCurrency])/exchangeRate[originalCurrency]
    }
}

class proceDiff {
    constructor(product1, product2) {
        this.product1 = product1,
        this.product2 = product2
    }
}

function priceDiff(p1, p2) {
    return  getPrice(p1) - getPrice(p2)
}

console.log();

// call methods on classes, not properties of classes, cause that can change. A product can be changed and have a different structure, and you would need to change it everywhere you are using it -> so just call a method, and you will just need to change the method in one place.
// when do we stop making classes? you need to ask yourself what has what... and what do you need? You may simply not need anither class.

// Gillian code

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
