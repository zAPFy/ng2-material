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
var SidenavBasicUsage = (function () {
    function SidenavBasicUsage(sidenav, media) {
        this.sidenav = sidenav;
        this.media = media;
    }
    SidenavBasicUsage.prototype.hasMedia = function (breakSize) {
        return this.media.hasMedia(breakSize);
    };
    SidenavBasicUsage.prototype.open = function (name) {
        this.sidenav.show(name);
    };
    SidenavBasicUsage.prototype.close = function (name) {
        this.sidenav.hide(name);
    };
    SidenavBasicUsage = __decorate([
        core_1.Component({
            selector: 'sidenav-basic-usage',
            templateUrl: 'examples/components/sidenav/basic_usage.html',
            directives: [all_1.MATERIAL_DIRECTIVES],
            providers: [all_1.SidenavService]
        }), 
        __metadata('design:paramtypes', [all_1.SidenavService, all_1.Media])
    ], SidenavBasicUsage);
    return SidenavBasicUsage;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SidenavBasicUsage;
//# sourceMappingURL=basic_usage.js.map