function print(n){
    if (n==1){
        console.log(n)
        return
    } 
    print(n-1);
    console.log(n);
}

print(7);


// print n to 1


function print2(n){
    if (n==1){
        console.log(n)
        return
    } 
    console.log(n);
    print2(n-1);
}

// print2(7);