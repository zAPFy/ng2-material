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
var InputFormBuilder = (function () {
    function InputFormBuilder(fb) {
        this.projectForm = fb.group({
            'clientName': ['', common_1.Validators.required],
            'description': ['Nuclear Missile Defense System', common_1.Validators.compose([
                    common_1.Validators.required,
                    common_1.Validators.maxLength(30)
                ])],
            'clientEmail': ['', common_1.Validators.compose([
                    all_1.MdPatternValidator.inline('^.+@.+\..+$'),
                    common_1.Validators.required,
                    common_1.Validators.minLength(10),
                    common_1.Validators.maxLength(100)
                ])],
            'rate': [500, common_1.Validators.compose([
                    all_1.MdNumberRequiredValidator.inline(),
                    all_1.MdPatternValidator.inline('^1234$'),
                    all_1.MdMinValueValidator.inline(800),
                    all_1.MdMaxValueValidator.inline(4999)
                ])]
        });
    }
    InputFormBuilder = __decorate([
        core_1.Component({
            selector: 'input-form-builder',
            templateUrl: 'examples/components/input/form_builder.html',
            styleUrls: ['examples/components/input/form_builder.css'],
            directives: [all_1.MATERIAL_DIRECTIVES, common_1.FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [common_1.FormBuilder])
    ], InputFormBuilder);
    return InputFormBuilder;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = InputFormBuilder;
//# sourceMappingURL=form_builder.js.map