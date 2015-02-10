// Copyright 2014 Cubane Canada, Inc.  All rights reserved.
// See LICENSE for details.

/*---
info: >
es6id: S25.4.2.1_A1.1_T1
    Promise reaction jobs have predictable environment
author: Sam Mikes
description: argument passes through "Identity"
---*/

var obj = {};

var p = Promise.resolve(obj).then(/*Identity, Thrower*/)
        .then(function (arg) {
            if (arg !== obj) {
                $ERROR("Expected promise to be fulfilled with obj, actually " + arg);
            }
        }).then($DONE, $DONE);
