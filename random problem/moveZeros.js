function moveZeroes(nums) {
let i=0;
let j = nums.length;
  while(i<j){
        if(nums[i] === 0){
            const a = nums.splice(i,1)
            nums.push(...a)
            j--
        }
      else i++
    //   j--
    }
};

console.log(moveZeroes([4,2,4,0,0,3,0,5,1,0]));
