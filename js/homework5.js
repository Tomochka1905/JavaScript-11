// приклад об'єкту
const priceData = {
    Apples: '23.4',
    BANANAS: '48',
    oRAngGEs: '48.7584',
  };
  
  let updatedPriceData = Object.assign( {}, priceData);

  for (let key in updatedPriceData) {
    console.log(key.toLowerCase());
    console.log(parseFloat(updatedPriceData[key]).toFixed(2));
  }
 
  console.log(updatedPriceData); // {apples: '23.40', bananas: '48.00', oranges: '48.76'}



