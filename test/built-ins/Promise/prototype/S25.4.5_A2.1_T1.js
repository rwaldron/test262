// Copyright 2014 Cubane Canada, Inc.  All rights reserved.
// See LICENSE for details.

/*---
info: >
es6id: S25.4.5_A2.1_T1
    Promise prototype object is an ordinary object
author: Sam Mikes
description: Promise prototype is a standard built-in Object
---*/

if (!(Promise.prototype instanceof Object)) {
    $ERROR("Expected Promise.prototype to be an Object");
}

