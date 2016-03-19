function getCombinations(arrP, m){
    var arr = arrP.slice(0);
    arr.unshift(null);
    var n = arr.length - 1;

    var results = [];
	var j = null;

	do{
		let result = [];

		for (var i = 1; i <= m; i++) {
			result.push(arr[i]);
		}

		results.push(result.join(''));

		j = m;

		while(j>0  && arr[j] >= n+j-m){
			j = j - 1;
		}

		if(j != 0){
			arr[j]++;

			for (var k = j + 1; i < m; i++) {
				arr[k] = arr[k - 1] + 1;
			}
		}

	}while (j != 0);

	return results;
}

var res = getCombinations([1,2,3], 2);

console.log(res);
