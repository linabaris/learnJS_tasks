function f(a,b) {
    console.log(a+b);
}

function defer(ms) {
    let context = this;
    return function (...args) {
        setTimeout(() => context(...args), ms)
    }
}
Function.prototype.defer = defer;
f.defer(4000)(1,6)