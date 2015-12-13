"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var base_1 = require('../../base');
var ProgressLinearBasicUsage = (function () {
    function ProgressLinearBasicUsage() {
        var _this = this;
        this.modes = [];
        this.mode = 'query';
        this.activated = true;
        this.determinateValue = 30;
        this.determinateValue2 = 30;
        this._counter = 0;
        this._j = 0;
        setInterval(function () {
            _this.determinateValue += 1;
            _this.determinateValue2 += 1.5;
            if (_this.determinateValue > 100) {
                _this.determinateValue = 30;
            }
            if (_this.determinateValue2 > 100) {
                _this.determinateValue2 = 30;
            }
            if ((_this._j < 2) && !_this.modes[_this._j] && _this.activated) {
                _this.modes[_this._j] = (_this._j === 0) ? 'buffer' : 'query';
            }
            if (_this._counter++ % 4 === 0) {
                _this._j++;
            }
            if (_this._j === 2) {
                _this.mode = 'indeterminate';
            }
        }, 100, 0, true);
        setInterval(function () {
            _this.mode = (_this.mode === 'query' ? 'determinate' : 'query');
        }, 7200, 0, true);
    }
    ProgressLinearBasicUsage.prototype.toggleActivation = function () {
        if (!this.activated) {
            this.modes = [null, null, null, null, null];
        }
        if (this.activated) {
            this._j = this._counter = 0;
            this.determinateValue = 30;
            this.determinateValue2 = 30;
        }
        this.activated = !this.activated;
    };
    ;
    ProgressLinearBasicUsage = __decorate([
        core_1.Component({ selector: 'progress-linear-basic-usage' }),
        core_1.View({ templateUrl: 'examples/components/progress_linear/basic_usage.html', directives: [base_1.MATERIAL_DIRECTIVES] }), 
        __metadata('design:paramtypes', [])
    ], ProgressLinearBasicUsage);
    return ProgressLinearBasicUsage;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ProgressLinearBasicUsage;
//# sourceMappingURL=basic_usage.js.map