// Given the initial configuration of the cubes in the box, find out how many cubes are in each of the n columns after Bob switches the gravity.

const flip=(d: string, a: number[])=>{
    let sortedArray: number[] = a.sort((a, b) => a-b)
    if( d === 'R') {
      return sortedArray;
    } else if ( d === 'L') {
      return sortedArray.reverse()
    }
  }