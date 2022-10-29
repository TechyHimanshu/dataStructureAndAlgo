const nums = [10, 9, 2, 5, 3, 7, 101, 18];
[4,10,4,3,8,9]

function lis(nums) {
    let dp = Array(nums.length);
    dp[0] = 1;
    let finalMax = 0
    for (let i = 1; i < nums.length; i++) {
        let max = 0
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                if (dp[j] > max) max = dp[j];
            }
        }
        dp[i] = max + 1
        if (finalMax < dp[i]) finalMax = dp[i];
    }
    return finalMax;
}

lis(nums)