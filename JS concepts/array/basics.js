// const arr = [1, 2, 3, 4, 5];

// arr.find((ele,index, array)=>{
//     if(ele===2)
//         console.log(ele,index)})

// console.log(arr.find(ele=> ele==2))



// hello(); // referece error cannot access hello befor innitialisation
//  const hello = () =>{
//     console.log("hello")
//  }


function foo()
{    
return bar(); 
  function bar() {    
    return 3;    
  }    
 function bar() {        
  return 8;    
 }
}

//In JavaScript, when multiple functions have the same name within the same scope, 
//only the last declaration is considered. Therefore, 
//the second bar function declaration will override the first one. As a result, 
//calling bar() within foo will always return 8 regardless of the order of the declarations.
console.log(foo()); // 8