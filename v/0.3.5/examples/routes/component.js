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
var router_1 = require("angular2/router");
var components_1 = require("../services/components");
var all_1 = require("ng2-material/all");
var example_1 = require("../example");
var navigation_1 = require("../services/navigation");
var dom_adapter_1 = require("angular2/src/platform/dom/dom_adapter");
var async_1 = require("angular2/src/facade/async");
var ComponentPage = (function () {
    function ComponentPage(_components, _navigation, _sidenav, _routeParams) {
        this._components = _components;
        this._navigation = _navigation;
        this._sidenav = _sidenav;
        this._routeParams = _routeParams;
        this.value = {};
        this.next = null;
        this.previous = null;
    }
    ComponentPage.prototype.ngOnInit = function () {
        var _this = this;
        async_1.TimerWrapper.setTimeout(function () {
            _this._sidenav.hide('menu');
        }, 0);
        var id = this._routeParams.get('id');
        this._components.getComponent(id).then(function (c) {
            _this.value = c;
            dom_adapter_1.DOM.setTitle('ng2-material – ' + c.name);
            _this._navigation.currentTitle = c.name;
            _this._components.getNext(c).then(function (next) {
                _this._navigation.nextLink = _this._navigation.componentLink(next);
            });
            _this._components.getPrevious(c).then(function (previous) {
                _this._navigation.prevLink = _this._navigation.componentLink(previous);
            });
        });
    };
    ComponentPage = __decorate([
        core_1.Component({
            selector: 'component-page',
            template: "\n    <h1 class=\"examples-title\">Examples</h1>\n    <p class=\"examples-intro\" *ngIf=\"value.readme\" [innerHtml]=\"value.readme\"></p>\n\n    <example *ngFor=\"#demo of value.examples\" [model]=\"demo\"></example>",
            directives: [example_1.default, router_1.ROUTER_DIRECTIVES, all_1.MATERIAL_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [components_1.ComponentsService, navigation_1.NavigationService, all_1.SidenavService, router_1.RouteParams])
    ], ComponentPage);
    return ComponentPage;
}());
exports.ComponentPage = ComponentPage;
//# sourceMappingURL=component.js.map