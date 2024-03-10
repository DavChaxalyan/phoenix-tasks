//   1

// const fibo = (n) => {
//     if(typeof n != 'number' || n < 0 || !Number.isInteger(n)){
//         throw new Error('error')
//     }
//     if(n <= 1){
//         return n
//     }
//     return fibo(n - 1) + fibo(n - 2)
// }

// function memo(cb){
//     let cache = new Map();
//     return function(num){
//         if(cache.has(num)){
//             return cache.get(num)
//         }
//         let result = cb(num);
//         cache.set(num, result);
//         return result
//     }
// }

// let fib = memo(fibo);

// console.log(fib(20))
// console.log(fib(21))
// console.log(fib(20))

//    2

// function sumAll(){
//     let arr = [...arguments]
//     return arr.reduce((a, b) => a + b)
// }

// console.log(sumAll(1, 2))