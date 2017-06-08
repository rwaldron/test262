// This file was procedurally generated from the following sources:
// - src/async-generators/yield-promise-reject-next-for-await-of.case
// - src/async-generators/default/async-obj-method.template
/*---
description: yield Promise.reject(value) in for-await-of is treated as throw value (Async generator method)
esid: prod-AsyncGeneratorMethod
features: [async-iteration]
flags: [generated, async]
info: |
    Async Generator Function Definitions

    AsyncGeneratorMethod :
      async [no LineTerminator here] * PropertyName ( UniqueFormalParameters ) { AsyncGeneratorBody }

---*/
let iterable = [
  Promise.reject(1),
  2
];

var callCount = 0;

var gen = {
  async *method() {
    callCount += 1;
    for await (let value of iterable) {
      yield value;
    }
  }
}.method;

var iter = gen();

iter.next().then(() => {
  () => $DONE("Promise incorrectly resolved.")
}, thrownValue => {
  // yield Promise.reject(1);
  assert.sameValue(thrownValue, 1);

  iter.next().then(({done, value}) => {
    // iter is closed now.
    assert.sameValue(done, true, "The value of IteratorResult.done is `true`");
    assert.sameValue(value, undefined, "The value of IteratorResult.value is `undefined`");
  }).then($DONE, $DONE);
}).catch($DONE);

assert.sameValue(callCount, 1);
