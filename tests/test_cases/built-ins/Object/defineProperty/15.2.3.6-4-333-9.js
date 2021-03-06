// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.6-4-333-9
description: >
    Object.defineProperty - Named property 'P' with attributes
    [[Writable]]: true, [[Enumerable]]:true, [[Configurable]]:false is
    writable using simple assignment, 'A' is an Array Object
includes: [runTestCase.js]
---*/

function testcase() {
        var obj = [];

        Object.defineProperty(obj, "prop", {
            value: 2010,
            writable: true,
            enumerable: true,
            configurable: false
        });
        var verifyValue = (obj.prop === 2010);
        obj.prop = 1001;

        return verifyValue && obj.prop === 1001;
    }
runTestCase(testcase);
