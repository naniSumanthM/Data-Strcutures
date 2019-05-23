let selection = (array) => {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            let min = i;
            let temp = array[i];
            if (array[j] < array[min]) {
                min = j
            }
            array[i] = array[min]
            array[min] = temp;
        }
    }
    return array;
}

console.log(selection([99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0]));
