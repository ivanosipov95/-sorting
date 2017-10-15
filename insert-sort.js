const data = require('./data');

function insertSort(array) {
    const length = array.length;
    let min;
    let k;

    for (let i = 0; i < length; i++) {
        min = array[i];
        k = i;

        for (let j = i - 1; j >= 0; j--) {
            if (min < array[j]) {
                array[j + 1] = array[j];
                k = j;
            }
        }

        array[k] = min;
    }
}


console.log(`Before sorting: ${data.array}`);

insertSort(data.array);

console.log(`After sorting: ${data.array}`);