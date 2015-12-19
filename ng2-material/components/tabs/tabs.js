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
var lang_1 = require("angular2/src/facade/lang");
var ink_1 = require("../../core/util/ink");
var core_2 = require("angular2/core");
var MdTab = (function () {
    function MdTab(viewContainer, disabled, templateRef) {
        this.viewContainer = viewContainer;
        this.templateRef = templateRef;
        this.disabled = false;
        this._active = false;
        this.disabled = lang_1.isPresent(disabled);
    }
    Object.defineProperty(MdTab.prototype, "active", {
        get: function () {
            return this._active;
        },
        set: function (active) {
            if (active == this._active)
                return;
            this._active = active;
            if (active) {
                this.viewContainer.createEmbeddedView(this.templateRef);
            }
            else {
                this.viewContainer.remove(0);
            }
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], MdTab.prototype, "label", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], MdTab.prototype, "disabled", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean), 
        __metadata('design:paramtypes', [Boolean])
    ], MdTab.prototype, "active", null);
    MdTab = __decorate([
        core_1.Directive({
            selector: '[md-tab]'
        }),
        __param(1, core_1.Attribute('disabled')), 
        __metadata('design:paramtypes', [core_1.ViewContainerRef, String, core_1.TemplateRef])
    ], MdTab);
    return MdTab;
})();
exports.MdTab = MdTab;
var MdTabs = (function () {
    function MdTabs(noScroll) {
        this.mdNoScroll = false;
        this._selectedIndex = -1;
        this.mdNoScroll = lang_1.isPresent(noScroll);
    }
    Object.defineProperty(MdTabs.prototype, "selectedIndex", {
        get: function () {
            return this._selectedIndex;
        },
        set: function (value) {
            var panes = this.panes.toArray();
            if (value > 0 && value < panes.length) {
                this.select(panes[value]);
                this._selectedIndex = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdTabs.prototype, "selected", {
        get: function () {
            var result = null;
            this.panes.toArray().forEach(function (p) {
                if (p.active) {
                    result = p;
                }
            });
            return result;
        },
        enumerable: true,
        configurable: true
    });
    MdTabs.prototype.select = function (pane) {
        this.panes.toArray().forEach(function (p) { return p.active = p == pane; });
    };
    MdTabs.prototype.onTabClick = function (pane, event) {
        if (event && ink_1.Ink.canApply(event.target)) {
            ink_1.Ink.rippleEvent(event.target, event);
        }
        this.select(pane);
    };
    MdTabs.prototype.ngAfterContentInit = function () {
        var _this = this;
        setTimeout(function () {
            if (_this._selectedIndex === -1) {
                _this.select(_this.panes.toArray()[0]);
            }
        }, 0);
    };
    __decorate([
        core_1.ContentChildren(MdTab), 
        __metadata('design:type', core_1.QueryList)
    ], MdTabs.prototype, "panes", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], MdTabs.prototype, "mdNoScroll", void 0);
    MdTabs = __decorate([
        core_1.Component({
            selector: 'md-tabs',
            templateUrl: 'ng2-material/components/tabs/tabs.html',
            encapsulation: core_2.ViewEncapsulation.None
        }),
        __param(0, core_1.Attribute('mdNoScroll')), 
        __metadata('design:paramtypes', [String])
    ], MdTabs);
    return MdTabs;
})();
exports.MdTabs = MdTabs;
//# sourceMappingURL=tabs.js.map