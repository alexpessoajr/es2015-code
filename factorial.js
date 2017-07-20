
const range = n => Array(n).fill(1).map((_, i) => i + 1);

const factorial = n => range(n || 1).reduce((a, b) => a * b);

const sum_digits = n => [...String(n)].map(n => Number(n)).reduce((a, b) => a + b);


range(20).forEach(i => console.log(i, factorial(i), sum_digits(factorial(i))));
