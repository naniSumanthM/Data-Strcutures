//Regex
let str = "$um@nth,"
let str2 = "SUmanth$,^&*()@#$%!~"
console.log(str2.replace(/[^\w]/g, "").toUpperCase().split("").join(""));

console.log('SUmanth$,^&*()@#$%!~'.toLocaleLowerCase().match(/\b[\w']+\b/g));


// primaryArray = {1,2,3,4}
// subArray = {1, 2}
let getSubArray = (primaryArray, subArray) =>{
    
    let indexOutput = [] 
    
    for(let i = 0; i < primaryArray.length; i++){
        for(let j = 0; j < subArray.length; j++){// i = 0, j = 1
            if(primaryArray[i + j] === subArray[j]){ // primaryArray[1] === 2, subArray[1] === 2
                indexOutput.push(i)
            }
        }
    }
    return indexOutput;
}