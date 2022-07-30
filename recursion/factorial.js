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
    function cal(n) {
        if (n <= 1)
            return n;
        return cal(n - 1) + cal(n - 2)
    }
    while (n > 1) {
        console.log(cal(n));
        n -= 1;
    }
}

feb(3);