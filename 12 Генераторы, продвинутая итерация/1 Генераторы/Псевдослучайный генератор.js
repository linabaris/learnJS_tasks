function* pseudoRandom(seed) {
    let val = seed;

    while(true) {
        val = val*16807 % 2147483647
        yield val;
    }
}