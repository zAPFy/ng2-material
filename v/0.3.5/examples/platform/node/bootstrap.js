"use strict";
var angular2_universal_1 = require("angular2-universal");
var router_1 = require("angular2/router");
var all_1 = require("ng2-material/all");
var http_1 = require("angular2/http");
var components_1 = require("../../services/components");
var navigation_1 = require("../../services/navigation");
var version_1 = require("../../services/version");
var app_1 = require("../../app");
angular2_universal_1.bootstrap(app_1.DemosApp, [
    http_1.HTTP_PROVIDERS, router_1.ROUTER_PROVIDERS, all_1.MATERIAL_NODE_PROVIDERS,
    components_1.ComponentsService, navigation_1.NavigationService, version_1.VersionService
]);
//# sourceMappingURL=bootstrap.js.map