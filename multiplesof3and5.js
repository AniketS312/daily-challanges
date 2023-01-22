// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
function solution(number) {
    var total = 0;
    for (var i = 0; i < number; i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            total += i;
        }
    }
    console.log(total);
    return total;
}
