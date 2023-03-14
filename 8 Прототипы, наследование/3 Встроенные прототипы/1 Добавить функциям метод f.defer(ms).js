function defer(ms) {
    setTimeout(this,ms)
}
Function.prototype.defer = defer;

function f() {
    console.log('Hello');
}
f.defer(5000);