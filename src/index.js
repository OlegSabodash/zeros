module.exports = function getZerosCount(number) {
  var sum = 0;
    var n = 1;
    while (Math.pow(5, n) < number) {
        sum += Math.floor(number / Math.pow(5, n));
        n++;
    }
    return sum;
}
