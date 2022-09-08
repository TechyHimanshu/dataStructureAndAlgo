const nums = [2,3,-2,-4,-5,4]  
const Output =  6

var maxProduct = function(nums) {
    let curMin = 1, curMax = 1
    let max = Number.NEGATIVE_INFINITY
    
    for (const n of nums) {
        if (n === 0) {
            curMin = 1
            curMax = 1
            max = Math.max(max, n)
        } else {
            const tempMax = curMax * n
            const tempMin = curMin * n

            curMax = Math.max(tempMax, tempMin, n)
            curMin = Math.min(tempMax, tempMin, n)
            max = Math.max(max, curMax, curMin)
        }
    }
    return max
};

maxProduct(nums)