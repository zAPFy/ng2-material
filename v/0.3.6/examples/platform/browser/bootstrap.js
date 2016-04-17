"use strict";
var core_1 = require("angular2/core");
var browser_1 = require("angular2/platform/browser");
var router_1 = require("angular2/router");
var all_1 = require("ng2-material/all");
var http_1 = require("angular2/http");
var components_1 = require("../../services/components");
var navigation_1 = require("../../services/navigation");
var version_1 = require("../../services/version");
var app_1 = require("../../app");
if (window.location.href.indexOf('github.com') !== -1) {
    core_1.enableProdMode();
}
browser_1.bootstrap(app_1.DemosApp, [
    http_1.HTTP_PROVIDERS, router_1.ROUTER_PROVIDERS, all_1.MATERIAL_BROWSER_PROVIDERS,
    components_1.ComponentsService, navigation_1.NavigationService, version_1.VersionService,
    core_1.bind(router_1.LocationStrategy).toClass(router_1.HashLocationStrategy)
]);
//# sourceMappingURL=bootstrap.js.map