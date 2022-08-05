const num = -120;

var reverse = function(x) {
    if(x < 0) return -1 * reverse(-x);
    let q = 0; 
    while (x > 0){
    const a = x % 10;
    q = q * 10 + a;
    x = Math.floor(x/10)
    }    
    return (q > 2**31 -1) ? 0 : q
};

console.log(reverse(num));