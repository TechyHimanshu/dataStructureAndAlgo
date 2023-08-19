// house
// this.table = "window table";

// this.garage = {
//     table : 'garage table'
// }

// let janeRoom = {
//     table : 'jane room table'
// }
 
// const test = () =>{
//     this.counter = this.counter || 0;
//     return ++this.counter;
// }

// console.log(test());
// console.log(test());
// console.log(test());

// function tt(){
//     this.counter1 = 0
//     console.log(this)
//     return function inner(){
//         return ++this.counter1
//     }
// }
// let a = tt()
// console.log(a())
// console.log(a())
// console.log(a())

// const person =  {
//     firstName  : "John",
//     lastName   : "Doe",
//     id         : 5566,
//     myFunction : function() {
//       console.log(this);
//     }
//   };

// person.myFunction();


// const obj = {
//     name: "John",
//     greetRegular: function() {
//       console.log("Hello, " + this.name);
//     },
//   };
//   obj.greetRegular()
//   const greetFunction = obj.greetRegular;  //here obj.greetRegular is assigned to variable and its context changed to global context and name is not defined in global context hence undefined
//   greetFunction(); // Output: Hello, undefined
  

//   const obj2 = {
//     name: "John",
//     greetArrow: () => {
//       console.log("Hello, " + this.name);
//     },
//   };
//   obj2.greetArrow()  // arraow function doesn't have its own this
//   const greetArrowFunction = obj2.greetArrow;
//   greetArrowFunction(); // Output: Hello, undefined
// //we can also fix it using bind
//   const greetFunction2 = obj.greetRegular.bind(obj);
//   greetFunction2(); // Output: Hello, John
   

  function getThis() {
    return this;
  }
  
  const obj1 = { name: "obj1" };
  const obj2 = { name: "obj2" };
  
  obj1.getThis = getThis;
  obj2.getThis = getThis;
  
  console.log(obj1.getThis()); // { name: 'obj1', getThis: [Function: getThis] }
  console.log(obj2.getThis()); // { name: 'obj2', getThis: [Function: getThis] }
  