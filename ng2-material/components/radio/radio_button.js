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
var lang_1 = require('angular2/src/facade/lang');
var async_1 = require('angular2/src/facade/async');
var radio_dispatcher_1 = require('./radio_dispatcher');
var key_codes_1 = require('../../core/key_codes');
var core_2 = require('angular2/core');
var _uniqueIdCounter = 0;
var MdRadioGroup = (function () {
    function MdRadioGroup(tabindex, disabled, radioDispatcher) {
        this.name_ = "md-radio-group-" + _uniqueIdCounter++;
        this.radios_ = [];
        this.disabled_ = false;
        this.selectedRadioId = '';
        this.change = new async_1.EventEmitter();
        this.radioDispatcher = radioDispatcher;
        this.disabled = lang_1.isPresent(disabled);
        this.tabindex = lang_1.isPresent(tabindex) ? lang_1.NumberWrapper.parseInt(tabindex, 10) : 0;
    }
    Object.defineProperty(MdRadioGroup.prototype, "value", {
        get: function () {
            return this.value_;
        },
        set: function (value) {
            var button = this.getChildByValue(value);
            this.value_ = value;
            if (button) {
                this.selectedRadioId = button.id;
                this.activedescendant = button.id;
                button.checked = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    MdRadioGroup.prototype.getName = function () {
        return this.name_;
    };
    Object.defineProperty(MdRadioGroup.prototype, "disabled", {
        get: function () {
            return this.disabled_;
        },
        set: function (value) {
            this.disabled_ = lang_1.isPresent(value) && value !== false;
        },
        enumerable: true,
        configurable: true
    });
    MdRadioGroup.prototype.ngOnChanges = function (_) {
        var _this = this;
        this.disabled = lang_1.isPresent(this.disabled) && this.disabled !== false;
        if (lang_1.isPresent(this.value) && this.value !== '') {
            this.radioDispatcher.notify(this.name_);
            this.radios_.forEach(function (radio) {
                if (radio.value === _this.value) {
                    radio.checked = true;
                    _this.selectedRadioId = radio.id;
                    _this.activedescendant = radio.id;
                }
            });
        }
    };
    MdRadioGroup.prototype.updateValue = function (value, id) {
        this.value = value;
        this.selectedRadioId = id;
        this.activedescendant = id;
        async_1.ObservableWrapper.callEmit(this.change, value);
    };
    MdRadioGroup.prototype.register = function (radio) {
        this.radios_.push(radio);
    };
    MdRadioGroup.prototype.onKeydown = function (event) {
        if (this.disabled) {
            return;
        }
        switch (event.keyCode) {
            case key_codes_1.KeyCodes.UP:
                this.stepSelectedRadio(-1);
                event.preventDefault();
                break;
            case key_codes_1.KeyCodes.DOWN:
                this.stepSelectedRadio(1);
                event.preventDefault();
                break;
        }
    };
    MdRadioGroup.prototype.getSelectedRadioIndex = function () {
        for (var i = 0; i < this.radios_.length; i++) {
            if (this.radios_[i].id === this.selectedRadioId) {
                return i;
            }
        }
        return -1;
    };
    MdRadioGroup.prototype.getChildByValue = function (value) {
        for (var i = 0; i < this.radios_.length; i++) {
            if (this.radios_[i].value === value) {
                return this.radios_[i];
            }
        }
        return null;
    };
    MdRadioGroup.prototype.stepSelectedRadio = function (step) {
        var index = this.getSelectedRadioIndex() + step;
        if (index < 0 || index >= this.radios_.length) {
            return;
        }
        var radio = this.radios_[index];
        if (radio.disabled) {
            this.stepSelectedRadio(step + (step < 0 ? -1 : 1));
            return;
        }
        this.radioDispatcher.notify(this.name_);
        radio.checked = true;
        async_1.ObservableWrapper.callEmit(this.change, null);
        this.value = radio.value;
        this.selectedRadioId = radio.id;
        this.activedescendant = radio.id;
    };
    __decorate([
        core_2.Input('value'), 
        __metadata('design:type', Object)
    ], MdRadioGroup.prototype, "value_", void 0);
    __decorate([
        core_2.Output('valueChange'), 
        __metadata('design:type', async_1.EventEmitter)
    ], MdRadioGroup.prototype, "change", void 0);
    MdRadioGroup = __decorate([
        core_1.Component({
            selector: 'md-radio-group',
            inputs: ['disabled', 'value'],
            host: {
                'role': 'radiogroup',
                '[attr.aria-disabled]': 'disabled',
                '[attr.aria-activedescendant]': 'activedescendant',
                '(keydown)': 'onKeydown($event)',
                '[tabindex]': 'tabindex',
            }
        }),
        core_1.View({
            template: "<ng-content></ng-content>",
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __param(0, core_1.Attribute('tabindex')),
        __param(1, core_1.Attribute('disabled')), 
        __metadata('design:paramtypes', [String, String, radio_dispatcher_1.MdRadioDispatcher])
    ], MdRadioGroup);
    return MdRadioGroup;
})();
exports.MdRadioGroup = MdRadioGroup;
var MdRadioButton = (function () {
    function MdRadioButton(radioGroup, id, value, tabindex, radioDispatcher) {
        var _this = this;
        this.radioGroup = radioGroup;
        this.radioDispatcher = radioDispatcher;
        this.value = value ? value : null;
        this.checked = false;
        this.id = lang_1.isPresent(id) ? id : "md-radio-" + _uniqueIdCounter++;
        radioDispatcher.listen(function (name) {
            if (name === _this.name) {
                _this.checked = false;
            }
        });
        if (lang_1.isPresent(radioGroup)) {
            this.name = radioGroup.getName();
            this.radioGroup.register(this);
        }
        if (!lang_1.isPresent(radioGroup)) {
            this.tabindex = lang_1.isPresent(tabindex) ? lang_1.NumberWrapper.parseInt(tabindex, 10) : 0;
        }
        else {
            this.tabindex = -1;
        }
    }
    MdRadioButton.prototype.ngOnInit = function () {
        if (lang_1.isPresent(this.radioGroup)) {
            this.name = this.radioGroup.getName();
        }
    };
    MdRadioButton.prototype.isDisabled = function () {
        return this.disabled || (lang_1.isPresent(this.disabled) && lang_1.StringWrapper.equals(this.disabled, '')) ||
            (lang_1.isPresent(this.radioGroup) && this.radioGroup.disabled);
    };
    Object.defineProperty(MdRadioButton.prototype, "disabled", {
        get: function () {
            return this.disabled_ || (this.radioGroup && this.radioGroup.disabled);
        },
        set: function (value) {
            this.disabled_ = lang_1.isPresent(value) && value !== false;
        },
        enumerable: true,
        configurable: true
    });
    MdRadioButton.prototype.select = function (event) {
        if (this.isDisabled()) {
            event.stopPropagation();
            return;
        }
        this.radioDispatcher.notify(this.name);
        this.checked = true;
        if (lang_1.isPresent(this.radioGroup)) {
            this.radioGroup.updateValue(this.value, this.id);
        }
    };
    MdRadioButton.prototype.onKeydown = function (event) {
        if (event.keyCode === key_codes_1.KeyCodes.SPACE) {
            event.preventDefault();
            this.select(event);
        }
    };
    MdRadioButton = __decorate([
        core_1.Component({
            selector: 'md-radio-button',
            inputs: ['id', 'name', 'value', 'checked', 'disabled'],
            host: {
                'role': 'radio',
                '[id]': 'id',
                '[tabindex]': 'tabindex',
                '[attr.aria-checked]': 'checked',
                '[attr.aria-disabled]': 'disabled',
                '(keydown)': 'onKeydown($event)',
                '(click)': 'select($event)'
            }
        }),
        core_1.View({
            template: "\n    <!-- TODO(jelbourn): render the radio on either side of the content -->\n    <label role=\"radio\" class=\"md-radio-root\"\n        [class.md-radio-checked]=\"checked\">\n      <!-- The actual radio part of the control. -->\n      <div class=\"md-radio-container\">\n        <div class=\"md-radio-off\"></div>\n        <div class=\"md-radio-on\"></div>\n      </div>\n\n      <!-- The label for radio control. -->\n      <div class=\"md-radio-label\">\n          <ng-content></ng-content>\n      </div>\n    </label>",
            directives: [],
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __param(0, core_1.Optional()),
        __param(0, core_1.SkipSelf()),
        __param(0, core_1.Host()),
        __param(1, core_1.Attribute('id')),
        __param(2, core_1.Attribute('value')),
        __param(3, core_1.Attribute('tabindex')), 
        __metadata('design:paramtypes', [MdRadioGroup, String, String, String, radio_dispatcher_1.MdRadioDispatcher])
    ], MdRadioButton);
    return MdRadioButton;
})();
exports.MdRadioButton = MdRadioButton;
//# sourceMappingURL=radio_button.js.map