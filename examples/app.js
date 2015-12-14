var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var all_1 = require('../ng2-material/all');
var all_2 = require('./all');
var example_1 = require('./example');
var http_1 = require('angular2/http');
var DemosApp = (function () {
    function DemosApp(http) {
        var _this = this;
        http.get('public/meta.json')
            .subscribe(function (res) {
            _this.meta = res.json();
            console.log(_this.meta);
        });
    }
    DemosApp = __decorate([
        angular2_1.Component({
            selector: 'demos-app'
        }),
        angular2_1.View({
            templateUrl: 'examples/app.html',
            directives: [all_1.MATERIAL_DIRECTIVES, example_1.default, all_2.DEMO_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], DemosApp);
    return DemosApp;
})();
exports.DemosApp = DemosApp;
angular2_1.bootstrap(DemosApp, [http_1.HTTP_PROVIDERS, all_1.MATERIAL_PROVIDERS]);
//# sourceMappingURL=app.js.map