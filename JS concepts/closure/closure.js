
// var outer = 3

// function test(){
//     var inner = 2
//     return outer+inner;
// }

// console.log(test());

// function add(passed) {
//     return function(inner) {
//         return passed + inner;
//     }
// }

// const a = add(3);
// const b = add(4);
// console.log(a(1));
// console.log(b(1));

// let counter = 0;

let counqweet = (function(){
    let counter = 0
    return function (){return  counter +=1};
})();

console.log(counqweet())
console.log(counqweet())
console.log(counqweet())
