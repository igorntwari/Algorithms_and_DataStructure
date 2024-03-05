function calculator(a,b,sign) {
    if(sign === '+') return a + b
    if(sign === '-') return a - b
    if(sign === '*' ) return a*b
    if(sign === '/') return a/b
}

module.exports = calculator;
