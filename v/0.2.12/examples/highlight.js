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
var dom_adapter_1 = require("angular2/src/platform/dom/dom_adapter");
var Highlight = (function () {
    function Highlight(element) {
        this.element = element;
        this._text = '';
        this._type = 'typescript';
        this.rendered = null;
    }
    Object.defineProperty(Highlight.prototype, "type", {
        get: function () {
            return this._type;
        },
        set: function (value) {
            this._type = value;
            this.render();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Highlight.prototype, "text", {
        get: function () {
            return this._text;
        },
        set: function (value) {
            this._text = value;
            this.render();
        },
        enumerable: true,
        configurable: true
    });
    Highlight.prototype.ngAfterContentInit = function () {
        if (this._text === '' && this.element) {
            this.text = dom_adapter_1.DOM.getText(this.element.nativeElement);
        }
    };
    Highlight.prototype.render = function () {
        var lines = this._text.split('\n');
        if (this._text.trim().length === 0 || lines.length === 0) {
            return;
        }
        lines = lines.filter(function (line) { return line.trim().length > 0; });
        var firstLineWhitespace = lines[0].match(/^\s*/)[0];
        var startingWhitespaceRegex = new RegExp('^' + firstLineWhitespace);
        lines = lines.map(function (line) {
            return line
                .replace(startingWhitespaceRegex, '')
                .replace(/\s+$/, '');
        });
        var highlightedCode = hljs.highlight(this._type, lines.join('\n'), true);
        highlightedCode.value = highlightedCode.value
            .replace(/=<span class="hljs-value">""<\/span>/gi, '')
            .replace('<head>', '')
            .replace('<head/>', '');
        this.rendered = highlightedCode.value;
    };
    __decorate([
        core_1.Input('type'), 
        __metadata('design:type', String)
    ], Highlight.prototype, "type", null);
    __decorate([
        core_1.Input('text'), 
        __metadata('design:type', String)
    ], Highlight.prototype, "text", null);
    Highlight = __decorate([
        core_1.Component({
            selector: 'highlight',
            properties: ['type', 'text'],
            template: "<pre><code class=\"highlight\" [innerHtml]=\"rendered || text\"><ng-content></ng-content></code></pre>",
            styleUrls: ['examples/highlight.css'],
            encapsulation: core_1.ViewEncapsulation.None
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], Highlight);
    return Highlight;
}());
exports.Highlight = Highlight;
//# sourceMappingURL=highlight.js.map