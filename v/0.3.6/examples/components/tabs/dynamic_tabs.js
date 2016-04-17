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
var TabsDynamicTabs = (function () {
    function TabsDynamicTabs() {
        this.tabs = [
            { title: 'One', content: "You can add tabs dynamically by filling in the form below this." },
            { title: 'Two', content: "You can bind the selected tab via the selected attribute on the md-tabs element." },
            { title: 'Three', content: "If you look at the source, you're using tabs to look at a demo for tabs. Recursion!" }
        ];
        this.selected = null;
        this.previous = null;
        this._selectedIndex = 1;
    }
    Object.defineProperty(TabsDynamicTabs.prototype, "selectedIndex", {
        get: function () {
            return this._selectedIndex;
        },
        set: function (value) {
            this.previous = this.selected;
            this.selected = this.tabs[value];
            this._selectedIndex = value;
        },
        enumerable: true,
        configurable: true
    });
    TabsDynamicTabs.prototype.addTab = function (title, view) {
        view = view || title + " Content View";
        this.tabs.push({ title: title, content: view, disabled: false });
    };
    TabsDynamicTabs.prototype.removeTab = function (tab) {
        var index = this.tabs.indexOf(tab);
        this.tabs.splice(index, 1);
        this.selectedIndex = Math.min(index, this.tabs.length - 1);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number), 
        __metadata('design:paramtypes', [Number])
    ], TabsDynamicTabs.prototype, "selectedIndex", null);
    TabsDynamicTabs = __decorate([
        core_1.Component({
            selector: 'tabs-dynamic-tabs',
            properties: ['selectedIndex'],
            templateUrl: 'examples/components/tabs/dynamic_tabs.html',
            styleUrls: ['examples/components/tabs/dynamic_tabs.css'],
            encapsulation: core_1.ViewEncapsulation.None,
            directives: [all_1.MATERIAL_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], TabsDynamicTabs);
    return TabsDynamicTabs;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = TabsDynamicTabs;
//# sourceMappingURL=dynamic_tabs.js.map