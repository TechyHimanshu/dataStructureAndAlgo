
var outer = 3

function test(){
    var inner = 2
    return outer+inner;
}

console.log(test());

function add(passed) {
    return function(inner) {
        return passed + inner;
    }
}

const a = add(3);
const b = add(4);
console.log(a(1));
console.log(b(1));

// let counter = 0;

function count(){
    let counter = 0
    counter +=1;
    return counter;
}

console.log(count())
console.log(count())
console.log(count())
