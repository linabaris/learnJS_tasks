const pow = (x,n) =>{
    let powVal=1;
    for(let i=1; i<=n; i++) {
        powVal *=x;
    }
    return powVal;
}
