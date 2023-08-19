// const arr = [ 4 , 5 , 2 , 25 ]
const arr = [17,18,5,4,6,1]
// output ==>  4      –>   5
//             5      –>   25
//             2      –>   25
//             25     –>   -1


function nextGrtEle(arr){
    let stack = []
    stack.push(arr[0])
    for(let i = 1 ; i<arr.length; i++){
        while(stack.length && arr[i]>stack[stack.length-1]){
            console.log(`${stack[stack.length-1]} -> ${arr[i]}`)
            stack.pop()
        }
            stack.push(arr[i])
    }
    while(stack.length){
        console.log(`${stack[stack.length-1]} -> -1`)
        stack.pop()
    }
}
nextGrtEle(arr)


// const a = arr.map(ele=>{
//     const final = ele.y.push(ele.x)
//     delete ele.x
//     return final
// })