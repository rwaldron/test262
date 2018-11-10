// Copyright (C) 2017 Lucas Azzola. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
author: Lucas Azzola
esid: prod-Catch
description: >
  It is a SyntaxError to have a try/catch statement with an empty CatchParameter
info: |
  Catch :
    catch ( CatchParameter ) Block

  CatchParameter :
    BindingIdentifier
    BindingPattern

negative:
  phase: parse
  type: SyntaxError
---*/

throw "Test262: This statement should not be evaluated.";

try {} catch () {}

