function x(){
    console.log("hey i am from inside y x")
}

function y(callback){    // we are passomg function x as function body 
    console.log("hey i am y")
    callback()
}

y(x)

//in below case i have to keep on increasing if esle statememt based on caltype
function  calc(num1, num2, caltype){
    if(caltype=="add"){
        return num1+num2
    }
    else{
        return num1 - num2
    }
}

console.log(calc(3,2,"add"))

//so to otimise it i can use call instead

function add(num1,num2){
    return num1 + num2
}

function multiply(num1,num2){
    return num1 + num2
}

function calcWithCallback( num1, num2 , callback){
    console.log(`passed nums are ${num1} and ${num2}`)
    return callback(num1,num2)
}

calcWithCallback(3,2, add)