function coinSums(n: number) {
    const ways = Array(n + 1).fill(0);
    ways[0] = 1
    for (let x of [1, 2, 5, 10, 20, 50, 100, 200])
    for (let i = x; i <= n; i++)
      ways[i] += ways[i - x];
  return ways[n]
  }