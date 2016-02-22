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
var http_1 = require("angular2/http");
var ComponentsService = (function () {
    function ComponentsService(http) {
        var _this = this;
        this.components = null;
        this._promise = new Promise(function (resolve) {
            http.get('public/meta.json')
                .subscribe(function (res) {
                _this.components = res.json();
                resolve();
            });
        });
    }
    ComponentsService.prototype.getComponents = function () {
        var _this = this;
        return this._promise.then(function () {
            return _this.components;
        });
    };
    ComponentsService.prototype.getComponent = function (id) {
        var _this = this;
        return this._promise.then(function () {
            var pick = null;
            _this.components.forEach(function (c) {
                if (c.id === id) {
                    pick = c;
                }
            });
            return pick;
        });
    };
    ComponentsService.prototype.getPrevious = function (component) {
        var _this = this;
        return this._promise.then(function () {
            var index = -1;
            _this.components.forEach(function (c, i) {
                if (c.id === component.id) {
                    index = i;
                }
            });
            if (index < 1) {
                index = _this.components.length;
            }
            return _this.components[index - 1];
        });
    };
    ComponentsService.prototype.getNext = function (component) {
        var _this = this;
        return this._promise.then(function () {
            var index = -1;
            _this.components.forEach(function (c, i) {
                if (c.id === component.id) {
                    index = i;
                }
            });
            if (index >= _this.components.length - 1) {
                index = -1;
            }
            return _this.components[index + 1];
        });
    };
    ComponentsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ComponentsService);
    return ComponentsService;
}());
exports.ComponentsService = ComponentsService;
//# sourceMappingURL=components.js.map