"use strict";
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
Object.defineProperty(exports, "__esModule", { value: true });
function startAndEnd(originalMethod, context) {
    function replacementMethod(...args) {
        console.log("start");
        const result = originalMethod.call(this, ...args);
        console.log("end");
        return result;
    }
    return replacementMethod;
}
function startAndEnd2(originalMethod, context) {
    function replacementMethod(...args) {
        console.log("start");
        const result = originalMethod.call(this, ...args);
        console.log("end");
        return result;
    }
    return replacementMethod;
}
function startAndEnd3(start = "start", end = "end") {
    return function RealDecorator(originalMethod, context) {
        function replacementMethod(...args) {
            console.log(context.name, start);
            const result = originalMethod.call(this, ...args);
            console.log(context.name, end);
            return result;
        }
        return replacementMethod;
    };
}
let A = (() => {
    var _a;
    let _instanceExtraInitializers = [];
    let _eat_decorators;
    let _work_decorators;
    let _sleep_decorators;
    return _a = class A {
            eat() {
                console.log("Eat");
            }
            work() {
                console.log("start");
                console.log("Work");
                console.log("end");
            }
            sleep() {
                console.log("start");
                console.log("Sleep");
                console.log("end");
            }
            constructor() {
                __runInitializers(this, _instanceExtraInitializers);
            }
        },
        (() => {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _eat_decorators = [startAndEnd];
            _work_decorators = [startAndEnd];
            _sleep_decorators = [startAndEnd];
            __esDecorate(_a, null, _eat_decorators, { kind: "method", name: "eat", static: false, private: false, access: { has: obj => "eat" in obj, get: obj => obj.eat }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(_a, null, _work_decorators, { kind: "method", name: "work", static: false, private: false, access: { has: obj => "work" in obj, get: obj => obj.work }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(_a, null, _sleep_decorators, { kind: "method", name: "sleep", static: false, private: false, access: { has: obj => "sleep" in obj, get: obj => obj.sleep }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
})();
