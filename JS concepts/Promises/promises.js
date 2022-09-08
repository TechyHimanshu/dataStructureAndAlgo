// Promises always given precedence over timeOut

function a() {
    console.log('start');

    const promise1 = new Promise((resolve, reject) => {
        console.log(1)
    })

    console.log('end');
}

function a2() {
    console.log("----------a2 output---------")
    console.log('start');

    const promise1 = new Promise((resolve, reject) => {
        console.log(1)
        resolve(2)
    })

    promise1.then(res => {
        console.log(res)
    })

    console.log('end');
}


function a3() {
    console.log("----------A3 output---------")

    console.log('start');

    const promise1 = new Promise((resolve, reject) => {
        console.log(1)
        resolve(2)
        console.log(3)
    })

    promise1.then(res => {
        console.log(res)
    })

    console.log('end');
}

function a4() {
    console.log("----------A4 output---------")
    console.log('start');

    const promise1 = new Promise((resolve, reject) => {
        console.log(1)
        resolve(3); 
        })

    promise1.then(res => {
        console.log(res);
        console.log(2)
    })

    console.log('end');
}

async function x() {
	console.log(1);
	setTimeout(() => {console.log(2)}, 1000); 
    await new Promise(resolve => setTimeout(resolve, 1000));  // will wait here unit executed completely
	new Promise(resolve => resolve(console.log(3)))
	new Promise(res => res(4)).then(console.log)
	setTimeout(() => {console.log(6)}, 0); 
	console.log(5)
}

// output will be => 1,2,3,5,4,6 


async function x() {
	console.log(1);
	setTimeout(() => {console.log(2)}, 1000); 
	new Promise(resolve => resolve(console.log(3)))
	new Promise(res => res(4)).then(console.log)
	setTimeout(() => {console.log(6)}, 0); 
	console.log(5)
    await new Promise(resolve => setTimeout(resolve, 1000));  // will wait here unit executed completely
}

// output will be => 1,3,5,4,6,2 


console.log('First')
setTimeout(function () {
  console.log('Second')
}, 1000)
setTimeout(function () {
  console.log('Fifth')
}, 0)
new Promise(function (res) {
  res('Third')
}).then(console.log)

console.log('Fourth')


print();
var print = function(){
    console.log('Printer 1');
}
print();
function print(){
    console.log('Printer 2');
}
print();


// x();
// a();
// a2();
//a3();
// a4();


