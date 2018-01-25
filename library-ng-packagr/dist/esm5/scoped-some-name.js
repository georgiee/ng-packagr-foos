import { Component, NgModule } from '@angular/core';
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
    { type: NgModule, args: [{},] },
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
    { type: Component, args: [{
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
    { type: NgModule, args: [{
                declarations: [FooComponent],
                exports: [FooComponent]
            },] },
];
/** @nocollapse */
FooModule.ctorParameters = function () { return []; };
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */
export { TestModule, FooModule, FooComponent };
//# sourceMappingURL=scoped-some-name.js.map
