function maxSubArraySum(a, size) {
    let maxSubArraySum = a[0];
    let currentMax = a[0];

    for (let i = 1; i < a.length; i++) {
        currentMax = Math.max(a[i], currentMax + a[i]);
        maxSubArraySum = Math.max(maxSubArraySum, currentMax );
    }
    console.log(maxSubArraySum)
}

let a = [-2, -3, 4, -1, -2, 1, 5, -3];
let n = a.length;
maxSubArraySum(a, n)

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

printMaxSumSubArray(a,n)