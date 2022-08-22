// house
this.table = "window table";

this.garage = {
    table : 'garage table'
}

let janeRoom = {
    table : 'jane room table'
}
 
const test = () =>{
    this.counter = this.counter || 0;
    return ++this.counter;
}

console.log(test());
console.log(test());
console.log(test());


const person =  {
    firstName  : "John",
    lastName   : "Doe",
    id         : 5566,
    myFunction : function() {
      console.log(this);
    }
  };

person.myFunction();