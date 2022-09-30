/*
You are a professional robber planning to rob houses along a street. 
Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them
is that adjacent houses have security systems connected and it will automatically contact the police if two
adjacent houses were broken into on the same night.

Given an integer array nums representing the amount of money of each house, 
return the maximum amount of money you can rob tonight without alerting the police.
**/



const nums = [1,2,3,1];
const Output = 4;

/*
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
Total amount you can rob = 1 + 3 = 4.
**/


// temp array is used to calculate max sum
// all these solutions are based on kadens algorithm
function rob(nums){
    if(nums.length==1) return(nums[0]);
    let temp = []
    temp[0]=nums[0];
    temp[1]= Math.max(nums[0],nums[1]);
    for(let i = 2; i<nums.length;i++ ){
        temp[i] = Math.max(temp[i-1],temp[i-2]+nums[i]);
    }
    return temp[temp.length-1];
}

console.log(rob(nums));



// when house are circular
// like 1st house and last house are adjacent
const nums2= [1,2,3,1];

function rob2(nums){
    if(nums.length==1) return nums[0];

    let route1 = robCirle(nums,0,nums.length-2)
    let route2 = robCirle(nums,1,nums.length-1)
    console.log(Math.max(route1,route2))
}
function robCirle(nums,start,end){
    let temp=Array(nums.length).fill(0);
    temp[start]= nums[start];
    temp[start+1] = Math.max(nums[start],nums[start+1]);
    for(let i =2;i<=end;i++){
        temp[i]= Math.max(temp[i-1],temp[i-2]+nums[i])
    }
    return temp[end]
}

rob2(nums2);