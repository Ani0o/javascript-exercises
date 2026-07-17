const fibonacci = function(position) {
    const fib = [1, 1];
    position = Number(position);
    if (position < 0) return "OOPS";
    if (position === 0) return 0;

    for (let i = 0; i < position; i++) {
        fib.push(fib[i] + fib[i + 1]);
    }
    return fib[position - 1];
};

// Do not edit below this line
module.exports = fibonacci;
