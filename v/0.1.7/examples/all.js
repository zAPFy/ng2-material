function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var lang_1 = require('angular2/src/facade/lang');
var basic_usage_1 = require('./components/card/basic_usage');
var inline_actions_1 = require('./components/card/inline_actions');
var basic_usage_2 = require('./components/button/basic_usage');
var action_buttons_1 = require('./components/card/action_buttons');
var basic_usage_3 = require('./components/dialog/basic_usage');
var basic_usage_4 = require('./components/toolbar/basic_usage');
var scroll_shrink_1 = require('./components/toolbar/scroll_shrink');
var basic_usage_5 = require('./components/progress_linear/basic_usage');
var basic_usage_6 = require('./components/progress_circular/basic_usage');
var basic_usage_7 = require('./components/radio/basic_usage');
var basic_usage_8 = require('./components/switch/basic_usage');
var dynamic_height_1 = require('./components/tabs/dynamic_height');
var dynamic_tabs_1 = require('./components/tabs/dynamic_tabs');
var basic_usage_9 = require("./components/checkbox/basic_usage");
var syncing_1 = require("./components/checkbox/syncing");
var basic_usage_10 = require("./components/list/basic_usage");
var basic_usage_11 = require("./components/input/basic_usage");
var form_builder_1 = require("./components/input/form_builder");
exports.DEMO_DIRECTIVES = lang_1.CONST_EXPR([
    basic_usage_1.default, inline_actions_1.default, action_buttons_1.default,
    basic_usage_2.default,
    basic_usage_9.default, syncing_1.default,
    basic_usage_3.default,
    basic_usage_11.default,
    form_builder_1.InputFormBuilder,
    basic_usage_10.default,
    basic_usage_7.default,
    basic_usage_8.default,
    dynamic_height_1.default,
    dynamic_tabs_1.default,
    basic_usage_4.default, scroll_shrink_1.default,
    basic_usage_5.default,
    basic_usage_6.default
]);
__export(require('./example'));
//# sourceMappingURL=all.js.map