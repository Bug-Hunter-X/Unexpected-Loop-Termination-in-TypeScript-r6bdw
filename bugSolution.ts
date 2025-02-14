function printNumbers(n: number): void {
  for (let i = 1; i <= n; i++) {
    console.log(i);
  }
}

function printNumbers2(n: number): void {
  for (let i = 1; i <= n; i++) {
    console.log(i);
    if (i === 3) {
      // Continue to next iteration instead of exiting the function early
      continue;
    }
  }
}

printNumbers(5);
printNumbers2(5); // Prints 1, 2, 3, 4, 5