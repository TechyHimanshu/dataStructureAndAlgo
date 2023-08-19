const nums = [-2,0,0,2,2];
const target = 0;

function solution(nums){
    let ans = [];
    nums.sort((a,b) => a-b)
    Number.MAX_VALUE
    for(let i=0;i<nums.length-2;i++){
        let j= i+1;
        let k=nums.length-1;
        if(i>0 && nums[i-1]=== nums[i]) continue;
        while(j<k){
            // if(nums[j-1]=== nums[j]) j++;
            if(nums[j]+nums[k]+nums[i]== target){
                while (nums[j] === nums[j + 1]) j++;
                while (nums[k] === nums[k - 1]) k--;
                ans.push([nums[i],nums[j],nums[k]])
                j++,k--
            }
            if(nums[j]+nums[k]-target>-nums[i]) k--
            if(nums[j]+nums[k]-target<-nums[i]) j++
        }
    }
    console.log(ans)

}

// solution(nums)


var threeSumClosest = function(nums, target) {
    // let ans = [];
    nums.sort((a,b)=>a-b);
    let ans = nums[0]+nums[1]+nums[2];
    for(let i =0 ; i<nums.length-2; i++){
        let j= i+1;
        let k = nums.length-1;
        while(i>0 && nums[i-1] == nums[i]) i++;  // remove duplicate
        while(j<k){
            let sum = nums[j]+nums[k]+nums[i]
            if(sum >target){
               k--
            }
            else{
                j++
            }
           if(Math.abs(sum-target)<Math.abs(ans-target)){
            ans = sum;
           }
        }
    }
    console.log(ans);
};
let nums2 = [-1,2,1,-4], target2 = 1
threeSumClosest(nums2,target2)