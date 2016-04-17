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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require("angular2/core");
var all_1 = require("./all");
var all_2 = require("ng2-material/all");
var http_1 = require("angular2/http");
var highlight_1 = require("./highlight");
var async_1 = require("angular2/src/facade/async");
var Example = (function () {
    function Example(_element, http, panes, dcl) {
        this._element = _element;
        this.http = http;
        this.panes = panes;
        this.dcl = dcl;
        this._model = null;
        this._reference = null;
        this._loaded = false;
        this.orderedFiles = [];
        this.showSource = false;
        this.showTabs = false;
        this.selected = 'html';
    }
    Object.defineProperty(Example.prototype, "model", {
        get: function () {
            return this._model;
        },
        set: function (value) {
            this._model = value;
            this.applyModel(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Example.prototype, "loaded", {
        get: function () {
            return this._loaded;
        },
        enumerable: true,
        configurable: true
    });
    Example.prototype.applyModel = function (model) {
        var _this = this;
        this.orderedFiles = [];
        this._loaded = false;
        if (model.template) {
            this.addFile(model.template, 'html');
        }
        if (model.styles) {
            this.addFile(model.styles, 'scss');
        }
        if (model.source) {
            this.addFile(model.source, 'typescript');
        }
        var template = "<" + model.component + "></" + model.component + ">";
        var CompiledComponent = (function () {
            function CompiledComponent() {
            }
            CompiledComponent = __decorate([
                core_1.Component({
                    selector: 'md-example-view',
                    template: template,
                    directives: [all_2.MATERIAL_DIRECTIVES, all_1.DEMO_DIRECTIVES]
                }), 
                __metadata('design:paramtypes', [])
            ], CompiledComponent);
            return CompiledComponent;
        }());
        this.dcl.loadIntoLocation(CompiledComponent, this._element, 'example')
            .then(function (ref) {
            if (_this._reference) {
                _this._reference.dispose();
            }
            _this._loaded = true;
            _this._reference = ref;
        });
    };
    Example.prototype.addFile = function (url, type) {
        var desc = {
            type: type,
            data: ''
        };
        this.http.get(url).subscribe(function (res) {
            desc.data = res.text();
        });
        this.orderedFiles.push(desc);
    };
    Example.prototype.toggleSource = function () {
        var _this = this;
        if (this.showSource) {
            this.showTabs = false;
            async_1.TimerWrapper.setTimeout(function () {
                _this.showSource = false;
            }, 500);
        }
        else {
            this.showSource = true;
            async_1.TimerWrapper.setTimeout(function () {
                _this.showTabs = true;
            }, 25);
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object), 
        __metadata('design:paramtypes', [Object])
    ], Example.prototype, "model", null);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], Example.prototype, "selected", void 0);
    Example = __decorate([
        core_1.Component({
            selector: 'example',
            properties: ['templateData', 'stylesData', 'sourceData', 'showSource', 'orderedFiles'],
            templateUrl: 'examples/example.html',
            directives: [all_2.MATERIAL_DIRECTIVES, all_1.DEMO_DIRECTIVES, highlight_1.Highlight]
        }),
        __param(2, core_1.Query(all_2.MdTabs)), 
        __metadata('design:paramtypes', [core_1.ElementRef, http_1.Http, core_1.QueryList, core_1.DynamicComponentLoader])
    ], Example);
    return Example;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Example;
//# sourceMappingURL=example.js.map