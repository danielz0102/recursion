function fibs(n) {
  const result = [0, 1];

  for (let i = 0; i < n - 2; i++) {
    const next = result[i] + result[i + 1];
    result.push(next);
  }

  return result;
}
