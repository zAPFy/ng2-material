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
var core_1 = require('angular2/core');
var all_1 = require('ng2-material/all');
var core_2 = require("angular2/core");
var dom_adapter_1 = require("angular2/src/platform/dom/dom_adapter");
var dialog_1 = require("ng2-material/components/dialog/dialog");
var media_1 = require("../../../ng2-material/core/util/media");
var DialogBasicUsage = (function () {
    function DialogBasicUsage(dialog, element) {
        this.dialog = dialog;
        this.element = element;
        this.status = '  ';
        this.customFullscreen = media_1.Media.hasMedia('xs') || media_1.Media.hasMedia('sm');
    }
    DialogBasicUsage.prototype.showAlert = function (ev) {
        var config = new dialog_1.MdDialogConfig()
            .parent(dom_adapter_1.DOM.query('#popupContainer'))
            .textContent('You can specify some description text in here')
            .title('This is an alert title')
            .ok('Got it!')
            .targetEvent(ev);
        this.dialog.open(dialog_1.MdDialogBasic, this.element, config);
    };
    ;
    DialogBasicUsage.prototype.showConfirm = function (ev) {
        var _this = this;
        var config = new dialog_1.MdDialogConfig()
            .textContent('All of the banks have agreed to forgive you your debts.')
            .clickOutsideToClose(false)
            .title('Would you like to delete your debt?')
            .ariaLabel('Lucky day')
            .ok('Please do it!')
            .cancel('Sounds like a scam')
            .targetEvent(ev);
        this.dialog.open(dialog_1.MdDialogBasic, this.element, config)
            .then(function (ref) {
            ref.whenClosed.then(function (result) {
                if (result) {
                    _this.status = 'You decided to get rid of your debt.';
                }
                else {
                    _this.status = 'You decided to keep your debt.';
                }
            });
        });
    };
    ;
    DialogBasicUsage.prototype.showAdvanced = function (ev) {
    };
    ;
    DialogBasicUsage.prototype.showTabDialog = function (ev) {
    };
    ;
    DialogBasicUsage = __decorate([
        core_1.Component({ selector: 'dialog-basic-usage' }),
        core_1.View({
            templateUrl: 'examples/components/dialog/basic_usage.html',
            styleUrls: ['examples/components/dialog/basic_usage.css'],
            directives: [all_1.MATERIAL_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [all_1.MdDialog, core_2.ElementRef])
    ], DialogBasicUsage);
    return DialogBasicUsage;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DialogBasicUsage;
//# sourceMappingURL=basic_usage.js.map