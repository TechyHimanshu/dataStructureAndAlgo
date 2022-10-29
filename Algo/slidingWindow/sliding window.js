const arr = [4,7,3,9,1,0,5,8,3,2]
const k = 3 //window size

let sum = 0;
let i = 0 ,j = 0;
let max = Number.MIN_VALUE;
while(j < arr.length){
    sum = sum + arr[j];
    if( j-i+1 < k)
        j++;
    else if (j-i+1 === k){
        max = Math.max(max,sum);
        sum = sum - arr[i]
        i++;
        j++;
    }     
}
console.log(max);


// var maxInSlidingWindow = function(nums, k) {
//     let i = 0;
//     let j = 0;
//     let temp = [];
//     let res = [];
//     while(j<nums.length){
//         if(temp.length!=k){
//             temp.push(nums[j])
//             j++
//         }
//         else if(k == temp.length){
//             res.push(Math.max(...temp));
//             i++;
//             temp.shift();
//         }

//     }
//     res.push(Math.max(...temp));
//     return res

// };



var maxInSlidingWindow = function (nums, k) {
    let i = 0;
    let j = 0;
    let deque = [];
    let res = [];
    while (j < nums.length) {
        while (deque.length && nums[j] > nums[deque[deque.length - 1]])
            deque.pop()
        deque.push(j);
        if (i > deque[0])
            deque.shift()
        if (k == j-i +1) {
            res.push(nums[deque[0]]);
            i++;
        }
        j++
    }
    return res

};

let ip = [1, 3, -1, -3, 5, 3, 6, 7];
let ip2 = [7, 2, 4]
let l = 3;
maxInSlidingWindow(ip, l)