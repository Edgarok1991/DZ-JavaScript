/*
function currencyConversion(input) {
    const conversionRates = {
        'rub': {
            'usd': 0.011,
            'eur': 0.01,
            'cny': 0.08
        },
        'usd': {
            'rub': 89.83,
            'eur': 0.90, 
            'cny': 7.38
        },
        'eur': {
            'rub': 99.44,
            'usd': 1.11, 
            'cny': 8.12
        },
        'cny': {
            'rub': 12.05,
            'usd': 0.14,
            'eur': 0.13
        }
    };

   
    const regex = /(\d+)\s*([^\s]+)\s*->\s*([^\s]+)/;
    const match = input.match(regex);

    if (!match) {
        return null;
    }

    const sum = parseFloat(match[1]);
    const fromCurrency = match[2].toLowerCase();
    const toCurrency = match[3].toLowerCase();

   
    if (conversionRates[fromCurrency] && conversionRates[fromCurrency][toCurrency]) {
        const rate = conversionRates[fromCurrency][toCurrency];
        return sum * rate;
    }

    return null; 
}

const result = currencyConversion("1000 usd -> eur");
console.log(result)
*/



function currencyConversion(sum, fromCurrency, toCurrency) {
    if (fromCurrency === 'RUB' && toCurrency === 'USD') {
        return sum * 0.011;
    } else if (fromCurrency === 'RUB' && toCurrency === 'EUR')  {
        return sum * 0.01;
    } else if (fromCurrency === 'RUB' && toCurrency === 'CnY') {
        return sum * 0.08;
        
    } else if (fromCurrency === 'USD' && toCurrency === 'RUB') {
        return sum * 89.83;
        
    } else if (fromCurrency === 'USD' && toCurrency === 'EUR') {
        return sum * 0.90;
        
    } else if (fromCurrency === 'USD' && toCurrency === 'CNY') {
        return sum * 7.38;
        
    } else if (fromCurrency === 'EUR' && toCurrency === 'RUB') {
        return sum * 99.44;
        
    } else if (fromCurrency === 'EUR' && toCurrency === 'USD') {
        return sum * 1.11;
        
    } else if (fromCurrency === 'EUR' && toCurrency === 'CNY') {
        return sum * 8.12;
        
    } else if (fromCurrency === 'CNY' && toCurrency === 'RUB') {
        return sum * 12.05;
        
    } else if (fromCurrency === 'CNY' && toCurrency === 'USD') {
        return sum * 0.14;
        
    } else if (fromCurrency === 'CNY' && toCurrency === 'EUR') {
        return sum * 0.13;
        
    } return null;
}
let currencyConversion prompt(1000, 'CNY', 'RUB'))