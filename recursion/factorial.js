// 3! = 3*2*1

function factorial(n) {
    if (n == 0)
        return 1;
    return n * factorial(n - 1);
}

console.log(factorial(3));

console.log("-----------");

//  fabonacci series  0,1,2,3,5,8,13
function feb(n) {
    let febStore = {};
    function cal(n) {
        if(febStore[n]) return febStore[n];
        if(n == 0)
            return febStore[n] = n;    
        if (n == 1)
            return febStore[n] = n;
        return febStore[n] = cal(n - 1) + cal(n - 2)
    }
    while (n > 0) {
        console.log(cal(n));
        n -= 1;
    }
}

feb(10);