// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

function solution(number: number){
    let total: number = 0;
    for (let i = 0; i < number; i++) {
      if(i % 3 === 0 || i % 5 === 0) {
        total += i;
      }
    }
    console.log(total)
    return total
  }

