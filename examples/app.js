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
var router_1 = require('angular2/router');
var all_1 = require('../ng2-material/all');
var router_2 = require('angular2/router');
var all_2 = require('./all');
var example_1 = require('./example');
var http_1 = require('angular2/http');
var index_1 = require("./routes/index");
var component_1 = require("./routes/component");
var router_3 = require("angular2/router");
var router_4 = require("angular2/router");
var core_2 = require("angular2/core");
var components_1 = require("./services/components");
var navigation_1 = require("./services/navigation");
var version_1 = require("./services/version");
var DemosApp = (function () {
    function DemosApp(http, navigation) {
        var _this = this;
        this.navigation = navigation;
        this.site = 'Angular2 Material';
        http.get('public/version.json')
            .subscribe(function (res) {
            _this.version = res.json().version;
        });
    }
    DemosApp = __decorate([
        router_2.RouteConfig([
            { path: '/', name: 'Index', component: index_1.IndexPage, useAsDefault: true },
            { path: '/components/:id', name: 'Component', component: component_1.ComponentPage }
        ]),
        core_1.Component({
            selector: 'demos-app'
        }),
        core_1.View({
            templateUrl: 'examples/app.html',
            directives: [all_1.MATERIAL_DIRECTIVES, router_2.ROUTER_DIRECTIVES, example_1.default, all_2.DEMO_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [http_1.Http, navigation_1.NavigationService])
    ], DemosApp);
    return DemosApp;
})();
exports.DemosApp = DemosApp;
core_1.enableProdMode();
browser_1.bootstrap(DemosApp, [
    http_1.HTTP_PROVIDERS, router_1.ROUTER_PROVIDERS, all_1.MATERIAL_PROVIDERS,
    components_1.ComponentsService, navigation_1.NavigationService, version_1.VersionService,
    core_2.bind(router_4.LocationStrategy).toClass(router_3.HashLocationStrategy)
]);
//# sourceMappingURL=app.js.map