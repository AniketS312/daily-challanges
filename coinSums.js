function coinSums(n) {
    var ways = Array(n + 1).fill(0);
    ways[0] = 1;
    for (var _i = 0, _a = [1, 2, 5, 10, 20, 50, 100, 200]; _i < _a.length; _i++) {
        var x = _a[_i];
        for (var i = x; i <= n; i++)
            ways[i] += ways[i - x];
    }
    return ways[n];
}
