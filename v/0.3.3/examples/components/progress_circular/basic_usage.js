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
var core_1 = require("angular2/core");
var all_1 = require("ng2-material/all");
var ProgressCircularBasicUsage = (function () {
    function ProgressCircularBasicUsage() {
        var _this = this;
        this.determinateValue = 30;
        this.deactivated = false;
        setInterval(function () {
            _this.determinateValue += 1;
            if (_this.determinateValue > 100) {
                _this.determinateValue = 30;
            }
        }, 100, 0, true);
    }
    ProgressCircularBasicUsage.prototype.toogleActivation = function () {
        this.deactivated = !this.deactivated;
        this.mode = this.deactivated ? 'indeterminate' : '';
    };
    ProgressCircularBasicUsage = __decorate([
        core_1.Component({
            selector: 'progress-circular-basic-usage',
            templateUrl: 'examples/components/progress_circular/basic_usage.html',
            styleUrls: ['examples/components/progress_circular/basic_usage.css'],
            directives: [all_1.MATERIAL_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], ProgressCircularBasicUsage);
    return ProgressCircularBasicUsage;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ProgressCircularBasicUsage;
//# sourceMappingURL=basic_usage.js.map