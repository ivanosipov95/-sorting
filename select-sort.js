const data = require('./data');


function selectSort(array) {
    const length = array.length;
    let min;
    let k;

    for (let i = 0; i < length; i++) {
        min = array[i];
        k = i;

        for (let j = i + 1; j < length; j++) {
            if (array[j] < min) {
                min = array[j];
                k = j;
            }
        }

        array[k] = array[i];
        array[i] = min;
    }
}


console.log(`Before sorting: ${data.array}`);

selectSort(data.array);

console.log(`After sorting: ${data.array}`);