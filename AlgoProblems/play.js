var heroes = [
  { name: "Batman", franchise: "DC" },
  { name: "Ironman", franchise: "Marvel" },
  { name: "Thor", franchise: "Marvel" },
  { name: "Superman", franchise: "DC" }
];

var marvelHeroes = heroes.filter(function (hero) {
  return hero.franchise == "Marvel";
});

let realMarvelHeroes = heroes.filter(hero => {
  return realMarvelHeroes.map((x = x.max == true));
});

console.log(realMarvelHeroes);

//https://alligator.io/js/filter-array-method/

function countHoles(num) {
  let strNum = num.toString();
  let zeroHoles = [1, 2, 3, 5, 7];
  let oneHoles = [0, 4, 6, 9];
  let twoHoles = [8];
  let sum = 0;

  for (let i = 0; i <= strNum.length; i++) {
    if (zeroHoles.includes(parseInt(strNum[i]))) {
      sum += 0;
    } else if (oneHoles.includes(parseInt(strNum[i]))) {
      sum += 1;
    } else if (twoHoles.includes(parseInt(strNum[i]))) {
      sum += 2;
    }
  }
  return sum;
}

console.log(countHoles(630));
