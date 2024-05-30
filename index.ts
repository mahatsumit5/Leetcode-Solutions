type F = (x: number) => number;
// composite function
function compose(functions: F[]): F {
  return function (x: number) {
    let n = x;
    for (let i = functions.length; i > 0; i--) {
      const fn = functions[i - 1];
      n = fn(n);
    }
    return n;
  };
}

function compose2(functions: F[]): F {
  return function (x) {
    return functions.reverse().reduce((prev: number, curr: F) => {
      return curr(prev);
    }, x);
  };
}

const fn = compose2([(x) => x + 1, (x) => 2 * x]);

type Counter = {
  increment: () => number;
  decrement: () => number;
  reset: () => number;
};

function createCounter(init: number): Counter {
  let b = init;
  return {
    increment() {
      return (b = init + 1);
    },
    decrement() {
      return (b = init - 1);
    },
    reset() {
      return init;
    },
  };
}

/**
  const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */

console.log(createCounter(0).increment());
