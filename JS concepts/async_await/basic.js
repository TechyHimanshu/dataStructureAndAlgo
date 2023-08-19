// this fucntion will error 
//Parsing error: Can not use keyword 'await' outside an async function(undefined)
async function someFunction() {
    setTimeout( () => {
        await someOtherFunction();
    }, 5000);
}


// To fix this issue, we have to play a bit of trick and refactor our code like:;
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function someFunction() {
    await delay(5000);
    await someOtherFunction();
}


async function x() {
    await y();
    console.log('X')
}

async function y() {
    console.log("Y")
}

function a() {
    x();
    y();
}

a();//op yyx


