//TODO fix

function f(m,n){
  var a = new Array(m+1).fill(0);
   
  while(a[m] == 0){
     console.log(a.slice(0,m));
     a[0]++;

     var j = 0;
     while(a[j] == n-1)
     { 
        a[j] = 0;
         a[j+1]++;
        j++;
     }
   }

}

f(4,6);