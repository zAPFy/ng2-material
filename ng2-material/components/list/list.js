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
var core_1 = require("angular2/core");
var dom_adapter_1 = require('angular2/src/platform/dom/dom_adapter');
var core_2 = require("angular2/core");
var core_3 = require("angular2/core");
var core_4 = require("angular2/core");
var core_5 = require("angular2/core");
var core_6 = require("angular2/core");
var MdList = (function () {
    function MdList() {
    }
    MdList = __decorate([
        core_1.Directive({
            selector: 'md-list',
            host: {
                'role': 'list'
            }
        }), 
        __metadata('design:paramtypes', [])
    ], MdList);
    return MdList;
})();
exports.MdList = MdList;
var MdListItem = (function () {
    function MdListItem(_element, dcl, _href) {
        this._element = _element;
        this.dcl = dcl;
        this._href = _href;
        this.wrap = 'none';
        this._wrapped = false;
    }
    MdListItem.prototype.ngAfterViewInit = function () {
        var el = this._element.nativeElement;
        var secondaryItem = dom_adapter_1.DOM.querySelector(el, '.md-secondary');
        var hasProxiedElement;
        var proxyElement;
        var shouldButtonWrap = this._href;
        if (shouldButtonWrap) {
            this.wrapIn('button');
        }
        else {
            for (var i = 0, type; type = MdListItem.PROXIED_TYPES[i]; ++i) {
                if (proxyElement = dom_adapter_1.DOM.querySelector(el, type)) {
                    hasProxiedElement = true;
                    break;
                }
            }
            if (hasProxiedElement) {
                this.wrapIn('div');
            }
            else if (!dom_adapter_1.DOM.querySelector(el, '[md-button]:not(.md-secondary):not(.md-exclude)')) {
                dom_adapter_1.DOM.addClass(el, 'md-no-proxy');
            }
        }
        this.wrapSecondary();
        this.setupToggleAria();
    };
    MdListItem.prototype.setupToggleAria = function () {
        var toggleTypes = ['md-switch', 'md-checkbox'];
        var toggle;
        var el = this._element.nativeElement;
        for (var i = 0, toggleType; toggleType = toggleTypes[i]; ++i) {
            if (toggle = dom_adapter_1.DOM.querySelector(el, toggleType)) {
                if (!toggle.hasAttribute('aria-label')) {
                    var p = dom_adapter_1.DOM.querySelector(el, 'p');
                    if (!p)
                        return;
                    toggle.setAttribute('aria-label', 'Toggle ' + p.textContent);
                }
            }
        }
    };
    MdListItem.prototype.wrapIn = function (type) {
        this.wrap = type;
        var html = dom_adapter_1.DOM.getInnerHTML(this._element.nativeElement);
        var CompiledComponent = (function () {
            function CompiledComponent() {
            }
            CompiledComponent = __decorate([
                core_3.Component({}),
                core_4.View({ template: html }), 
                __metadata('design:paramtypes', [])
            ], CompiledComponent);
            return CompiledComponent;
        })();
        this.dcl.loadIntoLocation(CompiledComponent, this._element, this.wrap)
            .then(function (ref) {
            console.log("rendered component " + ref);
        });
    };
    MdListItem.prototype.wrapSecondary = function () {
    };
    MdListItem.prototype.copyAttributes = function (item, wrapper) {
    };
    MdListItem.prototype.isProxiedElement = function (el) {
    };
    MdListItem.prototype.isButton = function (el) {
        var nodeName = el.nodeName.toUpperCase();
        return nodeName == "MD-BUTTON" || nodeName == "BUTTON";
    };
    MdListItem.PROXIED_TYPES = ['md-checkbox', 'md-switch'];
    MdListItem = __decorate([
        core_3.Component({
            selector: 'md-list-item',
            host: {
                'role': 'listitem'
            },
            properties: ['wrap']
        }),
        core_4.View({
            templateUrl: 'ng2-material/components/list/list_item.html'
        }),
        __param(2, core_5.Attribute('href')), 
        __metadata('design:paramtypes', [core_2.ElementRef, core_6.DynamicComponentLoader, String])
    ], MdListItem);
    return MdListItem;
})();
exports.MdListItem = MdListItem;
var MdListItemButton = (function () {
    function MdListItemButton() {
        console.log("OWWWOOOOOO");
    }
    MdListItemButton = __decorate([
        core_3.Component({
            selector: 'md-list-item[md-list-item-type=button]',
            host: {
                'role': 'listitem'
            }
        }),
        core_4.View({
            template: "<ng-content>BOOOO</ng-content>"
        }), 
        __metadata('design:paramtypes', [])
    ], MdListItemButton);
    return MdListItemButton;
})();
function MdListController($scope, $element, $mdListInkRipple) {
}
//# sourceMappingURL=list.js.map