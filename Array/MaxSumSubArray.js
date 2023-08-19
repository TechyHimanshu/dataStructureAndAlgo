
//kadan's algorithm
function maxSubArraySum(a, size) {
    let maxSubArraySum = a[0];
    let currentMax = a[0];

    for (let i = 1; i < a.length; i++) {
        currentMax = Math.max(a[i], currentMax + a[i]);
        maxSubArraySum = Math.max(maxSubArraySum, currentMax );
    }
    console.log(maxSubArraySum)
}

// below is also a kadan's 
function maxSubArraySum2(a, size) {
    let sum =0
    let maxval = Number.MIN_VALUE
    for (let i = 0; i < a.length; i++) {
        sum +=a[i]
        maxval = Math.max(sum, maxval)
        if(sum < 0) sum = 0
    }
    console.log(maxval)
}

let a = [-2, -3, 4, -1, -2, 1, 5, -3];
let n = a.length;
maxSubArraySum2(a, n)

function printMaxSumSubArray(arr,n){

    let maxSum = Number.MIN_VALUE;
    let currMax = arr[0];
    let endIdx; 
    let temp = [];
    for(let i = 1; i<n; i++){
        currMax = Math.max(arr[i], currMax+arr[i])
        if(maxSum<currMax){
            maxSum= currMax;
            endIdx = i
        }
    }
    while(endIdx>0){
        if(maxSum != 0){
            maxSum -=arr[endIdx]
            temp.push(arr[endIdx])
        }
        endIdx--;
    }
    console.log(temp.reverse());
}

// printMaxSumSubArray(a,n)