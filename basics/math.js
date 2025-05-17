function add(a, b) {
    return a+b;
}

function difference(a, b) {
    return (a-b > 0 ? a-b : b-a);
} 

module.exports = {
    add,
    difference
}