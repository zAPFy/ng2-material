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
var collection_1 = require('angular2/src/facade/collection');
var lang_1 = require('angular2/src/facade/lang');
var math_1 = require('angular2/src/facade/math');
var RowHeightMode = (function () {
    function RowHeightMode() {
    }
    RowHeightMode.FIT = 'fit';
    RowHeightMode.FIXED = 'fixed';
    RowHeightMode.RATIO = 'ratio';
    return RowHeightMode;
})();
var MdGridList = (function () {
    function MdGridList() {
        this.tiles = [];
        this.rows = 0;
    }
    Object.defineProperty(MdGridList.prototype, "cols", {
        get: function () {
            return this._cols;
        },
        set: function (value) {
            this._cols = lang_1.isString(value) ? lang_1.NumberWrapper.parseInt(value, 10) : value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdGridList.prototype, "rowHeight", {
        set: function (value) {
            if (value === RowHeightMode.FIT) {
                this.rowHeightMode = RowHeightMode.FIT;
            }
            else if (lang_1.StringWrapper.contains(value, ':')) {
                var ratioParts = value.split(':');
                if (ratioParts.length !== 2) {
                    throw "md-grid-list: invalid ratio given for row-height: \"" + value + "\"";
                }
                this.rowHeightMode = RowHeightMode.RATIO;
                this.rowHeightRatio =
                    lang_1.NumberWrapper.parseFloat(ratioParts[0]) / lang_1.NumberWrapper.parseFloat(ratioParts[1]);
            }
            else {
                this.rowHeightMode = RowHeightMode.FIXED;
                this.fixedRowHeight = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    MdGridList.prototype.ngAfterContentChecked = function () {
        this.layoutTiles();
    };
    MdGridList.prototype.layoutTiles = function () {
        var tracker = new TileCoordinator(this.cols, this.tiles);
        this.rows = tracker.rowCount;
        for (var i = 0; i < this.tiles.length; i++) {
            var pos = tracker.positions[i];
            var tile = this.tiles[i];
            tile.style = this.getTileStyle(tile, pos.row, pos.col);
        }
    };
    MdGridList.prototype.addTile = function (tile) {
        this.tiles.push(tile);
    };
    MdGridList.prototype.removeTile = function (tile) {
        collection_1.ListWrapper.remove(this.tiles, tile);
    };
    MdGridList.prototype.getBaseTileSize = function (sizePercent, gutterFraction) {
        return "(" + sizePercent + "% - ( " + this.gutterSize + " * " + gutterFraction + " ))";
    };
    MdGridList.prototype.getTilePosition = function (baseSize, offset) {
        return "calc( (" + baseSize + " + " + this.gutterSize + ") * " + offset + " )";
    };
    MdGridList.prototype.getTileSize = function (baseSize, span) {
        return "calc( (" + baseSize + " * " + span + ") + (" + (span - 1) + " * " + this.gutterSize + ") )";
    };
    MdGridList.prototype.getTileStyle = function (tile, rowIndex, colIndex) {
        var percentWidthPerTile = 100 / this.cols;
        var gutterWidthFractionPerTile = (this.cols - 1) / this.cols;
        var baseTileWidth = this.getBaseTileSize(percentWidthPerTile, gutterWidthFractionPerTile);
        var tileStyle = new TileStyle();
        tileStyle.left = this.getTilePosition(baseTileWidth, colIndex);
        tileStyle.width = this.getTileSize(baseTileWidth, tile.colspan);
        if (this.rowHeightMode == RowHeightMode.FIXED) {
            tileStyle.top = this.getTilePosition(this.fixedRowHeight, rowIndex);
            tileStyle.height = this.getTileSize(this.fixedRowHeight, tile.rowspan);
        }
        if (this.rowHeightMode == RowHeightMode.RATIO) {
            var percentHeightPerTile = percentWidthPerTile / this.rowHeightRatio;
            var baseTileHeight = this.getBaseTileSize(percentHeightPerTile, gutterWidthFractionPerTile);
            tileStyle.marginTop = this.getTilePosition(baseTileHeight, rowIndex);
            tileStyle.paddingTop = this.getTileSize(baseTileHeight, tile.rowspan);
        }
        if (this.rowHeightMode == RowHeightMode.FIT) {
            var percentHeightPerTile = 100 / this.cols;
            var gutterHeightFractionPerTile = (this.rows - 1) / this.rows;
            var baseTileHeight = this.getBaseTileSize(percentHeightPerTile, gutterHeightFractionPerTile);
            tileStyle.top = this.getTilePosition(baseTileHeight, rowIndex);
            tileStyle.height = this.getTileSize(baseTileHeight, tile.rowspan);
        }
        return tileStyle;
    };
    MdGridList = __decorate([
        core_1.Component({ selector: 'md-grid-list', inputs: ['cols', 'rowHeight', 'gutterSize'] }),
        core_1.View({
            template: "\n    <div class=\"md-grid-list\">\n      <ng-content></ng-content>\n    </div>",
            encapsulation: core_1.ViewEncapsulation.None
        }), 
        __metadata('design:paramtypes', [])
    ], MdGridList);
    return MdGridList;
})();
exports.MdGridList = MdGridList;
var MdGridTile = (function () {
    function MdGridTile(gridList) {
        this.gridList = gridList;
        this.rowspan = 1;
        this.colspan = 1;
        this.style = new TileStyle();
    }
    Object.defineProperty(MdGridTile.prototype, "rowspan", {
        get: function () {
            return this._rowspan;
        },
        set: function (value) {
            this._rowspan = lang_1.isString(value) ? lang_1.NumberWrapper.parseInt(value, 10) : value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdGridTile.prototype, "colspan", {
        get: function () {
            return this._colspan;
        },
        set: function (value) {
            this._colspan = lang_1.isString(value) ? lang_1.NumberWrapper.parseInt(value, 10) : value;
        },
        enumerable: true,
        configurable: true
    });
    MdGridTile.prototype.ngOnChanges = function (_) {
        if (!this.isRegisteredWithGridList) {
            this.gridList.addTile(this);
            this.isRegisteredWithGridList = true;
        }
    };
    MdGridTile.prototype.ngOnDestroy = function () {
        this.gridList.removeTile(this);
    };
    MdGridTile = __decorate([
        core_1.Component({
            selector: 'md-grid-tile',
            inputs: ['rowspan', 'colspan'],
            host: {
                'role': 'listitem',
                '[style.height]': 'style.height',
                '[style.width]': 'style.width',
                '[style.top]': 'style.top',
                '[style.left]': 'style.left',
                '[style.marginTop]': 'style.marginTop',
                '[style.paddingTop]': 'style.paddingTop',
            }
        }),
        core_1.View({
            template: "\n    <style>@import \"ng2-material/components/grid_list/grid-list.css\";</style>\n    <figure>\n      <ng-content></ng-content>\n    </figure>",
            encapsulation: core_1.ViewEncapsulation.None
        }),
        __param(0, core_1.SkipSelf()),
        __param(0, core_1.Host()), 
        __metadata('design:paramtypes', [MdGridList])
    ], MdGridTile);
    return MdGridTile;
})();
exports.MdGridTile = MdGridTile;
var TileCoordinator = (function () {
    function TileCoordinator(numColumns, tiles) {
        var _this = this;
        this.columnIndex = 0;
        this.rowIndex = 0;
        this.tracker = collection_1.ListWrapper.createFixedSize(numColumns);
        collection_1.ListWrapper.fill(this.tracker, 0);
        this.positions = tiles.map(function (tile) { return _this._trackTile(tile); });
    }
    Object.defineProperty(TileCoordinator.prototype, "rowCount", {
        get: function () {
            return this.rowIndex + 1;
        },
        enumerable: true,
        configurable: true
    });
    TileCoordinator.prototype._trackTile = function (tile) {
        if (tile.colspan > this.tracker.length) {
            throw "Tile with colspan " + tile.colspan + " is wider\n          than grid with cols=\"" + this.tracker.length + "\".";
        }
        var gapStartIndex = -1;
        var gapEndIndex = -1;
        do {
            if (this.columnIndex + tile.colspan > this.tracker.length) {
                this._nextRow();
                continue;
            }
            gapStartIndex = collection_1.ListWrapper.indexOf(this.tracker, 0, this.columnIndex);
            if (gapStartIndex == -1) {
                this._nextRow();
                continue;
            }
            gapEndIndex = this._findGapEndIndex(gapStartIndex);
            this.columnIndex = gapStartIndex + 1;
        } while (gapEndIndex - gapStartIndex < tile.colspan);
        this._markTilePosition(gapStartIndex, tile);
        this.columnIndex = gapStartIndex + tile.colspan;
        return new Position(this.rowIndex, gapStartIndex);
    };
    TileCoordinator.prototype._nextRow = function () {
        this.columnIndex = 0;
        this.rowIndex++;
        for (var i = 0; i < this.tracker.length; i++) {
            this.tracker[i] = math_1.Math.max(0, this.tracker[i] - 1);
        }
    };
    TileCoordinator.prototype._findGapEndIndex = function (gapStartIndex) {
        for (var i = gapStartIndex + 1; i < this.tracker.length; i++) {
            if (this.tracker[i] != 0) {
                return i;
            }
        }
        return this.tracker.length;
    };
    TileCoordinator.prototype._markTilePosition = function (start, tile) {
        for (var i = 0; i < tile.colspan; i++) {
            this.tracker[start + i] = tile.rowspan;
        }
    };
    return TileCoordinator;
})();
var Position = (function () {
    function Position(row, col) {
        this.row = row;
        this.col = col;
    }
    return Position;
})();
var TileStyle = (function () {
    function TileStyle() {
    }
    return TileStyle;
})();
exports.TileStyle = TileStyle;
//# sourceMappingURL=grid_list.js.map