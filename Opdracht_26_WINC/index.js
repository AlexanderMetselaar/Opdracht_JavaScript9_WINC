// const ageCheck = function (age) {
//     if(age >=18) return true;
//     return false;
// }

// console.log(ageCheck(17));

// const welcomeCheck = function(age) {
//     if(ageCheck(age)) {
//         return "Hello there"
//     };
//     return "Hey Kiddo!"
// }

// console.log(welcomeCheck(18));

const VatCalculation = function (basePrice, vatPercent) {
    return basePrice * (vatPercent / 100);
}

const VatIncluded = function(basePrice, vatPercent) {
    return basePrice + VatCalculation(basePrice, vatPercent);
}

console.log(VatIncluded(100, 21));

const priceExcluded = function(priceIncluded, VAT) {
    return priceIncluded / ((100 + VAT) / 100);
}