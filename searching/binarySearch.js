let nums = [1,3,5,6], target = 2
// recursive
function binarySearchHelper( nums, start, end, target){
    if(end >= start) {
        let mid = Math.floor((start+end)/2);
        if(nums[mid]=== target) return mid;
        if(target>nums[mid]) return binarySearchHelper(nums, mid+1, end, target);
        return binarySearchHelper(nums, start, mid-1, target);
    }
    return -1
}

function binarySearch(nums, target){
    let start = 0;
    let end = nums.length - 1;
    console.log(binarySearchHelper( nums, start, end, target)) 
}

binarySearch(nums,target);

// iterative

function binarySearch2(nums,target){
    let start = 0;
    let end = nums.length - 1;
    while(end >= start){
        let mid = Math.floor((start + end)/2)
        if(nums[mid] === target) return mid;
        if(target > nums[mid]) start = mid+1;
        else end = mid-1
    }
    return -1
}

console.log(binarySearch2(nums,target));
