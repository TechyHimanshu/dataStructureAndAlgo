

function add(x, y, cb) {
    setTimeout(() => {
      cb(x + y)
    }, 2000)
}


function promisify(fn) {
    return (...args) => {
      return new Promise((resolve, reject) => {
      fn(...args, resolve)
      })
    }
  }

const addPromise = promisify(add)
addPromise(3,4).then(sum => console.log(sum))



//always use setimeout inside new Promise so that it will resole it ad give you resolved oujtput

async function test(x,y){
    setTimeout(() => {
        return x+y
    }, 2000);
}

async function ans(){
    console.log(await test(2,3)) /// prints undefined because async returns promise immediately ad setTimeout is not executed
}

// to solve this refactor it as below

function test(x,y){
    return new Promise((res,err)=>{
        setTimeout(() => {
            res(x+y);
        }, 2000);
    })   
}

async function ans(){
    console.log(await test(2,3)) /// prints 5 because async returns promise after setTimeout is executed that means fullfilled 
}