let val = [60, 100, 120];
let wt = [10, 20, 30];
let w = 50;

// recursion
function knapsack(wt, val, w, n) {
    if (w === 0 || n === 0) return 0;
    if (wt[n - 1] <= w)
        return Math.max(val[n - 1] + knapsack(wt, val, w - wt[n - 1], n - 1), knapsack(wt, val, w, n - 1))
    else
        return knapsack(wt, val, w, n - 1)
}

// memoization
let temp = Array(val.length + 1).fill(Array(w + 1).fill(-1));
function knapsack2(wt, val, w, n) {
    if (n === 0 || w === 0) return 0;
    if (temp[n][w] != -1) return temp[n][w];
    if (wt[n - 1] <= w)
        return temp[n][w] = Math.max(val[n - 1] + knapsack(wt, val, w - wt[n - 1], n - 1), knapsack(wt, val, w, n - 1));
    else if (wt[n - 1] > w)
        return temp[n][w] = knapsack(wt, val, w, n - 1);
}

// knapsack2(wt,val,w,val.length)
// console.log(temp[n][w]);


//top-down
function knapsack3(wt,val, w,) {
    let t = [];
    for(let i = 0 ; i<=val.length ; i++){
        t[i] = [];
    }
    for (let i = 0; i <t.length; i++) {
        for (let j = 0; j <= w; j++) {
            if (i == 0 || j == 0) t[i][j] = 0
        }
    }

    for (let i = 1; i <= val.length; i++) {
        for (let j = 1; j <= w; j++) {
            if(wt[i-1]<=j)
                t[i][j] = Math.max(val[i-1]+t[i-1][j-wt[i-1]],t[i-1][j])
            else
                t[i][j] = t[i-1][j]
            }
        }
    }

knapsack3(wt, val, w)