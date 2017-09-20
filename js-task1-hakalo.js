function sumArrays(a, b, c) {
    var result = [];
    for (var i = 0; i < Math.max(a.length, b.length, c.length); i++) {
        result.push((a[i] || 0) + (b[i] || 0) + ((c[i] || 0)));
    }
    return result;
}
var a = [1, 2, 3];
var b = [4, 5, 6, 8];
var c = [7, 8, 9];
console.log(sumArrays(a, b, c));

