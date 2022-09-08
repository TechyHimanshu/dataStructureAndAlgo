
 function getMinDiff(arr, n, k){

    arr.sort((a,b)=>a-b);
    let ans = arr[n-1]- arr[0];

    let tempmin = arr[0];
    let tempmax = arr[n - 1];

    for(let i = 1; i<n;i++){
        tempmin = Math.min(arr[0]+k,arr[i]-k)
        tempmax = Math.max(arr[i-1]+k,arr[n-1]-k);
        ans = Math.min(ans, tempmax-tempmin)
    }
    console.log(ans);
 }

let k = 6, n = 3;
let arr = [1,10,15 ];
let ans = getMinDiff(arr, n, k);