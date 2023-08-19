var countNoOfsubarraySum = function(nums, k) {
    let sum = 0
    let count = 0
    let map = new Map()
    let opArr=[]
    map.set(0,1)
    for(let i =0 ; i < nums.length; i++){
        sum += nums[i]
        if(map.has(sum-k)) {
            count+=map.get(sum-k)
        }
        if(map.has(sum)) map.set(sum,map.get(sum)+1)
        else map.set(sum,1)
    }
    console.log(count)
};

let longestSubArraySum = function(nums,k){ // only positive values in array
    let left = 0
    let right = 0
    let n = nums.length
    let maxlen = 0
    let sum =0
    while(right<n){
        while(left<=right && sum >k){
            sum = sum - nums[left]
            left++
        }
        if(sum === k){
            maxlen = Math.max(maxlen,right-left+1)
        }
        if (right < n) sum += nums[right];
        right++;

    }    
    console.log(maxlen)
}

let longestSubArraySum2 = function(nums,k){ // contains negetive nums also
    let sum = 0
    let maxLen = 0
    let map =new Map()
    for(let i = 0; i<nums.length; i++){
    sum += nums[i]
    
    if(sum === k){
        maxLen = Math.max(maxLen, i+1)
    }

    let rem = sum -k

    if(map.has(rem)){
        let len = i - map.get(rem)
        maxLen = Math.max(maxLen,len)
    }

    if(!map.has(sum)){
        map.set(sum,i)
    }
    }
    console.log(maxLen)
}
longestSubArraySum2([3,4,7,-7,2,1,4,2],7)
longestSubArraySum([2, 3, 5, 1, 9],10)
countNoOfsubarraySum([3,4,7,-7,2,1,4,2],7)

3,4
7
3,4,7,-7
7,-7,2,1,4
4,7,-7,2,1



