var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('angular2/core');
var async_1 = require('angular2/src/facade/async');
var core_2 = require('angular2/core');
var MdInputContainer = (function () {
    function MdInputContainer(id) {
        this._input = null;
        this.inputHasValue = false;
        this.inputHasFocus = false;
    }
    MdInputContainer.prototype.ngAfterContentChecked = function () {
        if (this._input === null) {
            throw 'No <input> or <textarea> found inside of <md-input-container>';
        }
    };
    MdInputContainer.prototype.registerInput = function (input) {
        var _this = this;
        if (this._input !== null) {
            throw 'Only one text input is allowed per <md-input-container>.';
        }
        this._input = input;
        this.inputHasValue = input.value != '';
        async_1.ObservableWrapper.subscribe(input.mdChange, function (value) { _this.inputHasValue = value != ''; });
        async_1.ObservableWrapper.subscribe(input.mdFocusChange, function (hasFocus) { return _this.inputHasFocus = hasFocus; });
    };
    MdInputContainer = __decorate([
        core_1.Directive({
            selector: 'md-input-container',
            host: {
                '[class.md-input-has-value]': 'inputHasValue',
                '[class.md-input-focused]': 'inputHasFocus',
            }
        }),
        __param(0, core_1.Attribute('id')), 
        __metadata('design:paramtypes', [String])
    ], MdInputContainer);
    return MdInputContainer;
})();
exports.MdInputContainer = MdInputContainer;
var MdInput = (function () {
    function MdInput(value, container, id) {
        this.mdChange = new async_1.EventEmitter();
        this.mdFocusChange = new async_1.EventEmitter();
        this.value = value == null ? '' : value;
        container.registerInput(this);
    }
    MdInput.prototype.updateValue = function (event) {
        this.value = event.target.value;
        async_1.ObservableWrapper.callEmit(this.mdChange, this.value);
    };
    MdInput.prototype.setHasFocus = function (hasFocus) {
        async_1.ObservableWrapper.callEmit(this.mdFocusChange, hasFocus);
    };
    __decorate([
        core_2.Input(), 
        __metadata('design:type', String)
    ], MdInput.prototype, "value", void 0);
    __decorate([
        core_2.Output(), 
        __metadata('design:type', async_1.EventEmitter)
    ], MdInput.prototype, "mdChange", void 0);
    __decorate([
        core_2.Output(), 
        __metadata('design:type', async_1.EventEmitter)
    ], MdInput.prototype, "mdFocusChange", void 0);
    MdInput = __decorate([
        core_1.Directive({
            selector: 'input[md-input],input.md-input',
            providers: [MdInputContainer],
            host: {
                'class': 'md-input',
                '(input)': 'updateValue($event)',
                '(focus)': 'setHasFocus(true)',
                '(blur)': 'setHasFocus(false)'
            }
        }),
        __param(0, core_1.Attribute('value')),
        __param(1, core_1.SkipSelf()),
        __param(1, core_1.Host()),
        __param(2, core_1.Attribute('id')), 
        __metadata('design:paramtypes', [String, MdInputContainer, String])
    ], MdInput);
    return MdInput;
})();
exports.MdInput = MdInput;
//# sourceMappingURL=input.js.map