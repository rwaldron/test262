// Copyright (C) 2020 Rick Waldron. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-atomics.store
description: >
  Atomics.store will operate on TA when TA.buffer is not a SharedArrayBuffer
features: [ArrayBuffer, Atomics, TypedArray]
---*/

const i32a = new Int32Array(
  new ArrayBuffer(Int32Array.BYTES_PER_ELEMENT * 4)
);

assert.sameValue(Atomics.store(i32a, 0, 1), 1, 'Atomics.store(i32a, 0, 1) returns 1');
assert.sameValue(Atomics.load(i32a, 0), 1, 'Atomics.load(i32a, 0) returns 1');

