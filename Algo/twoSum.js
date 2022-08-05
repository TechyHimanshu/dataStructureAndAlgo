const nums = [2,7,11,6,5,3]
const target = 13;

const twoSum = (nums,target) =>{
    let storage = {};
    for(let [index, num] of nums.entries()){
        if(storage[num] !== undefined) return [storage[num],index]
        storage[target - num] = index;
    }
}

console.log(twoSum(nums,target));