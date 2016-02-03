// Copyright (C) 2016 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
id: sec-%typedarray%.from
description: >
  "from" cannot be invoked as a function
info: >
  22.2.2.1 %TypedArray%.from ( source [ , mapfn [ , thisArg ] ] )

  1. Let C be the this value.
  2. If IsConstructor(C) is false, throw a TypeError exception.
  ...
includes: [testTypedArray.js]
---*/

testWithTypedArrayConstructors(function(TA) {
  var from = TA.from;

  assert.throws(TypeError, function() {
    from([]);
  });
});
