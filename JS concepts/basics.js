(function pop() {
  console.log('hello')
})()

pop() //Uncaught ReferenceError ReferenceError: pop is not defined


let arr1 = [1, 2]
let arr2 = arr1

arr2.push(3)
// copying 1 array to another copy by referece 
console.log(arr1); //1,2,3
console.log(arr2); //1,2,3



let obj = {
  name: 'Sourav',
  getName: function () {
    console.log("hello   ", this.name);
  }
}

setTimeout(() => obj.getName.call(obj), 1000)


function foo() {
  function bar() {
    console.log("a")
    return 3;
  }

  return bar();

  function bar() {
    console.log("b")
    return 8;
  }

}
console.log(foo());  // b 8


function foo() {
  var a;
  console.log(a);
  a = 8;
}
foo()  // undefined

const mod = {
  exports: {}
};

let exp = mod.exports;

exp.publicFoo = 'Welcome to public foo';
exp = { publicFoo: 'This is Awesome' };

console.log(mod.exports.publicFoo);