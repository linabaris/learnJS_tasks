function work(a,b) {
    console.log(a+b);
}
function spy(func) {
    function wrapper(...args) {
        wrapper.calls.push(args);
        let result = func.call(this, ...args);
        return result;
    }
    wrapper.calls = [];
    return wrapper;
}
work = spy(work);
work(2,3);
work(3,4);
console.log(work.calls)