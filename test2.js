// var singleNumber = function(nums) {
//     let n = nums.length;
//     let c = 0;
//     for (let i = 0; i < n; i++) {
//         c = c ^ nums[i];
//     }
//     return c; 
// };

// singleNumber([2,1,2,1,3])


// const maxheight = function(h){
// let maxwater = Number.MIN_VALUE
// let n = h.length
// let i = 0
// let j = n-1
// while(i<n && j > i){
//     maxwater = Math.max(maxwater, (j-i)* Math.min(h[i],h[j]))
//     if(h[i]>h[j])
//         j--
//     else
//       i++;
// }
// console.log(maxwater)
// console.log("hello")
// }

// maxheight([1,8,6,2,5,4,8,3,7])



// function createMatrix(wt,val,cap,n) {

// if(wt ==0 || n==0)
//     return 0

// if(m[n][cap]!= -1)
//     return m[n][cap]

// if(wt[n-1]<=cap){
//     return m[n][cap] = Math.max(val[n-1]+createMatrix(wt,val,cap-wt[n-1],n-1),createMatrix(wt,val,cap,n-1))
// }
// else    
//     return m[n][cap] = createMatrix(wt,val,cap,n-1)
// }
const wt = [1,3,4,5]
const val = [1,4,5,7]
const cap = 7
const n = 4
const temp = [ Array(cap+1)]
for(let i = 0;i<=n;i++){
    for(let j = 0; j<= cap; j ++){
        if(i== 0 && j == 0)
            temp[i][j]= 0
    }
}
function knapsack(wt,val,cap,n) {
    for(let i = 0;i<=n;i++){
        for(let j = 0; j<= cap; j ++){
            if(wt[n-1]<=cap){
                temp[n][cap]=Math.max(val(n-1)+temp[n-1][cap-wt[n-1]], temp[n-1][w])
            }   
            else if (wt[n-1]> cap){
                temp[n][cap]=temp[n-1][w]

            }
        }
    }
}

knapsack(wt,val,cap,n)
console.log(temp)