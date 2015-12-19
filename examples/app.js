var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var browser_1 = require('angular2/platform/browser');
var all_1 = require('../ng2-material/all');
var all_2 = require('./all');
var example_1 = require('./example');
var http_1 = require('angular2/http');
var url_resolver_1 = require('angular2/src/compiler/url_resolver');
var core_2 = require("angular2/core");
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
        core_1.Component({
            selector: 'demos-app'
        }),
        core_1.View({
            templateUrl: 'examples/app.html',
            directives: [all_1.MATERIAL_DIRECTIVES, example_1.default, all_2.DEMO_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], DemosApp);
    return DemosApp;
})();
exports.DemosApp = DemosApp;
var MaterialTemplateResolver = (function (_super) {
    __extends(MaterialTemplateResolver, _super);
    function MaterialTemplateResolver() {
        _super.apply(this, arguments);
    }
    MaterialTemplateResolver.prototype.resolve = function (baseUrl, url) {
        if (baseUrl !== './') {
            var foo = 2;
            foo++;
        }
        var w = window;
        if (w._mdTemplatesHack && baseUrl.startsWith(w._mdTemplatesHack)) {
            baseUrl = baseUrl.substr(0, w._mdTemplatesHack.length);
        }
        var result = _super.prototype.resolve.call(this, baseUrl, url);
        if (w._mdTemplatesHack && MaterialTemplateResolver.TEMPLATE_MATCHER.test(result)) {
            return "" + w._mdTemplatesHack + result;
        }
        return result;
    };
    MaterialTemplateResolver.TEMPLATE_MATCHER = /^ng2-material\/.*?\.(html|css)$/;
    return MaterialTemplateResolver;
})(url_resolver_1.UrlResolver);
exports.MaterialTemplateResolver = MaterialTemplateResolver;
browser_1.bootstrap(DemosApp, [http_1.HTTP_PROVIDERS, core_2.provide(url_resolver_1.UrlResolver, { useValue: new MaterialTemplateResolver() }), all_1.MATERIAL_PROVIDERS]);
//# sourceMappingURL=app.js.map