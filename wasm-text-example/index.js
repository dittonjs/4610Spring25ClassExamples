function fib(n) {
  if (n < 2) return n;
  return fib(n-1) + fib(n-2);
}

WebAssembly.instantiateStreaming(fetch("out.wasm")).then((obj) => {
  // time the function and output the result to the divs
  let start = performance.now();
  fib(45);
  let end = performance.now();
  let time = end - start;
  document.getElementById("js").innerHTML = `fib(45) = (${time.toFixed(2)} ms)`;

  start= performance.now();
  obj.instance.exports.fib(45);
  end = performance.now();
  time = end - start;
  document.getElementById("wasm").innerHTML = `fib(45) = (${time.toFixed(2)} ms)`;

});

