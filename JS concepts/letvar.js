for (var i = 0; i < 5; i++) {
    (function a (){
        var j=i;
        setTimeout(()=> {console.log(); },i * 1000 );
    })();
}

// for (var i = 0; i < 5; i++) {
// 	setTimeout(()=> {console.log(i); },i * 1000 );
// }

// for (let i = 0; i < 5; i++) {
// 	setTimeout(()=> {console.log(i); },i * 1000 );
// }

const arr = [10, 12, 15, 21];
for (var i = 0; i < arr.length; i++) {
setTimeout(function() {
console.log('Index: ' + i + ', element: ' + arr[i]);
}, 3000);
}



var rate = 10;
function getRate() {
        if(rate === undefined){
            var rate = 6;
            return rate;
        } else {
            return 10;
        }
    }
    console.log("Rate is", getRate());   //6

    /* 
    this is how hoisting will hapenn for the abovw code
    function getRate() {
        var rate;      this is hoisted to top of the function and initialised with undefined
        if(rate === undefined){
            rate = 6;
            return rate;
        } else {
            return 10;
        }
    }
    
    */