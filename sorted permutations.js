
function getPermutations(arrP) {
    var results = [];
    var arr = arrP;
    arr.unshift(null);
    var length = arr.length;

    while (arr[0] === null) {

        results.push(arr.slice(1).join(''));

        let less = null;
        let lessIndex = null;

        for (let i = length - 1; i > 0; i--) {
            if(arr[i - 1] < arr[i]){
                less = arr[i - 1];
                lessIndex = i - 1;
                break;
            }
        }

        for (let i = length - 1; i > lessIndex; i--) {
            if(arr[i] > less){
                arr[lessIndex] = arr[i];
                arr[i] = less;
                break;
            }
        }

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

var res = getPermutations([1,2,3,4,5]);

console.log(res);
console.log(res.length);
