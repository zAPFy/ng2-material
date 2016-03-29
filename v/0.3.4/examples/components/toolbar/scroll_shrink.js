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
var ToolbarScrollShrink = (function () {
    function ToolbarScrollShrink() {
        this.title = 'My App Title';
        this.imagePath = 'public/images/avatars/avatar5.svg';
        this.todos = [];
        for (var i = 0; i < 15; i++) {
            this.todos.push({
                face: this.imagePath,
                what: "Brunch this weekend?",
                who: "Min Li Chan",
                notes: "I'll be in your neighborhood doing errands."
            });
        }
    }
    ToolbarScrollShrink = __decorate([
        core_1.Component({
            selector: 'toolbar-scroll-shrink',
            templateUrl: 'examples/components/toolbar/scroll_shrink.html',
            styleUrls: ['examples/components/toolbar/scroll_shrink.css'],
            directives: [all_1.MATERIAL_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], ToolbarScrollShrink);
    return ToolbarScrollShrink;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ToolbarScrollShrink;
//# sourceMappingURL=scroll_shrink.js.map