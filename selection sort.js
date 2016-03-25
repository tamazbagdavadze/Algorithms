function selectionSort(arr) {
    var length = arr.length;
    for (let i = 0; i < length - 1; i++) {
        let min = i;
        for (let j = i + 1; j < length; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }

        if (min != i) {
            arr[i] = arr[i] + arr[min];
            arr[min] = arr[i] - arr[min];
            arr[i] = arr[i] - arr[min];
        }
    }
    return arr;
}
