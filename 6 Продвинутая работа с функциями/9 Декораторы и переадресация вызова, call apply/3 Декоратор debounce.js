function debounce(f, ms) {
    let state = false;
    return function() {
        if(state) return;
        f.apply(this,arguments);
        state=true;
        setTimeout(() => state = false,ms)
    }
}