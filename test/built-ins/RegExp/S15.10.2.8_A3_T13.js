// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
info: |
    Parentheses of the form ( Disjunction ) serve both to group the components of the Disjunction pattern together and to save the result of the match.
    The result can be used either in a backreference (\ followed by a nonzero decimal number),
    referenced in a replace string,
    or returned as part of an array from the regular expression matching function
es5id: 15.10.2.8_A3_T13
description: >
    Execute /(a(b(c)))(d(e(f)))\2\5/.exec("xabcdefbcefg") and check
    results
---*/

var __executed = /(a(b(c)))(d(e(f)))\2\5/.exec("xabcdefbcefg");

var __expected = ["abcdefbcef", "abc", "bc", "c", "def", "ef", "f"];
__expected.index = 1;
__expected.input = "xabcdefbcefg";

//CHECK#1
if (__executed.length !== __expected.length) {
  $ERROR('#1: __executed = /(a(b(c)))(d(e(f)))\\2\\5/.exec("xabcdefbcefg"); __executed.length === ' + __expected.length + '. Actual: ' + __executed.length);
}

//CHECK#2
if (__executed.index !== __expected.index) {
  $ERROR('#2: __executed = /(a(b(c)))(d(e(f)))\\2\\5/.exec("xabcdefbcefg"); __executed.index === ' + __expected.index + '. Actual: ' + __executed.index);
}

//CHECK#3
if (__executed.input !== __expected.input) {
  $ERROR('#3: __executed = /(a(b(c)))(d(e(f)))\\2\\5/.exec("xabcdefbcefg"); __executed.input === ' + __expected.input + '. Actual: ' + __executed.input);
}

//CHECK#4
for (var index = 0; index < __expected.length; index++) {
  if (__executed[index] !== __expected[index]) {
    $ERROR('#4: __executed = /(a(b(c)))(d(e(f)))\\2\\5/.exec("xabcdefbcefg"); __executed[' + index + '] === ' + __expected[index] + '. Actual: ' + __executed[index]);
  }
}
