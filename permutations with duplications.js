function f(m, k) {
    var a = new Array(m + 1).fill(0);

    if (k == 1) {
        console.log(a.slice(0, m));
        return;
    }

    while (a[m] == 0) {
        console.log(a.slice(0, m));
        a[0]++;

        var j = 0;
        while (a[j] == k) {
            a[j] = 0;
            a[j + 1]++;
            j++;
        }
    }
}

f(2, 4);
