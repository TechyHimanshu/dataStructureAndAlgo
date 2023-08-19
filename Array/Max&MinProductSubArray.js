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
    console.log(max);
    return max
};

maxProduct(nums)

function printSubArrayWithMaxProd(nums){
let maxProd = Number.MIN_VALUE
let maxProd2 = Number.MIN_VALUE
let currentMax = 1;
let currentMin = 1;
let endIdx;
let tm =[];
for(let i = 0; i<nums.length; i++){
    if(nums[i] === 0){
        maxProd = Math.max(maxProd,nums[i]);
    }else{
        let tempMin = currentMin*nums[i];
        let tempMax = currentMax*nums[i];
    
        currentMax = Math.max(tempMax,tempMin,nums[i]);
        currentMin = Math.min(tempMin,tempMax,nums[i]);
    
        maxProd= Math.max(maxProd,currentMax,currentMin);
        if(maxProd!=maxProd2){
            maxProd2 = maxProd;
            endIdx = i; 
        }
    }
}
while(endIdx>0){
    if(maxProd != 1){
        maxProd = maxProd/nums[endIdx]
        tm.push(nums[endIdx]);
    }
    else if(maxProd===1) break;
    endIdx--;
}
console.log(tm);

}

printSubArrayWithMaxProd(nums)