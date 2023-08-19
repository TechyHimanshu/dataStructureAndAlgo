let nums = [3,2,1]
// Output: [1,3,2]
// let nums = [2,1,8,7,6,1,7,6,5]
//[2,1,8,7,6,5,1,6,7]


function nextPermutationn(nums) {
    // var i;
    // let nextGreaterEle = Number.MAX_VALUE;
    // let nextGreaterEleIndex;
    // for(i=nums.length-1;i>0;i--){
    //     if(nums[i-1]<nums[i])
    //     break;
    // }

    // for(let j=i; j<nums.length; j++){
    //     if(nums[i-1]<nums[j]){
    //         nextGreaterEle = Math.min(nextGreaterEle,nums[j]);
    //         nextGreaterEleIndex = j;
    //     } 
    // }

    // [nums[i-1],nums[nextGreaterEleIndex]] = [nums[nextGreaterEleIndex],nums[i-1]];
    // nums =nums.slice(0,i).concat(nums.slice(i).reverse());


    let n = nums.length
    let nextGreaterEle = Number.MAX_VALUE
    let nextGreaterIndex
    for(var i=n-1; i>0; i--){
        if(nums[i-1] < nums[i]){
            break
        }
    }

    for(let j=i; j<n;j++){
        if(nums[i-1]<nums[j]){
            nextGreaterEle = Math.min(nextGreaterEle,nums[j])
            nextGreaterIndex = j
        }
    }
    [nums[i-1], nums[nextGreaterIndex]] = [nums[nextGreaterIndex], nums[i-1]] 
    nums = nums.slice(0,i).concat(nums.slice(i).reverse())
    console.log(nums)
}

nextPermutationn(nums)