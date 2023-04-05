const wrap = (target) => {
    return new Proxy(target, {
        get(target, prop, reciever) {
            if(prop in target) {
                return Reflect.get(target, prop, reciever)
            } else {
                throw new ReferenceError('prop is not fined')
            }
        }
    })
}