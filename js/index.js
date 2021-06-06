function fibonacci(num) {
  let n1 = 0;
  let n2 = 1;
  let temp;

  for (let i = 1; i < num; i++) {
    temp = n1 + n2;
    n1 = n2;
    n2 = temp;
  }

  return n2;
}

const X = 10;

document.getElementById("fib-X").innerText = X;

const Y = fibonacci(X);

document.getElementById("fib-Y").innerText = Y;
