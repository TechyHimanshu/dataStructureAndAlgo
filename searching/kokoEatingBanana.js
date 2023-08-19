var minEatingSpeed = function(piles, h) {
    let [min,max] = [1,Math.max(...piles)]
        while(min<max){
            let hours = 0
            let mid = Math.floor((min+max)/2)
            for(let p of piles){
                hours += Math.ceil(p/mid)
             }
            if(hours <= h){
                max = mid
            } 
            if(hours > h){
                min = mid + 1
            }
        }
    return max
};

let piles = [30,11,23,4,20]
let h = 5
minEatingSpeed(piles,h)


var findMinInRotatedSortedArray = function(nums) {
    let n = nums.length
    let left = 0 
    let right = nums.length-1
    while(left<right) {
        let mid = Math.floor((left + right)/2)
        let temp = nums[mid]
        let [leftNum , rightNum] = [nums[left], nums[right]]
        let ans = (leftNum < rightNum)
        if(ans) return leftNum
        else if(temp>=leftNum) left = mid + 1
        else right = mid
    }
    return nums[left]
};

console.log(findMinInRotatedSortedArray([3,4,5,1,2]))
