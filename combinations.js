function getCombinations(n, m) {
    var arr = new Array(m);
    var j = null,
        k = null,
        i = null;

    for (var i = 1; i <= m; i++) {
        arr[i] = i;
    }

    var results = [];

    do {
        let result = [];

        for (var i = 1; i <= m; i++) {
            result.push(arr[i]);
        }

        results.push(result.join(''));

        j = m;

        while (j > 0 && arr[j] >= n + j - m) {
            j--
        }

        if (j != 0) {
            arr[j]++;

            for (var k = j + 1; k <= m; k++) {
                arr[k] = arr[k - 1] + 1;
            }
        }

    } while (j != 0);

    return results;
}

var res = f(6, 5);

console.log(res);
