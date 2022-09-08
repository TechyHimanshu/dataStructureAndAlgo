let nums = [-1, 2, 1, -4], target = 1

function threeSumClosest(nums, target) {
    nums.sort((a, b) => a - b);
    let ans = nums[0] + nums[1] + nums[2]
    for (let i = 0; i < nums.length; i++) {
        let j= i+1;
        let k = nums.length-1
        let sum = nums[i]+nums[j]+nums[k];
        while(i>0 && nums[i-1]===nums[i]) i++;
        if(sum > target){
            k--
        }
        else j++;
        if(Math.abs(ans-target)>Math.abs(sum-target))
            ans=sum;
    }
}

threeSumClosest(nums, target)

