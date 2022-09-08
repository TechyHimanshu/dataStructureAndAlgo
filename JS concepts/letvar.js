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
