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
        return 3
    })

    promise1.then(res => {
        console.log(res);
        console.log(2)
    })

    console.log('end');
}

function x() {
	console.log(1);
	setTimeout(() => {console.log(2)}, 0); 
	new Promise(resolve => resolve(console.log(3)))
	new Promise(res => res(4)).then(console.log)
	console.log(5)             
}

// console.log('First')
// setTimeout(function () {
//   console.log('Second')
// }, 1000)
// setTimeout(function () {
//   console.log('Fifth')
// }, 0)
// new Promise(function (res) {
//   res('Third')
// }).then(console.log)

// console.log('Fourth')


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


