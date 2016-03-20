function getCombinationsWithPermutations(n, m) {
    var arr = new Array(m);
    var j = null, k = null, i = null;

    for (var i = 1; i <= m; i++) {
        arr[i] = i;
    }

    var results = [];

    do{
        let result = [];

        for (var i = 1; i <= m; i++) {
            result.push(arr[i]);
        }

        results.push(getPermutations(result).join(' '));

        j = m;

        while (j>0 && arr[j] >= n+j-m){
            j--
        }

        if(j != 0){
            arr[j]++;

            for (var k = j+1; k <= m; k++) {
                arr[k] = arr[k-1]+1;
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

var res = getCombinationsWithPermutations(4,2);

console.log(res.join(' '));
