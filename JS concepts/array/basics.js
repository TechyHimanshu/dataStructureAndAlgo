const arr = [1, 2, 3, 4, 5];

arr.find((ele,index, array)=>{
    if(ele===2)
        console.log(ele,index)})

console.log(arr.find(ele=> ele==2))



hello();
 const hello = () =>{
    console.log("hello")
 }


function foo()
{    
  function bar() {    
    return 3;    
  }    
 
 function bar() {        
  return 8;    
 }
 
 return bar(); 
}

console.log(foo()); // 8