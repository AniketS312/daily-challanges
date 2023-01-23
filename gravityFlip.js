// Given the initial configuration of the cubes in the box, find out how many cubes are in each of the n columns after Bob switches the gravity.
var flip = function (d, a) {
    var sortedArray = a.sort(function (a, b) { return a - b; });
    if (d === 'R') {
        return sortedArray;
    }
    else if (d === 'L') {
        return sortedArray.reverse();
    }
};
