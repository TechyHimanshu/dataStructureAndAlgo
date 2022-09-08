function maxSubArraySum(a, size) {
    let maxSubArraySum = a[0];
    let currentMax = a[0];

    for (let i = 1; i < a.length; i++) {
        currentMax = Math.max(a[i], currentMax + a[i]);
        maxSubArraySum = Math.max(maxSubArraySum, currSum);
    }
    console.log(maxSubArraySum)
}

let a = [-2, -3, 4, -1, -2, 1, 5, -3];
let n = a.length;
maxSubArraySum(a, n)