//Regex
let str = "$um@nth,"
let str2 = "SUmanth$,^&*()@#$%!~"
console.log(str2.replace(/[^\w]/g, "").toUpperCase().split("").join(""));

//check map values
//Array.from(Map.values()).includes(x)

//console.log('SUmanth$,^&*()@#$%!~'.toLocaleLowerCase().match(/\b[\w']+\b/g));
