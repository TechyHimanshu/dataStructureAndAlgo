function permute(nums) {
    let result = [];
    if (nums.length === 0) return [];
    if (nums.length === 1) return [nums];
    for (let i = 0; i < nums.length; i++) {
        const currentNum = nums[i];
        const remainingNums = nums.slice(0, i).concat(nums.slice(i + 1));
        const remainingNumsPermuted = permute(remainingNums);
        for (let j = 0; j < remainingNumsPermuted.length; j++) {
            const permutedArray = [currentNum].concat(remainingNumsPermuted[j]);
            result.push(permutedArray);
        }
    }
    return result;
}

console.log(permute([1,2,3]));

function permutationHelper(ci,ti,nums,res){

    if(ci>ti){
        res.push(nums);
        console.log(nums);
        return;
    }
    for(let i = ci; i<=ti; i++){
        [nums[i],nums[ci]] = [nums[ci],nums[i]];
        permutationHelper(ci+1,ti,nums,res);
        [nums[ci],nums[i]] = [nums[i],nums[ci]]; 
    }

}

function permutationRecurr(nums){
    let n = nums.length-1;
    let res = []
    permutationHelper(0,n,nums,res)
    console.log(res);
}

permutationRecurr([1,2,3])