//write an iterating function thats takes in an nth fibonaccie and returns a sequence of  of fibonaccie in an array

function fibo(n){
    if(n <= 0){
        return []
    }else if(n === 1){
        return[0]
    }else if(n === 2){
        return[0,1]
    }else{
        const fibSequence = [0,1];
        while(fibSequence.length < n){
            let nextFib = fibSequence[fibSequence.length -1] + fibSequence[fibSequence.length-2];
            fibSequence.push(nextFib)
        }
        return fibSequence;
    }
}

console.log(fibo(20));

//write a function to resolve the fibonacci function recursively 

function solveFib(n){
    return n <= 1 ? n : solveFib(n-1) + solveFib(n-2);
}

console.log(solveFib(19));