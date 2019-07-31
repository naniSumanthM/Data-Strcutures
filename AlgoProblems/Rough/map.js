//initialize new Map
//https://javascript.info/keys-values-entries#object-fromentries-to-transform-objects
const m = new Map([["color", "brown"], ["owner", "self"], ["age", 2]]);
m.set("citizen", false);

//get item by key
console.log(m.get("color"));

//check if map has key
console.log(m.has("color"));

//iterate over map key
for (let key of m.keys()) {
  console.log(key);
}

//iterate over map by value
for (let value of m.values()) {
  console.log(value);
}

//iterate over key, and value
for (const [k, v] of m) {
  console.log(k, v);
}

//convert keys to array
console.log([...m.keys()]);

//convert values to array
console.log([...m.values()]);

let myMap = new Map();
myMap.set(224, "Sumanth");
myMap.set(513, "Rishika");

let sortableMap = new Map([...myMap.entries()].sort().reverse());
console.log(Array.from(sortableMap.keys()));

for (let [k, v] of myMap) {
  console.log(k, v);
}

for (let [k, v] of myMap.entries()) {
  console.log([k, v]);
}

//-----------------OBJECT-------------------//

var obj1 = { id: 1, name: "Sumanth" };
//retreive elements
console.log(obj1["id"], "---", obj1.id);
//check if elements exist
console.log(obj1.id === undefined, "---", "id" in obj1);
//adding values
obj1.gender = "male";
obj1["gender"] = "female";

console.log(obj1);
delete obj1.gender;
console.log(obj1);

//iterate
for (let key in obj1) {
  console.log("KV", key, obj1[key]);
}

//get all keys
Object.keys(obj1).forEach(key =>
  console.log(`key: ${key}, value: ${obj1[key]}`)
);
