// Copyright 2014 Cubane Canada, Inc.  All rights reserved.
// See LICENSE for details.

/*---
info: >
es6id: S25.4.4.4_A3.1_T1
   Promise.reject
author: Sam Mikes
description: Promise.reject throws TypeError for bad 'this'
negative: TypeError
---*/

function ZeroArgConstructor() {
}

Promise.reject.call(ZeroArgConstructor, 4);
