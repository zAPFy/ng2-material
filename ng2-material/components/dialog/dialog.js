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
var async_1 = require('angular2/src/facade/async');
var lang_1 = require('angular2/src/facade/lang');
var dom_adapter_1 = require('angular2/src/platform/dom/dom_adapter');
var key_codes_1 = require('../../core/key_codes');
var MdDialog = (function () {
    function MdDialog(loader) {
        this.componentLoader = loader;
    }
    MdDialog.prototype.open = function (type, elementRef, options) {
        var _this = this;
        if (options === void 0) { options = null; }
        var config = lang_1.isPresent(options) ? options : new MdDialogConfig();
        var dialogRef = new MdDialogRef();
        var bindings = core_1.Injector.resolve([core_1.provide(MdDialogRef, { useValue: dialogRef })]);
        var backdropRefPromise = this._openBackdrop(elementRef, bindings);
        return this.componentLoader.loadNextToLocation(MdDialogContainer, elementRef)
            .then(function (containerRef) {
            var dialogElement = containerRef.location.nativeElement;
            dom_adapter_1.DOM.appendChild(dom_adapter_1.DOM.query('body'), dialogElement);
            if (lang_1.isPresent(config.width)) {
                dom_adapter_1.DOM.setStyle(dialogElement, 'width', config.width);
            }
            if (lang_1.isPresent(config.height)) {
                dom_adapter_1.DOM.setStyle(dialogElement, 'height', config.height);
            }
            dialogRef.containerRef = containerRef;
            return _this.componentLoader.loadNextToLocation(type, containerRef.instance.contentRef, bindings)
                .then(function (contentRef) {
                dialogRef.contentRef = contentRef;
                containerRef.instance.dialogRef = dialogRef;
                backdropRefPromise.then(function (backdropRef) {
                    dialogRef.whenClosed.then(function (_) { backdropRef.dispose(); });
                });
                return dialogRef;
            });
        });
    };
    MdDialog.prototype._openBackdrop = function (elementRef, bindings) {
        return this.componentLoader.loadNextToLocation(MdBackdrop, elementRef, bindings)
            .then(function (componentRef) {
            var backdropElement = componentRef.location.nativeElement;
            dom_adapter_1.DOM.addClass(backdropElement, 'md-backdrop');
            dom_adapter_1.DOM.appendChild(dom_adapter_1.DOM.query('body'), backdropElement);
            return componentRef;
        });
    };
    MdDialog.prototype.alert = function (message, okMessage) {
        throw 'Not implemented';
    };
    MdDialog.prototype.confirm = function (message, okMessage, cancelMessage) {
        throw 'Not implemented';
    };
    MdDialog = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [core_1.DynamicComponentLoader])
    ], MdDialog);
    return MdDialog;
})();
exports.MdDialog = MdDialog;
var MdDialogRef = (function () {
    function MdDialogRef() {
        this._contentRef = null;
        this.containerRef = null;
        this.isClosed = false;
        this.contentRefDeferred = async_1.PromiseWrapper.completer();
        this.whenClosedDeferred = async_1.PromiseWrapper.completer();
    }
    Object.defineProperty(MdDialogRef.prototype, "contentRef", {
        set: function (value) {
            this._contentRef = value;
            this.contentRefDeferred.resolve(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdDialogRef.prototype, "instance", {
        get: function () {
            if (lang_1.isPresent(this._contentRef)) {
                return this._contentRef.instance;
            }
            throw "Cannot access dialog component instance *from* that component's constructor.";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdDialogRef.prototype, "whenClosed", {
        get: function () {
            return this.whenClosedDeferred.promise;
        },
        enumerable: true,
        configurable: true
    });
    MdDialogRef.prototype.close = function (result) {
        var _this = this;
        if (result === void 0) { result = null; }
        this.contentRefDeferred.promise.then(function (_) {
            if (!_this.isClosed) {
                _this.isClosed = true;
                _this.containerRef.dispose();
                _this.whenClosedDeferred.resolve(result);
            }
        });
    };
    return MdDialogRef;
})();
exports.MdDialogRef = MdDialogRef;
var MdDialogConfig = (function () {
    function MdDialogConfig() {
        this.width = null;
        this.height = null;
    }
    return MdDialogConfig;
})();
exports.MdDialogConfig = MdDialogConfig;
var MdDialogContainer = (function () {
    function MdDialogContainer() {
        this.contentRef = null;
        this.dialogRef = null;
    }
    MdDialogContainer.prototype.wrapFocus = function () {
    };
    MdDialogContainer.prototype.documentKeypress = function (event) {
        if (event.keyCode == key_codes_1.KeyCodes.ESCAPE) {
            this.dialogRef.close();
        }
    };
    MdDialogContainer = __decorate([
        core_1.Component({
            selector: 'md-dialog-container',
            host: {
                'class': 'md-dialog',
                'tabindex': '0',
                '(body:keydown)': 'documentKeypress($event)',
            },
        }),
        core_1.View({
            encapsulation: core_1.ViewEncapsulation.None,
            templateUrl: 'ng2-material/components/dialog/dialog.html',
            directives: [core_1.forwardRef(function () { return MdDialogContent; })]
        }), 
        __metadata('design:paramtypes', [])
    ], MdDialogContainer);
    return MdDialogContainer;
})();
var MdDialogContent = (function () {
    function MdDialogContent(dialogContainer, elementRef) {
        dialogContainer.contentRef = elementRef;
    }
    MdDialogContent = __decorate([
        core_1.Directive({
            selector: 'md-dialog-content',
        }),
        __param(0, core_1.Host()),
        __param(0, core_1.SkipSelf()), 
        __metadata('design:paramtypes', [MdDialogContainer, core_1.ElementRef])
    ], MdDialogContent);
    return MdDialogContent;
})();
var MdBackdrop = (function () {
    function MdBackdrop(dialogRef) {
        this.dialogRef = dialogRef;
    }
    MdBackdrop.prototype.onClick = function () {
        this.dialogRef.close();
    };
    MdBackdrop = __decorate([
        core_1.Component({
            selector: 'md-backdrop',
            host: {
                '(click)': 'onClick()',
            },
        }),
        core_1.View({ template: '', encapsulation: core_1.ViewEncapsulation.None }), 
        __metadata('design:paramtypes', [MdDialogRef])
    ], MdBackdrop);
    return MdBackdrop;
})();
//# sourceMappingURL=dialog.js.map