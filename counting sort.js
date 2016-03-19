
function countingSort(arr, min, max ){
    var countArr = Array(max - min + 1).fill(0);
    var arrLength = arr.length;

    //countArr-ში თითოეული ელემენტის ტოლ ინდექსზე ვინახავთ
    // რამდენჯერ გვხვდება ეს ელემენტი
    for (var i = 0; i < arrLength; i++) {
      countArr[arr[i] - min]++;
    }

    //countArr-ში თითოეული ელემენტის ტოლ ინდექსზე ვინახავთ
    // რამდენჯერ გვხვდება ეს ელემენტი ან ამ ელემენტზე პატარა ელემენტი
    for (var i = 0; i < max - min + 1; i++) {
      countArr[i] = i == 0 ? countArr[i] : countArr[i] + countArr[i-1];
    }

    var results = Array(arrLength).fill(0);

    for (var i = 0; i < arrLength; i++) {
      results[countArr[arr[i] - min] - 1] = arr[i];
      countArr[arr[i] - min]--;
    }

    return results;
}

var res = countingSort([3,5,2],2,5);
console.log(res);
