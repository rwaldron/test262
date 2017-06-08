// This file was procedurally generated from the following sources:
// - src/async-generators/yield-promise-reject-next-yield-star.case
// - src/async-generators/default/async-obj-method.template
/*---
description: yield * (async iterator) is treated as throw value (Async generator method)
esid: prod-AsyncGeneratorMethod
features: [async-iteration]
flags: [generated, async]
info: |
    Async Generator Function Definitions

    AsyncGeneratorMethod :
      async [no LineTerminator here] * PropertyName ( UniqueFormalParameters ) { AsyncGeneratorBody }

---*/
let error = new Error("Error reading file");
async function * readFile() {
  yield Promise.reject(error);
  yield "Unreachable content";
}

var callCount = 0;

var gen = {
  async *method() {
    callCount += 1;
    yield * readFile();

  }
}.method;

var iter = gen();

iter.next().then(() => {
  () => $DONE("Promise incorrectly resolved.")
}, thrownValue => {
  // yield Promise.reject(error);
  assert.sameValue(thrownValue, error);

  iter.next().then(({done, value}) => {
    // iter is closed now.
    assert.sameValue(done, true, "The value of IteratorResult.done is `true`");
    assert.sameValue(value, undefined, "The value of IteratorResult.value is `undefined`");
  }).then($DONE, $DONE);
}).catch($DONE);

assert.sameValue(callCount, 1);
