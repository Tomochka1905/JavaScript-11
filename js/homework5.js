// приклад об'єкту
const priceData = {
  Apples: '23.4',
  BANANAS: '48',
  oRAngGEs: '48.7584',
};

let updatedPriceData = {};

for (let key in priceData) {
  let value = parseFloat(priceData[key]).toFixed(2);
   updatedPriceData[key.toLowerCase()] = value;

}
console.log(updatedPriceData); // {apples: '23.40', bananas: '48.00', oranges: '48.76'}

 
