import * as sort from './quick_sort.js'

function binarySearch(array, value) {
    const sortedArray = sort.quickSort(array);

    let low = 0;
    let high = sortedArray.length - 1;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        const element = sortedArray[mid];

        if (element < value) {
            low = mid + 1;
        } else if (element > value) {
            high = mid - 1;
        } else {
            return mid;
        }
    }

    return -1;
}

console.log(binarySearch(sort.listaAlunos, "ERIC VINICIUS DA S. MENEGON",))