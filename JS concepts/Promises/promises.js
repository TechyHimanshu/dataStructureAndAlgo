// Promises always given precedence over timeOut

function a() {
    console.log('start');

    const promise1 = new Promise((resolve, reject) => {
        console.log(1)
    })

    console.log('end');
}
// ans => start,1,end

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
// ans => StaticRange,1,end,2

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

//ans => start,1,3,end,2

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

// async function x() {
// 	console.log(1);
// 	setTimeout(() => {console.log(2)}, 1000); 
//   await new Promise(resolve => setTimeout(resolve(), 10000));  // will wait here unit executed completely
// 	new Promise(resolve => resolve(console.log(3)))
// 	new Promise(res => res(4)).then(console.log)
// 	setTimeout(() => {console.log(6)}, 0); 
// 	console.log(5)
// }

// output will be => 1,3,5,4,6,2 


// async function x() {
// 	console.log(1);
// 	setTimeout(() => {console.log(2)}, 1000); 
// 	new Promise(resolve => resolve(console.log(3)))
// 	new Promise(res => res(4)).then(console.log)
// 	setTimeout(() => {console.log(6)}, 0); 
// 	console.log(5)
//   await new Promise(resolve => setTimeout(resolve, 1000));  // will wait here unit executed completely
// }
// x()
// output will be => 1,3,5,4,6,2 


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


// print();
// var print = function(){
//     console.log('Printer 1');
// }
// print();
// function print(){
//     console.log('Printer 2');
// }
// print();


// x();s
// a();
// a2();
// a3();
// a4();



const promise = new Promise((resolve, reject) => {
    console.log(1);
    setTimeout(() => {
      console.log("timerStart");
      resolve("success");
      console.log("timerEnd");
    }, 0);
    console.log(2);
  });
  
  promise.then((res) => {
    console.log(res);
  });
  
  console.log(4);

/*
1
2
4
timerStart
timerEnd
success
*/


const timer1 = setTimeout(() => {
    console.log('timer1');
  
  const timer3 = setTimeout(() => {
      console.log('timer3')
    }, 0)
  }, 0)
  
  const timer2 = setTimeout(() => {
    console.log('timer2')
  }, 0)
  
  console.log('start')
/*
start
timer1
timer2
timer3
*/


// const timer1 = setTimeout(() => {
//     console.log('timer1');
//     const promise1 = Promise.resolve().then(() => {
//       console.log('promise1')
//     })
//   }, 0)
  
//   const timer2 = setTimeout(() => {
//     console.log('timer2')
//   }, 0)
  
//   console.log('start')

/* 
start
timer1
promise1
timer2
*/


// const promise1 = Promise.resolve().then(() => {
//     console.log('promise1');
//     const timer2 = setTimeout(() => {
//       console.log('timer2')
//     }, 0)
//   });
  
//   const timer1 = setTimeout(() => {
//     console.log('timer1')
//     const promise2 = Promise.resolve().then(() => {
//       console.log('promise2')
//     })
//   }, 0)
  
//   console.log('start');

  /*
  start
  promise1
  timer1
  promise2
  timer2
  */


  // const promise1 = new Promise((resolve, reject) => {
  //   const timer1 = setTimeout(() => {
  //     resolve('success')
  //   }, 1000)
  // })
  
  // const promise2 = promise1.then(() => {
  //   throw new Error('error!!!')
  // })
  
  // console.log('promise1', promise1)
  // console.log('promise2', promise2)
  
  // const timer2 = setTimeout(() => {
  //   console.log('promise1', promise1);
  //   console.log('promise2', promise2);
  // }, 2000)

  /*
promise1 <pending>
promise2 <pending>
'error!!!'
Promsie <resolve> success
Promise <reject> Error: error!!!
  */