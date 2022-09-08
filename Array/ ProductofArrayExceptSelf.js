const nums = [1,2,3,4]
const Output = [24,12,8,6]

function prod(nums){
    let left = 0
    let right = nums.length-1;
    let temp = [];
    let p =1
    while(left<nums.length){
       temp.push(p);
       p=p*nums[left]
       left++
    }
    //[1126]
    let p2=1;
    while(right>=0){
        temp[right] = temp[right]*p2;
        p2*= nums[right];
        right--; 
    }

    console.log(temp);
}

prod(nums);