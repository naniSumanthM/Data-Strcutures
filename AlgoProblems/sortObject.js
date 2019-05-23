//https://alligator.io/js/filter-array-method/
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


