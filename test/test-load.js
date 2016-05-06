// Copyright IBM Corp. 2014. All Rights Reserved.
// Node module: generator-bacn
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

/*global describe, beforeEach, it*/
'use strict';

var assert = require('assert');

describe('bacn generator', function () {
    it('can be imported without blowing up', function () {
        var app = require('../app');
        assert(app !== undefined);
    });
});
