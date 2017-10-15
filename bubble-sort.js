const data = require('./data');


function bubbleSort(array) {
    const length = array.length;
    let temp;

    for (let i = 0; i < length; i++) {
        for (let j = length - 1; j > i; j--) {
            if (array[j - 1] > array[j]) {
                temp = array[j - 1];
                array[j - 1] = array[j];
                array[j] = temp;
            }
        }
    }
}


console.log(`Before sorting: ${data.array}`);

bubbleSort(data.array);

console.log(`After sorting: ${data.array}`);