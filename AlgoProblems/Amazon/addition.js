//Given 2 arrays as numbers, write a code to output sum of those numbers as an array.
Array1 = [8, 5, 6] //856
Array2 = [1, 1, 1] //111
Array3 = [9, 6, 7] //967

let sum = (arr1, arr2) => {
    let sum1;
    let sum2;
    let multiplier1 = 1;
    let multiplier2 = 1;

    for (let i = arr1.length - 1; i >= 0; i--) {
        sum += arr1[i] * multiplier1;
        multiplier1 *= 10;
    }

    for (let i = arr2.length - 1; i >= 0; i--) {
        sum2 += arr2[i] * multiplier2;
        multiplier2 *= 10;
    }

    return sum1 + sum2;
}

console.log(sum(Array1, Array2))