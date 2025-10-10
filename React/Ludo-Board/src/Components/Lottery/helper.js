function genTicket(n) {
  let arr = new Array(n);
  for (let i = 0; i < n; i++) {
    arr[i] = Math.floor(Math.random() * 10);
  }
  return arr;
}

function sum(arr) {
  return arr.reduce((sum, curr) => {
    return sum + curr;
  }, 0);
}

function celebrate() {
  confetti({
    particleCount: 500,
    spread: 70,
    origin: { y: 0.6 },
  });
}

export { genTicket, sum, celebrate };
