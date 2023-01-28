function lcm(a, b) {
    return (a * b) / gcd(a, b);
}
function gcd(a, b) {
    if (b === 0)
        return a;
    return gcd(b, a % b);
}
function smallestMult(n) {
    var maxLCM = 1;
    for (var i = 2; i <= n; i++) {
        maxLCM = lcm(maxLCM, i);
    }
    return maxLCM;
}
smallestMult(20);
