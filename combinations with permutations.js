function getCombinationsWithPermutations(arrP, m){
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

        var perms = getPermutations(result);
        results = results.concat(perms);

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

function getPermutations(arrP) {
    var results = [];
    var arr = arrP;
    arr.unshift(null);
    var length = arr.length;

    while (arr[0] === null) {

        results.push(arr.slice(1).join(''));

        let less = null;
        let lessIndex = null;

        //მარჯვნიდან პირველი რიცხვის პოვნა რომელიც თავის მარჯვენაზე ნაკლებია
        for (let i = length - 1; i > 0; i--) {
            if(arr[i - 1] < arr[i]){
                less = arr[i - 1];
                lessIndex = i - 1;
                break;
            }
        }

        //ამ რიცხვის მარჯვნივ მარჯვნიდან მიყოლებით
        //ამ რიცხვზე დიდი პირველი რიცხვის პოვნა და ადგილის გაცვლა
        for (let i = length - 1; i > lessIndex; i--) {
            if(arr[i] > less){
                arr[lessIndex] = arr[i];
                arr[i] = less;
                break;
            }
        }

        //მარცხენა გაცვლის ადგილის მარჯვნივ მასივის ზრდის მიხედვით დალაგება
        for(let i = lessIndex + 1; i<length; i++){
           for(let j = i + 1; j < length; j++){
               if(arr[i] > arr[j] ){
                   arr[i] = arr[i] + arr[j];
                   arr[j] = arr[i] - arr[j];
                   arr[i] = arr[i] - arr[j];
               }
           }
        }
    }

    return results;
}

var res = getCombinationsWithPermutations([1,2,3],2);

console.log(res);
