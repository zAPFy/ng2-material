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
var browser_1 = require("angular2/platform/browser");
var router_1 = require("angular2/router");
var all_1 = require("../ng2-material/all");
var all_2 = require("./all");
var example_1 = require("./example");
var http_1 = require("angular2/http");
var index_1 = require("./routes/index");
var component_1 = require("./routes/component");
var components_1 = require("./services/components");
var navigation_1 = require("./services/navigation");
var version_1 = require("./services/version");
var sidenav_service_1 = require("ng2-material/components/sidenav/sidenav_service");
var media_1 = require("ng2-material/core/util/media");
var DemosApp = (function () {
    function DemosApp(http, navigation, media, router, appRef, _components, _sidenav) {
        var _this = this;
        this.navigation = navigation;
        this.media = media;
        this.router = router;
        this.appRef = appRef;
        this._components = _components;
        this._sidenav = _sidenav;
        this.fullPage = media_1.Media.hasMedia(DemosApp.SIDE_MENU_BREAKPOINT);
        this.site = 'Angular2 Material';
        this.components = [];
        this._subscription = null;
        var query = media_1.Media.getQuery(DemosApp.SIDE_MENU_BREAKPOINT);
        this._subscription = media.listen(query).onMatched.subscribe(function (mql) {
            _this.fullPage = mql.matches;
            _this.appRef.tick();
        });
        http.get('public/version.json')
            .subscribe(function (res) {
            _this.version = res.json().version;
        });
        this._components.getComponents()
            .then(function (comps) {
            _this.components = comps;
        });
    }
    DemosApp.prototype.ngOnDestroy = function () {
        this._subscription.unsubscribe();
    };
    DemosApp.prototype.showMenu = function (event) {
        this._sidenav.show('menu');
    };
    DemosApp.prototype.navigate = function (to) {
        this.router.navigate(to);
    };
    DemosApp.SIDE_MENU_BREAKPOINT = 'gt-md';
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], DemosApp.prototype, "fullPage", void 0);
    DemosApp = __decorate([
        router_1.RouteConfig([
            { path: '/', name: 'Index', component: index_1.IndexPage, useAsDefault: true },
            { path: '/components/:id', name: 'Component', component: component_1.ComponentPage }
        ]),
        core_1.Component({
            selector: 'demos-app',
            host: {
                '[class.push-menu]': 'fullPage'
            }
        }),
        core_1.View({
            templateUrl: 'examples/app.html',
            directives: [all_1.MATERIAL_DIRECTIVES, router_1.ROUTER_DIRECTIVES, example_1.default, all_2.DEMO_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [http_1.Http, navigation_1.NavigationService, media_1.Media, router_1.Router, core_1.ApplicationRef, components_1.ComponentsService, sidenav_service_1.SidenavService])
    ], DemosApp);
    return DemosApp;
})();
exports.DemosApp = DemosApp;
var appProviders = [
    http_1.HTTP_PROVIDERS, router_1.ROUTER_PROVIDERS, all_1.MATERIAL_PROVIDERS,
    components_1.ComponentsService, navigation_1.NavigationService, version_1.VersionService,
    core_1.bind(router_1.LocationStrategy).toClass(router_1.HashLocationStrategy)
];
if (window.location.href.indexOf('github.com') !== -1) {
    core_1.enableProdMode();
}
browser_1.bootstrap(DemosApp, appProviders);
//# sourceMappingURL=app.js.map