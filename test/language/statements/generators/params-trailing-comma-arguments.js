// Copyright (C) 2017 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: >
  Check that trailing commas don't affect the value of the .length property of
  the arguments object.
info: http://jeffmo.github.io/es-trailing-function-commas/
---*/

var length = null;
function * g(a,b,) {
  length = arguments.length;
}

g(1, 2);

assert.sameValue(length, 2);
