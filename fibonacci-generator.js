
function *fib() {
    let [a, b] = [1, 1];

    while (true) {
        yield a;
        [a, b] = [b, a + b];
    }
}
