// Copyright 2014 Cubane Canada, Inc.  All rights reserved.
// See LICENSE for details.

/*---
info: >
es6id: S25.4.5.3_A2.1_T2
    Promise.prototype.then expects a Promise as 'this'
author: Sam Mikes
description: Promise.prototype.then throw if 'this' is non-Promise Object
negative: TypeError
---*/

function ZeroArgConstructor() {
}

var z = new ZeroArgConstructor();

Promise.then.call(z, function () {}, function () {});
