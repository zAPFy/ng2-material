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
var util_1 = require('../../core/util/util');
var core_2 = require("angular2/core");
var dom_adapter_1 = require("angular2/src/platform/dom/dom_adapter");
var MdToolbar = (function () {
    function MdToolbar(scrollShrink, el) {
        this.scrollShrink = scrollShrink;
        this.el = el;
        this.mdShrinkSpeed = 0.5;
        this._debouncedContentScroll = null;
        this._debouncedUpdateHeight = null;
        this._content = null;
        this._toolbarHeight = 0;
        this._cancelScrollShrink = null;
        this._previousScrollTop = 0;
        this._currentY = 0;
        this._debouncedContentScroll = util_1.throttle(this.onContentScroll, 10, this);
        this._debouncedUpdateHeight = util_1.debounce(this.updateToolbarHeight, 5 * 1000, this);
    }
    MdToolbar.prototype.ngAfterViewInit = function () {
        this.disableScrollShrink();
        if (this.scrollShrink === null) {
            return;
        }
        this._content = dom_adapter_1.DOM.querySelector(dom_adapter_1.DOM.parentElement(this.el.nativeElement), 'md-content');
        if (!this._content) {
            return;
        }
        this._cancelScrollShrink = dom_adapter_1.DOM.onAndCancel(this._content, 'scroll', this._debouncedContentScroll);
        dom_adapter_1.DOM.setAttribute(this._content, 'scroll-shrink', 'true');
        util_1.rAF(this.updateToolbarHeight.bind(this));
    };
    MdToolbar.prototype.ngOnChanges = function (changes) {
        this.updateToolbarHeight();
    };
    MdToolbar.prototype.ngOnDestroy = function () {
        this.disableScrollShrink();
    };
    MdToolbar.prototype.disableScrollShrink = function () {
        if (this._cancelScrollShrink) {
            this._cancelScrollShrink();
            this._cancelScrollShrink = null;
        }
    };
    MdToolbar.prototype.updateToolbarHeight = function () {
        this._toolbarHeight = dom_adapter_1.DOM.getProperty(this.el.nativeElement, 'offsetHeight');
        var margin = (-this._toolbarHeight * this.mdShrinkSpeed) + 'px';
        dom_adapter_1.DOM.setStyle(this._content, "margin-top", margin);
        dom_adapter_1.DOM.setStyle(this._content, "margin-bottom", margin);
        this.onContentScroll();
    };
    MdToolbar.prototype.onContentScroll = function (e) {
        var _this = this;
        var scrollTop = e ? e.target.scrollTop : this._previousScrollTop;
        this._debouncedUpdateHeight();
        this._currentY = Math.min(this._toolbarHeight / this.mdShrinkSpeed, Math.max(0, this._currentY + scrollTop - this._previousScrollTop));
        dom_adapter_1.DOM.setStyle(this.el.nativeElement, 'transform', "translate3d(0," + -this._currentY * this.mdShrinkSpeed + "px,0)");
        dom_adapter_1.DOM.setStyle(this._content, 'transform', "translate3d(0," + (this._toolbarHeight - this._currentY) * this.mdShrinkSpeed + "px,0)");
        this._previousScrollTop = scrollTop;
        util_1.rAF(function () {
            var hasWhiteFrame = dom_adapter_1.DOM.hasClass(_this.el.nativeElement, 'md-whiteframe-z1');
            if (hasWhiteFrame && !_this._currentY) {
                dom_adapter_1.DOM.removeClass(_this.el.nativeElement, 'md-whiteframe-z1');
            }
            else if (!hasWhiteFrame && _this._currentY) {
                dom_adapter_1.DOM.addClass(_this.el.nativeElement, 'md-whiteframe-z1');
            }
        });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], MdToolbar.prototype, "mdShrinkSpeed", void 0);
    MdToolbar = __decorate([
        core_1.Directive({ selector: 'md-toolbar' }),
        __param(0, core_1.Attribute('md-scroll-shrink')), 
        __metadata('design:paramtypes', [Object, core_2.ElementRef])
    ], MdToolbar);
    return MdToolbar;
})();
exports.MdToolbar = MdToolbar;
//# sourceMappingURL=toolbar.js.map