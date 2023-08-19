const nums = [2,7,11,6,5,3]
const target = 13;

const twoSum = (nums,target) =>{
    let obj = {};
    for(let [index, num] of nums.entries()){
        if(obj[num] !== undefined) return [obj[num],index]
        obj[target - num] = index;
    }
}

// {11:0,
// 6:1}

console.log(twoSum(nums,target));