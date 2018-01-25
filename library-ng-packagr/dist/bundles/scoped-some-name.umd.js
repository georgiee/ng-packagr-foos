(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core'], factory) :
	(factory((global.scoped = global.scoped || {}, global.scoped['some-name'] = {}),global.ng.core));
}(this, (function (exports,core) { 'use strict';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TestModule = /** @class */ (function () {
    function TestModule() {
    }
    /**
     * @return {?}
     */
    TestModule.forRoot = function () {
        return {
            ngModule: TestModule
        };
    };
    return TestModule;
}());
TestModule.decorators = [
    { type: core.NgModule, args: [{},] },
];
/** @nocollapse */
TestModule.ctorParameters = function () { return []; };
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var FooComponent = /** @class */ (function () {
    function FooComponent() {
    }
    return FooComponent;
}());
FooComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'foo',
                template: "foo foo"
            },] },
];
/** @nocollapse */
FooComponent.ctorParameters = function () { return []; };
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var FooModule = /** @class */ (function () {
    function FooModule() {
    }
    return FooModule;
}());
FooModule.decorators = [
    { type: core.NgModule, args: [{
                declarations: [FooComponent],
                exports: [FooComponent]
            },] },
];
/** @nocollapse */
FooModule.ctorParameters = function () { return []; };

exports.TestModule = TestModule;
exports.FooModule = FooModule;
exports.FooComponent = FooComponent;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=scoped-some-name.umd.js.map
