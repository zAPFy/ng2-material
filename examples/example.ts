import {
  View,
  Component,
  Input,
  DynamicComponentLoader,
  ElementRef,
  ComponentRef,
  Query,
  QueryList
} from "angular2/core";
import {IExampleData} from "./app";
import {DEMO_DIRECTIVES} from "./all";
import {MATERIAL_DIRECTIVES} from "ng2-material/all";
import {Http, Response} from "angular2/http";
import {Highlight} from "./highlight";
import {TimerWrapper} from "angular2/src/facade/async";
import {MdTabs} from "ng2-material/components/tabs/tabs";
import "rxjs/add/operator/map";


export interface ISourceFile {
  data:string;
  type:string;
}

@Component({
  selector: 'example',
  properties: ['templateData', 'stylesData', 'sourceData', 'showSource', 'orderedFiles']
})
@View({
  templateUrl: 'examples/example.html',
  directives: [MATERIAL_DIRECTIVES, DEMO_DIRECTIVES, Highlight]
})
export default class Example {
  private _model: IExampleData = null;
  private _reference: ComponentRef = null;

  @Input()
  set model(value: IExampleData) {
    this._model = value;
    this.applyModel(value);
  }

  get model(): IExampleData {
    return this._model;
  }

  private _loaded: boolean = false;
  get loaded(): boolean {
    return this._loaded;
  }

  constructor(private _element: ElementRef,
              public http: Http,
              @Query(MdTabs)
              public panes: QueryList<MdTabs>,
              public dcl: DynamicComponentLoader) {
  }

  /**
   * The set of source files associated with the example
   */
  public orderedFiles: ISourceFile[] = [];

  /**
   * True to show the source code for the example
   */
  public showSource: boolean = false;

  private showTabs: boolean = false;

  /**
   * The selected type of source to view.
   */
  @Input()
  public selected: string = 'html';

  applyModel(model: IExampleData) {
    this.orderedFiles = [];
    this._loaded = false;
    // Fetch template, styles, and source strings for display.
    if (model.template) {
      this.addFile(model.template, 'html');
    }
    if (model.styles) {
      this.addFile(model.styles, 'scss');
    }
    if (model.source) {
      this.addFile(model.source, 'typescript');
    }

    // Render the example component into the view.
    let template = `<${model.component}></${model.component}>`;
    @Component({selector: 'md-example-view'})
    @View({template: template, directives: [MATERIAL_DIRECTIVES, DEMO_DIRECTIVES]})
    class CompiledComponent {
    }
    this.dcl.loadIntoLocation(CompiledComponent, this._element, 'example')
      .then((ref: ComponentRef) => {
        if (this._reference) {
          this._reference.dispose();
        }
        this._loaded = true;
        this._reference = ref;
      });
  }

  addFile(url: string, type: string) {
    let desc: ISourceFile = {
      type: type,
      data: ''
    };
    this.http.get(url).subscribe((res: Response) => {
      desc.data = res.text();
    });
    this.orderedFiles.push(desc);
  }

  toggleSource() {
    if (this.showSource) {
      this.showTabs = false;
      TimerWrapper.setTimeout(() => {
        this.showSource = false;
      }, 500);
    }
    else {
      this.showSource = true;
      TimerWrapper.setTimeout(() => {
        this.showTabs = true;
      }, 25);
    }
  }

  getCodepenData(model: IExampleData) {
    let result: any = {
      title: model.name
    };
    this.orderedFiles.forEach((f: ISourceFile) => {
      switch (f.type) {
        case 'scss':
          result.css = f.data;
          result.css_pre_processor = 'scss';
          break;
        case 'html':
          result.html = f.data;
          break;
        case 'typescript':
          result.js = f.data;
          result.js_pre_processor = 'typescript';
          break;
      }
    });
    result.head = document.head.innerHTML;

    // All Optional
    // title                 : "New Pen!",
    // description           : "It's about stuff.",
    // private               : false, // true || false
    // tags                  : ["tag1", "tag2"], // an array of strings
    // editors               : "101", // Set which editors are open. In this example HTML open, CSS closed, JS open
    // html                  : "<div>HTML here.</div>",
    // html_pre_processor    : "none" || "slim" || "haml" || "markdown",
    // css                   : "html { color: red; }",
    // css_pre_processor     : "none" || "less" || "scss" || "sass" || "stylus",
    // css_starter           : "normalize" || "reset" || "neither",
    // css_prefix            : "autoprefixer" || "prefixfree" || "neither",
    // js                    : "alert('test');",
    // js_pre_processor      : "none" || "coffeescript" || "babel" || "livescript" || "typescript",
    // html_classes          : "loading",
    // head                  : "<meta name='viewport' content='width=device-width'>",
    // css_external          : "http://yoursite.com/style.css", // semi-colon separate multiple files
    // js_external           : "http://yoursite.com/script.js" // semi-colon separate multiple files
    //
    // // Deprecated
    //
    // // These go in the CSS itself now, like `@import "compass";`
    // css_pre_processor_lib : "bourbon" || "compass" || "nib" || "lesshat",
    //
    // // Link up in js_external if needed
    // js_modernizr : "true" || "false",
    // js_library   : "jquery" || "mootools" || "prototype",

    return JSON.stringify(result);
    // console.log(model);
    // return JSON.stringify({
    //   title: 'New Pen!',
    //   html: '<div>Hello, World!</div>'
    // });
    // var body = 'data=' + JSON.stringify({
    //     title: 'New Pen!',
    //     html: '<div>Hello, World!</div>'
    //   });
    // var headers = new Headers();
    // headers.append('Content-Type', 'application/x-www-form-urlencoded');
    // let xhr = this.http.post('http://codepen.io/pen/define', body, {headers: headers});
    //
    // xhr.map((response) => {
    //     return response.json();
    //   })
    //   .subscribe((response) => {
    //       console.log(`response: ${response}`)
    //     },
    //     (e) => console.error(`error: ${e}`),
    //     () => console.log('Authentication Complete')
    //   );
  }


}
