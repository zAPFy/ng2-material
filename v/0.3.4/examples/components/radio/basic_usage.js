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
var RadioBasicUsage = (function () {
    function RadioBasicUsage() {
        this.data = {
            group1: 'Banana',
            group2: '2',
            group3: 'avatar-1'
        };
        this.avatarData = [{
                id: 'public/images/avatars/avatar1.svg',
                title: 'avatar 1',
                value: 'avatar-1'
            }, {
                id: 'public/images/avatars/avatar2.svg',
                title: 'avatar 2',
                value: 'avatar-2'
            }, {
                id: 'public/images/avatars/avatar3.svg',
                title: 'avatar 3',
                value: 'avatar-3'
            }];
        this.radioData = [
            { label: '1', value: 1 },
            { label: '2', value: 2 },
            { label: '3', value: '3', isDisabled: true },
            { label: '4', value: '4' }
        ];
    }
    RadioBasicUsage.prototype.addItem = function () {
        var r = Math.ceil(Math.random() * 1000);
        this.radioData.push({ label: r, value: r });
    };
    RadioBasicUsage.prototype.removeItem = function () {
        this.radioData.pop();
    };
    RadioBasicUsage = __decorate([
        core_1.Component({
            selector: 'radio-basic-usage',
            templateUrl: 'examples/components/radio/basic_usage.html',
            styleUrls: ['examples/components/radio/basic_usage.css'],
            directives: [all_1.MATERIAL_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], RadioBasicUsage);
    return RadioBasicUsage;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = RadioBasicUsage;
//# sourceMappingURL=basic_usage.js.map