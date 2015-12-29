var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var lang_1 = require('angular2/src/facade/lang');
var core_1 = require('angular2/core');
var button_1 = require('./components/button/button');
__export(require('./components/button/button'));
var checkbox_1 = require('./components/checkbox/checkbox');
__export(require('./components/checkbox/checkbox'));
var content_1 = require('./components/content/content');
__export(require('./components/content/content'));
__export(require('./components/dialog/dialog'));
var dialog_2 = require('./components/dialog/dialog');
var divider_1 = require('./components/divider/divider');
__export(require('./components/divider/divider'));
var grid_list_1 = require('./components/grid_list/grid_list');
__export(require('./components/grid_list/grid_list'));
var icon_1 = require('./components/icon/icon');
__export(require('./components/icon/icon'));
var input_1 = require('./components/input/input');
__export(require('./components/input/input'));
var list_1 = require('./components/list/list');
__export(require('./components/list/list'));
var progress_linear_1 = require('./components/progress_linear/progress_linear');
__export(require('./components/progress_linear/progress_linear'));
var progress_circular_1 = require('./components/progress_circular/progress_circular');
__export(require('./components/progress_circular/progress_circular'));
var peekaboo_1 = require('./components/peekaboo/peekaboo');
__export(require('./components/peekaboo/peekaboo'));
var radio_button_1 = require('./components/radio/radio_button');
var radio_dispatcher_1 = require('./components/radio/radio_dispatcher');
__export(require('./components/radio/radio_button'));
__export(require('./components/radio/radio_dispatcher'));
var switch_1 = require('./components/switcher/switch');
__export(require('./components/switcher/switch'));
var toolbar_1 = require('./components/toolbar/toolbar');
__export(require('./components/toolbar/toolbar'));
var tabs_1 = require('./components/tabs/tabs');
var compiler_1 = require("angular2/compiler");
var media_1 = require("./core/util/media");
__export(require('./components/toolbar/toolbar'));
exports.MATERIAL_DIRECTIVES = lang_1.CONST_EXPR([
    button_1.MdAnchor, button_1.MdButton,
    checkbox_1.MdCheckbox,
    content_1.MdContent,
    divider_1.MdDivider,
    grid_list_1.MdGridList, grid_list_1.MdGridTile,
    icon_1.MdIcon,
    input_1.MdInput, input_1.MdInputContainer,
    list_1.MdList, list_1.MdListItem,
    peekaboo_1.MdPeekaboo,
    progress_linear_1.MdProgressLinear,
    progress_circular_1.MdProgressCircular,
    radio_button_1.MdRadioButton, radio_button_1.MdRadioGroup,
    switch_1.MdSwitch,
    toolbar_1.MdToolbar,
    tabs_1.MdTab, tabs_1.MdTabs
]);
var BASE_URL = null;
function setBaseUrl(url) {
    BASE_URL = url;
}
exports.setBaseUrl = setBaseUrl;
var MaterialTemplateResolver = (function (_super) {
    __extends(MaterialTemplateResolver, _super);
    function MaterialTemplateResolver() {
        _super.apply(this, arguments);
    }
    MaterialTemplateResolver.prototype.resolve = function (baseUrl, url) {
        if (!BASE_URL) {
            return _super.prototype.resolve.call(this, baseUrl, url);
        }
        if (baseUrl.startsWith(BASE_URL)) {
            baseUrl = baseUrl.substr(0, BASE_URL.length);
        }
        var result = _super.prototype.resolve.call(this, baseUrl, url);
        if (MaterialTemplateResolver.RESOURCE_MATCHER.test(result)) {
            return "" + BASE_URL + result;
        }
        return result;
    };
    MaterialTemplateResolver.RESOURCE_MATCHER = /^ng2-material\/.*?\.(html|css)$/;
    return MaterialTemplateResolver;
})(compiler_1.UrlResolver);
exports.MaterialTemplateResolver = MaterialTemplateResolver;
exports.MATERIAL_PROVIDERS = [
    dialog_2.MdDialog,
    media_1.Media,
    radio_dispatcher_1.MdRadioDispatcher,
    core_1.provide(compiler_1.UrlResolver, { useValue: new MaterialTemplateResolver() })
];
//# sourceMappingURL=all.js.map