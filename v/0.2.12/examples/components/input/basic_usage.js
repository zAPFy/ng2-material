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
var common_1 = require("angular2/common");
var InputBasicUsage = (function () {
    function InputBasicUsage() {
        this.user = {
            title: 'Developer',
            email: 'ipsum@lorem.com',
            firstName: '',
            lastName: '',
            company: 'Google',
            address: '1600 Amphitheatre Pkwy',
            address2: '',
            city: 'Mountain View',
            state: 'CA',
            biography: 'Loves kittens, snowboarding, and can type at 130 WPM.\n\nAnd rumor has it she bouldered up Castle Craig!',
            postalCode: '94043'
        };
        this.states = [
            'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME',
            'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA',
            'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'
        ].map(function (state) {
            return { abbrev: state };
        });
    }
    InputBasicUsage = __decorate([
        core_1.Component({
            selector: 'input-basic-usage',
            templateUrl: 'examples/components/input/basic_usage.html',
            styleUrls: ['examples/components/input/basic_usage.css'],
            directives: [all_1.MATERIAL_DIRECTIVES, common_1.FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [])
    ], InputBasicUsage);
    return InputBasicUsage;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = InputBasicUsage;
//# sourceMappingURL=basic_usage.js.map