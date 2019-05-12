//sort array of objects

let item = [
  { itemName: "Candy", price: 3.5, discountRate: 1 },
  { itemName: "Veggies", price: 1.5, discountRate: 0.5 },
  { itemName: "Chicekn", price: 5.0, discountRate: 3 }
];

console.log(
  item
    .sort((a, b) => {
      let comparision = 0;
      if (a.discountRate > b.discountRate) {
        comparision = 1;
      } else if (a.discountRate < b.discountRate) {
        comparision = -1;
      }
      return comparision;
    })
    .reverse()
);
