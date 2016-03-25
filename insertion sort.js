function insertionSort(arr) {
    var length = arr.length;
    for (let i = 1; i < length; i++) {
        for (let j = i + 1; j < length; j++) {
            if (arr[i] > arr[j]) {
                arr[i] = arr[i] + arr[j];
                arr[j] = arr[i] - arr[j];
                arr[i] = arr[i] - arr[j];
            }
        }
    }
    return arr;
}
