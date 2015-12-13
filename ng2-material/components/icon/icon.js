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
var dom_adapter_1 = require('angular2/src/platform/dom/dom_adapter');
var MdIcon = (function () {
    function MdIcon(element) {
        dom_adapter_1.DOM.addClass(element.nativeElement, 'material-icons');
    }
    MdIcon = __decorate([
        core_1.Directive({
            selector: '[md-icon], .md-icon'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], MdIcon);
    return MdIcon;
}());
exports.MdIcon = MdIcon;
//# sourceMappingURL=icon.js.map