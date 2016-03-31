function factors(n) {
    for (var i = 1; i * i <= n; i++) {
        if(!(n % i)){
            console.log(i);
            if(i * i != n){
                console.log(n / i);
            }
        }
    }
}
