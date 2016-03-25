function f(n) {
    var arr = new Array(n + 1).fill(0);

    while (arr[n] == 0) {
        console.log(arr.slice(0, n));
        var j = 0;
        arr[j]++;
        while (arr[j] == 2) {
            arr[j] = 0;
            arr[j + 1]++;
            j++;
        }
    }
}

f(4);
