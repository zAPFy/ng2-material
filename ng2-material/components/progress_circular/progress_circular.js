var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var progress_linear_1 = require('../progress_linear/progress_linear');
var MdProgressCircular = (function (_super) {
    __extends(MdProgressCircular, _super);
    function MdProgressCircular() {
        _super.apply(this, arguments);
    }
    MdProgressCircular = __decorate([
        core_1.Component({ selector: 'md-progress-circular' }),
        core_1.View({
            template: "\n    <div class=\"md-spinner-wrapper\">\n      <div class=\"md-inner\">\n        <div class=\"md-gap\"></div>\n        <div class=\"md-left\">\n          <div class=\"md-half-circle\"></div>\n        </div>\n        <div class=\"md-right\">\n          <div class=\"md-half-circle\"></div>\n        </div>\n      </div>\n    </div>",
            encapsulation: core_1.ViewEncapsulation.None
        }), 
        __metadata('design:paramtypes', [])
    ], MdProgressCircular);
    return MdProgressCircular;
})(progress_linear_1.MdProgressLinear);
exports.MdProgressCircular = MdProgressCircular;
//# sourceMappingURL=progress_circular.js.map