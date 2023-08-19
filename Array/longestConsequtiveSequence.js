const nums = [0,3,7,2,5,8,4,6,0,1,50,51,52,53,54,55,56,57,58,59,60,61]

function longestConsecutiveSequence(nums){
    let numSet = new Set(nums);
    // console.log(numSet);
    let currentNum;
    let longestStreak = 0;
    let currentStreak;

    for(var num of numSet){
        if(!numSet.has(num-1)){
            currentNum = num;
            currentStreak = 1

            while(numSet.has(currentNum+1)){
                currentNum = currentNum+1;
                currentStreak +=1;
                numSet.delete(currentNum);
            }
            longestStreak = Math.max(longestStreak,currentStreak);
        }
    }
    if(longestStreak===currentStreak)
        console.log(`longestStreak is between ${num} and ${currentNum}`)
    console.log(longestStreak)
}

var longestConsecutive = function(nums) {
    let numSet = new Set(nums)
    let currentNum
    let longestStreak = 0

    for (let i of numSet){
    let curentStreak = 0
        if(!numSet.has(i-1)){
            currentNum = i
            curentStreak +=1
            while(numSet.has(currentNum+1)){
                currentNum = currentNum +1
                curentStreak +=1
            } 
            longestStreak = Math.max(longestStreak,curentStreak);
        }
    }
    return longestStreak
};


longestConsecutiveSequence(nums)