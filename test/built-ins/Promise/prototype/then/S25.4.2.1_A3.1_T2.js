// Copyright 2014 Cubane Canada, Inc.  All rights reserved.
// See LICENSE for details.

/*---
info: >
es6id: S25.4.2.1_A3.1_T2
    Promise reaction jobs have predictable environment
author: Sam Mikes
description: Promise.onFulfilled gets undefined as 'this'
flags: [onlyStrict]
---*/

var expectedThis = undefined,
    obj = {};

var p = Promise.resolve(obj).then(function(arg) {
    if (this !== expectedThis) {
        $ERROR("'this' must be undefined, got " + this);
    }
    if (arg !== obj) {
        $ERROR("Expected promise to be fulfilled by obj, actually " + arg);
    }
}).then($DONE, $DONE);
