import {
  Component,
  enableProdMode,
  bind,
  Input,
  OnDestroy,
  ApplicationRef,
  ViewChild,
  provide,
  AfterViewInit, ViewEncapsulation
} from "angular2/core";
import {bootstrap} from "angular2/platform/browser";
import {
  ROUTER_PROVIDERS,
  ROUTER_DIRECTIVES,
  RouteConfig,
  HashLocationStrategy,
  LocationStrategy,
  Router
} from "angular2/router";
import {MATERIAL_DIRECTIVES, MATERIAL_PROVIDERS, MdSidenavLayout} from "../ng2-material/all";
import {DEMO_DIRECTIVES} from "./all";
import Example from "./example";
import {Http, Response, HTTP_PROVIDERS} from "angular2/http";
import {IndexPage} from "./routes/index";
import {ComponentPage} from "./routes/component";
import {ComponentsService, IComponentMeta} from "./services/components";
import {NavigationService} from "./services/navigation";
import {VersionService} from "./services/version";
import {Media} from "ng2-material/core/util/media";
import {UrlResolver} from "angular2/src/compiler/url_resolver";

/**
 * Describe an example that can be dynamically loaded.
 */
export interface IExampleData {
  template: string;
  source: string;
  styles: string;
  component: string;
  name: string;
}


export class Material2UrlResolver extends UrlResolver {
  resolve(baseUrl: string, url: string): string {
    let result = super.resolve(baseUrl, url);
    if (url.indexOf('./components/') === 0) {
      return `node_modules/@angular2-material/${result.replace('components/', '')}`;
    }
    return result;
  }
}

@RouteConfig([
  {path: '/', name: 'Index', component: IndexPage, useAsDefault: true},
  {path: '/components/:id', name: 'Component', component: ComponentPage}
])

@Component({
  selector: 'demos-app',
  templateUrl: 'examples/app.html',
  directives: [MATERIAL_DIRECTIVES, ROUTER_DIRECTIVES, Example, DEMO_DIRECTIVES],
  host: {
    '[class.push-menu]': 'fullPage'
  },
  encapsulation: ViewEncapsulation.None
})
export class DemosApp implements OnDestroy, AfterViewInit {

  @ViewChild(MdSidenavLayout)
  layout: MdSidenavLayout;

  static SIDE_MENU_BREAKPOINT: string = 'gt-md';

  @Input()
  fullPage: boolean = Media.hasMedia(DemosApp.SIDE_MENU_BREAKPOINT);

  public site: string = 'Angular2 Material';

  version: string;

  components: IComponentMeta[] = [];

  private _subscription = null;

  constructor(public http: Http,
              public navigation: NavigationService,
              public media: Media,
              public router: Router,
              public appRef: ApplicationRef,
              private _components: ComponentsService) {
  }

  ngAfterViewInit(): any {
    let query = Media.getQuery(DemosApp.SIDE_MENU_BREAKPOINT);
    this._subscription = this.media.listen(query).onMatched.subscribe((mql: MediaQueryList) => {
      this.fullPage = mql.matches;
      this.layout.start.toggle(this.fullPage);
      this.appRef.tick();
    });
    this.layout.start.toggle(this.fullPage);
    this.http.get('public/version.json')
      .subscribe((res: Response) => {
        this.version = res.json().version;
      });

    this._components.getComponents()
      .then((comps) => {
        this.components = comps;
      });

  }

  ngOnDestroy(): any {
    this._subscription.unsubscribe();
  }

  showMenu(event?) {
    this.layout.start.toggle(true);
  }

  navigate(to: any) {
    this.router.navigate(to);
  }

}

let appProviders = [
  provide(UrlResolver, {useClass: Material2UrlResolver}),
  HTTP_PROVIDERS, ROUTER_PROVIDERS, MATERIAL_PROVIDERS,
  ComponentsService, NavigationService, VersionService,
  bind(LocationStrategy).toClass(HashLocationStrategy)
];

if (window.location.href.indexOf('github.com') !== -1) {
  enableProdMode();
}

bootstrap(DemosApp, appProviders);
