/**
 * @return {Generator<number>}
 */
var fibGenerator = function* () {
  let prev1 = 0;
  let prev2 = 1;

  while (true) {
    yield prev1;
    [prev1, prev2] = [prev2, prev1 + prev2];
  }
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */

/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
  return setTimeout(() => {}, millis);
}

/**
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
 */
