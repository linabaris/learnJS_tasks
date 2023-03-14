const f = (x) => {
    console.log(x);
}
const delay = (f, ms) => {
    return function(argument) {
        let result = f.call(this, argument);
        setTimeout(()=> {
            return result
        },ms)
    }
}
let f1000 = delay(f,5000);
f1000('test');