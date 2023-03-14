const fib = (n) => {
    if(n <= 1) {
        return n;
    }
    return (fib(n-1)+fib(n-2))
}

console.log(fib(5));

//use memo
const memoize = (fn) => {
    let cache = {};
    return (...args) => {
        let n = args[0];
        if(n in cache) {
            return cache[n]
        }
        let res = fn(n);
        cache[n] = res;
        return res;
    }
}
const getFib = memoize(
    (x) => {
        if(x <=1) {
            return x;
        }
        return (getFib(x-1) + getFib(x-2));
    }
)
console.log(getFib(77));