declare module 'ng2-material/core/util/animate' {
	/**
	 * Provide an API for animating elements with CSS transitions
	 */
	export class Animate {
	    /**
	     * Look up the transition event name for the browser type and cache it.
	     */
	    static TRANSITION_EVENT: string;
	    static enter(el: HTMLElement, cssClass: string): Promise<void>;
	    static leave(el: HTMLElement, cssClass: string): Promise<void>;
	    /**
	     * Get the duration of any transitions being applied to the given element.
	     *
	     * Based on: https://gist.github.com/snorpey/5323028
	     * @param element The element to query
	     * @param includeDelay Include any specified transition-delay value.
	     * @returns {number}
	     */
	    static getTransitionDuration(element: HTMLElement, includeDelay?: boolean): any;
	    static setTransitionDuration(element: HTMLElement, delayMs: number): void;
	    static whichTransitionEvent(): string;
	    static animateStyles(element: HTMLElement, styles: {
	        [style: string]: string | number;
	    }, durationMs: number): Promise<void>;
	    /**
	     * Set CSS styles immediately by turning off transition duration and restoring it afterward
	     */
	    static setStyles(element: HTMLElement, styles: {
	        [style: string]: string | number;
	    }): Promise<void>;
	}

}
declare module 'ng2-material/core/util/ink' {
	/**
	 * Create ink ripples on elements in the page.
	 */
	export class Ink {
	    /**
	     * Determine if ink can be applied to a given element.
	     * @param element The element to check
	     */
	    static canApply(element: HTMLElement): boolean;
	    /**
	     * Ink ripples are equal in height/width, so get the scalar size
	     * of the container.
	     *
	     * @param fit To fit the ripple to the element
	     * @param width Width of the ripple container
	     * @param height Height of the ripple container
	     * @returns {number}
	     */
	    static getSize(fit: boolean, width: number, height: number): number;
	    /**
	     * Apply an ink ripple to an element at the given position.
	     *
	     * @param element The element to apply a ripple to
	     * @param x The x position inside the element for the ripple to originate from
	     * @param y The y position inside the element for the ripple to originate from
	     * @returns {Promise<void>} A promise that resolves when the ripple has faded
	     */
	    static ripple(element: HTMLElement, x: number, y: number): Promise<void>;
	    /**
	     * Start an ink ripple from a MouseEvent.
	     *
	     * @param element The element to ripple on.
	     * @param event The mouse event to indicate where the ripple should start at
	     * @returns {Promise<void>} A promise that resolves when the ripple has faded.
	     */
	    static rippleEvent(element: HTMLElement, event: MouseEvent): Promise<void>;
	}

}
declare module 'ng2-material/components/button/button' {
	import { OnChanges } from 'angular2/core';
	import { ElementRef } from "angular2/core";
	export class MdButton {
	    private _element;
	    /** Whether a mousedown has occured on this element in the last 100ms. */
	    isMouseDown: boolean;
	    /** Whether the button has focus from the keyboard (not the mouse). Used for class binding. */
	    isKeyboardFocused: boolean;
	    constructor(_element: ElementRef);
	    onMousedown(event: any): void;
	    onFocus(): void;
	    onBlur(): void;
	}
	export class MdAnchor extends MdButton implements OnChanges {
	    tabIndex: number;
	    disabled_: boolean;
	    disabled: boolean;
	    onClick(event: any): void;
	    /** Invoked when a change is detected. */
	    ngOnChanges(_: any): void;
	    /** Gets the aria-disabled value for the component, which must be a string for Dart. */
	    isAriaDisabled: string;
	}

}
declare module 'ng2-material/core/key_codes' {
	export class KeyCodes {
	    static ESCAPE: number;
	    static SPACE: number;
	    static UP: number;
	    static DOWN: number;
	}

}
declare module 'ng2-material/components/checkbox/checkbox' {
	import { EventEmitter } from 'angular2/core';
	export class MdCheckbox {
	    checkedChange: EventEmitter<boolean>;
	    /** Whether this checkbox is checked. */
	    checked: boolean;
	    /** Whether this checkbox is disabled. */
	    disabled_: boolean;
	    /** Setter for tabindex */
	    tabindex: number;
	    constructor(tabindex: string);
	    disabled: boolean;
	    onKeydown(event: KeyboardEvent): void;
	    toggle(event: any): void;
	}

}
declare module 'ng2-material/components/content/content' {
	/**
	 * @name mdContent
	 *
	 * @description
	 * The `<md-content>` directive is a container element useful for scrollable content
	 *
	 * @usage
	 *
	 * - Add the `[layout-padding]` attribute to make the content padded.
	 *
	 * <hljs lang="html">
	 *  <md-content layout-padding>
	 *      Lorem ipsum dolor sit amet, ne quod novum mei.
	 *  </md-content>
	 * </hljs>
	 *
	 */
	export class MdContent {
	}

}
declare module 'ng2-material/components/dialog/dialog' {
	import { ComponentRef, DynamicComponentLoader, ElementRef, ResolvedProvider } from 'angular2/core';
	import { Promise } from 'angular2/src/facade/async';
	import { Type } from 'angular2/src/facade/lang';
	/**
	 * Service for opening modal dialogs.
	 */
	export class MdDialog {
	    componentLoader: DynamicComponentLoader;
	    constructor(loader: DynamicComponentLoader);
	    /**
	     * Opens a modal dialog.
	     * @param type The component to open.
	     * @param elementRef The logical location into which the component will be opened.
	     * @param options
	     * @returns Promise for a reference to the dialog.
	     */
	    open(type: Type, elementRef: ElementRef, options?: MdDialogConfig): Promise<MdDialogRef>;
	    /** Loads the dialog backdrop (transparent overlay over the rest of the page). */
	    _openBackdrop(elementRef: ElementRef, bindings: ResolvedProvider[]): Promise<ComponentRef>;
	    alert(message: string, okMessage: string): Promise<any>;
	    confirm(message: string, okMessage: string, cancelMessage: string): Promise<any>;
	}
	/**
	 * Reference to an opened dialog.
	 */
	export class MdDialogRef {
	    containerRef: ComponentRef;
	    _contentRef: ComponentRef;
	    isClosed: boolean;
	    whenClosedDeferred: any;
	    contentRefDeferred: any;
	    constructor();
	    contentRef: ComponentRef;
	    /** Gets the component instance for the content of the dialog. */
	    instance: any;
	    /** Gets a promise that is resolved when the dialog is closed. */
	    whenClosed: Promise<any>;
	    /** Closes the dialog. This operation is asynchronous. */
	    close(result?: any): void;
	}
	/** Confiuration for a dialog to be opened. */
	export class MdDialogConfig {
	    width: string;
	    height: string;
	    constructor();
	}

}
declare module 'ng2-material/components/divider/divider' {
	/**
	 * @name mdDivider
	 *
	 * @description
	 * Dividers group and separate content within lists and page layouts using strong visual and spatial distinctions. This divider is a thin rule, lightweight enough to not distract the user from content.
	 *
	 * @param {boolean=} md-inset Add this attribute to activate the inset divider style.
	 * @usage
	 * <hljs lang="html">
	 * <md-divider></md-divider>
	 *
	 * <md-divider md-inset></md-divider>
	 * </hljs>
	 *
	 */
	export class MdDivider {
	}

}
declare module 'ng2-material/components/grid_list/grid_list' {
	import { OnChanges, OnDestroy, AfterContentChecked } from 'angular2/core';
	export class MdGridList implements AfterContentChecked {
	    /** Array of tiles that are being rendered. */
	    tiles: MdGridTile[];
	    /** Number of columns being rendered. */
	    _cols: number;
	    /** Number of rows being rendered (computed). */
	    rows: number;
	    /** Mode used to determine row heights. See RowHeightMode. */
	    rowHeightMode: string;
	    /** Fixed row height, as given by the user. Only used for 'fixed' mode. */
	    fixedRowHeight: string;
	    /** Ratio width:height given by user to determine row height. Only used for 'ratio' mode.*/
	    rowHeightRatio: number;
	    /** The amount of space between tiles. This will be something like '5px' or '2em'. */
	    gutterSize: string;
	    constructor();
	    cols: any;
	    /** Set internal representation of row height from the user-provided value. */
	    rowHeight: any;
	    ngAfterContentChecked(): void;
	    /** Computes and applies the size and position for all children grid tiles. */
	    layoutTiles(): void;
	    /**
	     * Adds a tile to the grid-list.
	     * @param tile
	     */
	    addTile(tile: MdGridTile): void;
	    /**
	     * Removes a tile from the grid-list.
	     * @param tile
	     */
	    removeTile(tile: MdGridTile): void;
	    /**
	     * Computes the amount of space a single 1x1 tile would take up (width or height).
	     * Used as a basis for other calculations.
	     * @param sizePercent Percent of the total grid-list space that one 1x1 tile would take up.
	     * @param gutterFraction Fraction of the gutter size taken up by one 1x1 tile.
	     * @return The size of a 1x1 tile as an expression that can be evaluated via CSS calc().
	     */
	    getBaseTileSize(sizePercent: number, gutterFraction: number): string;
	    /**
	     * Gets The horizontal or vertical position of a tile, e.g., the 'top' or 'left' property value.
	     * @param offset Number of tiles that have already been rendered in the row/column.
	     * @param baseSize Base size of a 1x1 tile (as computed in getBaseTileSize).
	     * @return Position of the tile as a CSS calc() expression.
	     */
	    getTilePosition(baseSize: string, offset: number): string;
	    /**
	     * Gets the actual size of a tile, e.g., width or height, taking rowspan or colspan into account.
	     * @param baseSize Base size of a 1x1 tile (as computed in getBaseTileSize).
	     * @param span The tile's rowspan or colspan.
	     * @return Size of the tile as a CSS calc() expression.
	     */
	    getTileSize(baseSize: string, span: number): string;
	    /** Gets the style properties to be applied to a tile for the given row and column index. */
	    getTileStyle(tile: MdGridTile, rowIndex: number, colIndex: number): TileStyle;
	}
	export class MdGridTile implements OnDestroy, OnChanges {
	    gridList: MdGridList;
	    _rowspan: number;
	    _colspan: number;
	    style: TileStyle;
	    isRegisteredWithGridList: boolean;
	    constructor(gridList: MdGridList);
	    rowspan: number;
	    colspan: number;
	    /**
	     * Change handler invoked when bindings are resolved or when bindings have changed.
	     * Notifies grid-list that a re-layout is required.
	     */
	    ngOnChanges(_: any): void;
	    /**
	     * Destructor function. Deregisters this tile from the containing grid-list.
	     */
	    ngOnDestroy(): void;
	}
	/** Simple data structure for style values to be applied to a tile. */
	export class TileStyle {
	    height: string;
	    width: string;
	    top: string;
	    left: string;
	    marginTop: string;
	    paddingTop: string;
	}

}
declare module 'ng2-material/components/icon/icon' {
	export class MdIcon {
	}

}
declare module 'ng2-material/components/input/input' {
	import { AfterContentChecked } from 'angular2/core';
	import { EventEmitter } from 'angular2/src/facade/async';
	export class MdInputContainer implements AfterContentChecked {
	    _input: MdInput;
	    inputHasValue: boolean;
	    inputHasFocus: boolean;
	    constructor(id: string);
	    ngAfterContentChecked(): void;
	    /** Registers the child MdInput or MdTextarea. */
	    registerInput(input: any): void;
	}
	export class MdInput {
	    value: string;
	    mdChange: EventEmitter<any>;
	    mdFocusChange: EventEmitter<any>;
	    constructor(value: string, container: MdInputContainer, id: string);
	    updateValue(event: any): void;
	    setHasFocus(hasFocus: boolean): void;
	}

}
declare module 'ng2-material/components/list/list' {
	import { ElementRef } from "angular2/core";
	import { AfterViewInit } from "angular2/core";
	/**
	 * @description
	 * The `<md-list>` directive is a list container for 1..n `<md-list-item>` tags.
	 *
	 * @usage
	 * <hljs lang="html">
	 * <md-list>
	 *   <md-list-item class="md-2-line" ng-repeat="item in todos">
	 *     <md-checkbox ng-model="item.done"></md-checkbox>
	 *     <div class="md-list-item-text">
	 *       <h3>{{item.title}}</h3>
	 *       <p>{{item.description}}</p>
	 *     </div>
	 *   </md-list-item>
	 * </md-list>
	 * </hljs>
	 */
	export class MdList {
	}
	/**
	 * @description
	 * The `<md-list-item>` directive is a container intended for row items in a `<md-list>` container.
	 * The `md-2-line` and `md-3-line` classes can be added to a `<md-list-item>`
	 * to increase the height with 22px and 40px respectively.
	 *
	 * ## CSS
	 * `.md-avatar` - class for image avatars
	 *
	 * `.md-avatar-icon` - class for icon avatars
	 *
	 * `.md-offset` - on content without an avatar
	 *
	 * @usage
	 * <hljs lang="html">
	 *  <md-list>
	 *    <md-list-item>
	 *      <img class="md-avatar" ng-src="path/to/img"/>
	 *      <span>Item content in list</span>
	 *    </md-list-item>
	 *    <md-list-item>
	 *      <md-icon class="md-avatar-icon" md-svg-icon="communication:phone"></md-icon>
	 *      <span>Item content in list</span>
	 *    </md-list-item>
	 *  </md-list>
	 * </hljs>
	 *
	 */
	export class MdListItem implements AfterViewInit {
	    private _element;
	    constructor(_element: ElementRef);
	    ngAfterViewInit(): any;
	    setupToggleAria(): void;
	}

}
declare module 'ng2-material/components/progress_linear/progress_linear' {
	import { OnChanges } from 'angular2/core';
	export class MdProgressLinear implements OnChanges {
	    /** Clamps a value to be between 0 and 100. */
	    static clamp(v: any): number;
	    /** Value for the primary bar. */
	    value_: number;
	    /** Value for the secondary bar. */
	    bufferValue: number;
	    /** The render mode for the progress bar. */
	    mode: string;
	    /** CSS `transform` property applied to the primary bar. */
	    primaryBarTransform: string;
	    /** CSS `transform` property applied to the secondary bar. */
	    secondaryBarTransform: string;
	    constructor(mode: string);
	    value: number;
	    ngOnChanges(_: any): void;
	    /** Gets the CSS `transform` property for a progress bar based on the given value (0 - 100). */
	    transformForValue(value: any): string;
	}

}
declare module 'ng2-material/components/progress_circular/progress_circular' {
	import { MdProgressLinear } from 'ng2-material/components/progress_linear/progress_linear';
	export class MdProgressCircular extends MdProgressLinear {
	}

}
declare module 'ng2-material/components/radio/radio_dispatcher' {
	/**
	 * Class for radio buttons to coordinate unique selection based on name.
	 * Indended to be consumed as an Angular service.
	 */
	export class MdRadioDispatcher {
	    listeners_: Function[];
	    constructor();
	    /** Notify other nadio buttons that selection for the given name has been set. */
	    notify(name: string): void;
	    /** Listen for future changes to radio button selection. */
	    listen(listener: any): void;
	}

}
declare module 'ng2-material/components/radio/radio_button' {
	import { OnChanges, OnInit } from 'angular2/core';
	import { EventEmitter } from 'angular2/src/facade/async';
	import { MdRadioDispatcher } from 'ng2-material/components/radio/radio_dispatcher';
	export class MdRadioGroup implements OnChanges {
	    /** The selected value for the radio group. The value comes from the options. */
	    value_: any;
	    value: any;
	    /** The HTML name attribute applied to radio buttons in this group. */
	    name_: string;
	    /** Dispatcher for coordinating radio unique-selection by name. */
	    radioDispatcher: MdRadioDispatcher;
	    /** Array of child radio buttons. */
	    radios_: MdRadioButton[];
	    activedescendant: any;
	    disabled_: boolean;
	    /** The ID of the selected radio button. */
	    selectedRadioId: string;
	    change: EventEmitter<any>;
	    tabindex: number;
	    constructor(tabindex: string, disabled: string, radioDispatcher: MdRadioDispatcher);
	    /** Gets the name of this group, as to be applied in the HTML 'name' attribute. */
	    getName(): string;
	    disabled: boolean;
	    /** Change handler invoked when bindings are resolved or when bindings have changed. */
	    ngOnChanges(_: any): void;
	    /** Update the value of this radio group from a child md-radio being selected. */
	    updateValue(value: any, id: string): void;
	    /** Registers a child radio button with this group. */
	    register(radio: MdRadioButton): void;
	    /** Handles up and down arrow key presses to change the selected child radio. */
	    onKeydown(event: KeyboardEvent): void;
	    getSelectedRadioIndex(): number;
	    /**
	     * Return a child radio by its value.
	     */
	    getChildByValue(value: any): MdRadioButton;
	    /** Steps the selected radio based on the given step value (usually either +1 or -1). */
	    stepSelectedRadio(step: any): void;
	}
	export class MdRadioButton implements OnInit {
	    /** Whether this radio is checked. */
	    checked: boolean;
	    /** Whether the radio is disabled. */
	    disabled_: boolean;
	    /** The unique ID for the radio button. */
	    id: string;
	    /** Analog to HTML 'name' attribute used to group radios for unique selection. */
	    name: string;
	    /** Value assigned to this radio. Used to assign the value to the parent MdRadioGroup. */
	    value: any;
	    /** The parent radio group. May or may not be present. */
	    radioGroup: MdRadioGroup;
	    /** Dispatcher for coordinating radio unique-selection by name. */
	    radioDispatcher: MdRadioDispatcher;
	    tabindex: number;
	    constructor(radioGroup: MdRadioGroup, id: string, value: string, tabindex: string, radioDispatcher: MdRadioDispatcher);
	    /** Change handler invoked when bindings are resolved or when bindings have changed. */
	    ngOnInit(): void;
	    /** Whether this radio button is disabled, taking the parent group into account. */
	    isDisabled(): boolean;
	    disabled: any;
	    /** Select this radio button. */
	    select(event: Event): void;
	    /** Handles pressing the space key to select this focused radio button. */
	    onKeydown(event: KeyboardEvent): void;
	}

}
declare module 'ng2-material/components/switcher/switch' {
	import { MdCheckbox } from 'ng2-material/components/checkbox/checkbox';
	export class MdSwitch extends MdCheckbox {
	    constructor(tabindex: string);
	}

}
declare module 'ng2-material/core/util/util' {
	/**
	 * Returns a function, that, as long as it continues to be invoked, will not
	 * be triggered. The function will be called after it stops being called for
	 * N milliseconds.
	 * @param wait Integer value of msecs to delay (since last debounce reset); default value 10 msecs
	 */
	export function debounce(func: any, wait: any, scope: any): () => void;
	/**
	 * Returns a function that can only be triggered every `delay` milliseconds.
	 * In other words, the function will not be called unless it has been more
	 * than `delay` milliseconds since the last call.
	 */
	export function throttle(func: any, delay: any, scope: any): () => void;
	export function rAF(callback: any): void;

}
declare module 'ng2-material/components/toolbar/toolbar' {
	import { AfterViewInit, OnChanges, OnDestroy } from "angular2/core";
	import { ElementRef } from "angular2/core";
	/**
	 * @ngdoc directive
	 * @name mdToolbar
	 * @description
	 * `md-toolbar` is used to place a toolbar in your app.
	 *
	 * Toolbars are usually used above a content area to display the title of the
	 * current page, and show relevant action buttons for that page.
	 *
	 * You can change the height of the toolbar by adding either the
	 * `md-medium-tall` or `md-tall` class to the toolbar.
	 *
	 * @usage
	 * <hljs lang="html">
	 * <div layout="column" layout-fill>
	 *   <md-toolbar>
	 *
	 *     <div class="md-toolbar-tools">
	 *       <span>My App's Title</span>
	 *
	 *       <!-- fill up the space between left and right area -->
	 *       <span flex></span>
	 *
	 *       <md-button>
	 *         Right Bar Button
	 *       </md-button>
	 *     </div>
	 *
	 *   </md-toolbar>
	 *   <md-content>
	 *     Hello!
	 *   </md-content>
	 * </div>
	 * </hljs>
	 *
	 * @param {boolean=} md-scroll-shrink Whether the header should shrink away as
	 * the user scrolls down, and reveal itself as the user scrolls up.
	 *
	 * _**Note (1):** for scrollShrink to work, the toolbar must be a sibling of a
	 * `md-content` element, placed before it. See the scroll shrink demo._
	 *
	 * _**Note (2):** The `md-scroll-shrink` attribute is only parsed on component
	 * initialization, it does not watch for scope changes._
	 *
	 *
	 * @param {number=} mdShrinkSpeed How much to change the speed of the toolbar's
	 * shrinking by. For example, if 0.25 is given then the toolbar will shrink
	 * at one fourth the rate at which the user scrolls down. Default 0.5.
	 */
	export class MdToolbar implements AfterViewInit, OnChanges, OnDestroy {
	    scrollShrink: any;
	    el: ElementRef;
	    mdShrinkSpeed: number;
	    private _debouncedContentScroll;
	    private _debouncedUpdateHeight;
	    private _content;
	    private _toolbarHeight;
	    private _cancelScrollShrink;
	    private _previousScrollTop;
	    private _currentY;
	    constructor(scrollShrink: any, el: ElementRef);
	    ngAfterViewInit(): any;
	    ngOnChanges(changes: {}): any;
	    ngOnDestroy(): any;
	    disableScrollShrink(): void;
	    updateToolbarHeight(): void;
	    onContentScroll(e?: any): void;
	}

}
declare module 'ng2-material/components/tabs/tabs' {
	import { QueryList, AfterContentInit, ViewContainerRef, TemplateRef } from 'angular2/core';
	export class MdTab {
	    viewContainer: ViewContainerRef;
	    templateRef: TemplateRef;
	    label: string;
	    disabled: boolean;
	    private _active;
	    constructor(viewContainer: ViewContainerRef, disabled: string, templateRef: TemplateRef);
	    active: boolean;
	}
	export class MdTabs implements AfterContentInit {
	    panes: QueryList<MdTab>;
	    mdNoScroll: boolean;
	    constructor(noScroll: string);
	    private _selectedIndex;
	    selectedIndex: number;
	    selected: MdTab;
	    select(pane: MdTab): void;
	    onTabClick(pane: MdTab, event?: any): void;
	    ngAfterContentInit(): any;
	}

}
declare module 'ng2-material/all' {
	import { Type } from 'angular2/src/facade/lang';
	export * from 'ng2-material/components/button/button';
	export * from 'ng2-material/components/checkbox/checkbox';
	export * from 'ng2-material/components/content/content';
	export * from 'ng2-material/components/dialog/dialog';
	export * from 'ng2-material/components/divider/divider';
	export * from 'ng2-material/components/grid_list/grid_list';
	export * from 'ng2-material/components/icon/icon';
	export * from 'ng2-material/components/input/input';
	export * from 'ng2-material/components/list/list';
	export * from 'ng2-material/components/progress_linear/progress_linear';
	export * from 'ng2-material/components/progress_circular/progress_circular';
	export * from 'ng2-material/components/radio/radio_button';
	export * from 'ng2-material/components/radio/radio_dispatcher';
	export * from 'ng2-material/components/switcher/switch';
	export * from 'ng2-material/components/toolbar/toolbar';
	import { UrlResolver } from "angular2/compiler";
	export * from 'ng2-material/components/toolbar/toolbar';
	/**
	 * Collection of Material Design component directives.
	 */
	export const MATERIAL_DIRECTIVES: Type[];
	/**
	 * Specify the baseUrl to load templates and styles from.
	 * @param url
	 */
	export function setBaseUrl(url: string): void;
	/**
	 * This is a workaround to tell us where to load templates and styles from until
	 * we have a better template bundling strategy.
	 */
	export class MaterialTemplateResolver extends UrlResolver {
	    static RESOURCE_MATCHER: RegExp;
	    resolve(baseUrl: string, url: string): string;
	}
	/**
	 * Collection of Material Design component providers.
	 */
	export const MATERIAL_PROVIDERS: any[];

}
declare module 'ng2-material/components/card/card' {
	/**
	 * @name mdCard
	 *
	 * @description
	 * The `<md-card>` directive is a container element used within `<md-content>` containers.
	 *
	 * An image included as a direct descendant will fill the card's width, while the `<md-card-content>`
	 * container will wrap text content and provide padding. An `<md-card-footer>` element can be
	 * optionally included to put content flush against the bottom edge of the card.
	 *
	 * Action buttons can be included in an `<md-card-actions>` element, similar to `<md-dialog-actions>`.
	 * You can then position buttons using layout attributes.
	 *
	 * Card is built with:
	 * * `<md-card-header>` - Header for the card, holds avatar, text and squared image
	 *  - `<md-card-avatar>` - Card avatar
	 *    - `md-user-avatar` - Class for user image
	 *    - `<md-icon>`
	 *  - `<md-card-header-text>` - Contains elements for the card description
	 *    - `md-title` - Class for the card title
	 *    - `md-subhead` - Class for the card sub header
	 * * `<img>` - Image for the card
	 * * `<md-card-title>` - Card content title
	 *  - `<md-card-title-text>`
	 *    - `md-headline` - Class for the card content title
	 *    - `md-subhead` - Class for the card content sub header
	 *  - `<md-card-title-media>` - Squared image within the title
	 *    - `md-media-sm` - Class for small image
	 *    - `md-media-md` - Class for medium image
	 *    - `md-media-lg` - Class for large image
	 * * `<md-card-content>` - Card content
	 *  - `md-media-xl` - Class for extra large image
	 * * `<md-card-actions>` - Card actions
	 *  - `<md-card-icon-actions>` - Icon actions
	 *
	 * Cards have constant width and variable heights; where the maximum height is limited to what can
	 * fit within a single view on a platform, but it can temporarily expand as needed.
	 *
	 * @usage
	 * ### Card with optional footer
	 * <hljs lang="html">
	 * <md-card>
	 *  <img src="card-image.png" class="md-card-image" alt="image caption">
	 *  <md-card-content>
	 *    <h2>Card headline</h2>
	 *    <p>Card content</p>
	 *  </md-card-content>
	 *  <md-card-footer>
	 *    Card footer
	 *  </md-card-footer>
	 * </md-card>
	 * </hljs>
	 *
	 * ### Card with actions
	 * <hljs lang="html">
	 * <md-card>
	 *  <img src="card-image.png" class="md-card-image" alt="image caption">
	 *  <md-card-content>
	 *    <h2>Card headline</h2>
	 *    <p>Card content</p>
	 *  </md-card-content>
	 *  <md-card-actions layout="row" layout-align="end center">
	 *    <md-button>Action 1</md-button>
	 *    <md-button>Action 2</md-button>
	 *  </md-card-actions>
	 * </md-card>
	 * </hljs>
	 *
	 * ### Card with header, image, title actions and content
	 * <hljs lang="html">
	 * <md-card>
	 *   <md-card-header>
	 *     <md-card-avatar>
	 *       <img class="md-user-avatar" src="avatar.png"/>
	 *     </md-card-avatar>
	 *     <md-card-header-text>
	 *       <span class="md-title">Title</span>
	 *       <span class="md-subhead">Sub header</span>
	 *     </md-card-header-text>
	 *   </md-card-header>
	 *   <img ng-src="card-image.png" class="md-card-image" alt="image caption">
	 *   <md-card-title>
	 *     <md-card-title-text>
	 *       <span class="md-headline">Card headline</span>
	 *       <span class="md-subhead">Card subheader</span>
	 *     </md-card-title-text>
	 *   </md-card-title>
	 *   <md-card-actions layout="row" layout-align="start center">
	 *     <md-button>Action 1</md-button>
	 *     <md-button>Action 2</md-button>
	 *     <md-card-icon-actions>
	 *       <md-button class="md-icon-button" aria-label="icon">
	 *         <md-icon md-svg-icon="icon"></md-icon>
	 *       </md-button>
	 *     </md-card-icon-actions>
	 *   </md-card-actions>
	 *   <md-card-content>
	 *     <p>
	 *      Card content
	 *     </p>
	 *   </md-card-content>
	 * </md-card>
	 * </hljs>
	 */
	export class MdContent {
	}

}
declare module 'ng2-material/components/sidenav/sidenav' {
	export class MdSidenav {
	    opened: boolean;
	}

}
