function fibs(n) {
  const result = [0, 1];

  for (let i = 0; i < n - 2; i++) {
    const next = result[i] + result[i + 1];
    result.push(next);
  }

  return result;
}

function fibsRec(n) {
  if (n <= 2) {
    return [0, 1];
  }

  const previous = fibsRec(n - 1);
  const next = previous.at(-1) + previous.at(-2);
  const result = previous.concat(next);

  return result;
}

console.log(fibs(8));
console.log(fibsRec(8));
