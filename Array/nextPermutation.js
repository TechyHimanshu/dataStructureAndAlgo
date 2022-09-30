let nums = [1,3,2]
// Output: [1,3,2]


function nextPermutationn(nums) {
    var i;
    let nextGreaterEle = Number.MAX_VALUE;
    let nextGreaterEleIndex;
    for(i=nums.length-1;i>0;i--){
        if(nums[i-1]<nums[i])
        break;
    }

    for(let j=i; j<nums.length; j++){
        if(nums[i-1]<nums[j]){
            nextGreaterEle = Math.min(nextGreaterEle,nums[j]);
            nextGreaterEleIndex = j;
        } 
    }

    [nums[i-1],nums[nextGreaterEleIndex]] = [nums[nextGreaterEleIndex],nums[i-1]];
    nums =nums.slice(0,i).concat(nums.slice(i).reverse());
    console.log(nums)
}

nextPermutationn(nums)