import {Component, View} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {MATERIAL_DIRECTIVES, MATERIAL_PROVIDERS} from '../ng2-material/all';

import {DEMO_DIRECTIVES} from './all';
import Example from './example';
import {Http, Response, HTTP_PROVIDERS} from 'angular2/http';

import {UrlResolver} from 'angular2/src/compiler/url_resolver';
import {provide} from "angular2/core";

//
// PLUNKR for ng2: http://plnkr.co/edit/UPJESEgyKFsm4hyW4fWR
//

/**
 * Describe an example that can be dynamically loaded.
 */
export interface IExampleData {
  template:string;
  source:string;
  styles:string;
  component:string;
  name:string;
}

@Component({
  selector: 'demos-app'
})
@View({
  templateUrl: 'examples/app.html',
  directives: [MATERIAL_DIRECTIVES, Example, DEMO_DIRECTIVES]
})
export class DemosApp {
  meta: any;

  constructor(http: Http) {
    http.get('public/meta.json')
      .subscribe((res: Response) => {
        this.meta = res.json();
        // HACKS: use to filter down to a single example for testing
        //let data = res.json();
        //let results = [];
        //data.forEach((d) => {
        //  if(d.name === 'Button'){
        //    results.push(d);
        //  }
        //});
        //this.meta = results;

        console.log(this.meta);
      });
  }
}


export class MaterialTemplateResolver extends UrlResolver {
  static TEMPLATE_MATCHER: RegExp = /^ng2-material\/.*?\.(html|css)$/;

  resolve(baseUrl: string, url: string): string {
    if (baseUrl !== './') {
      let foo = 2;
      foo++;
    }
    let w: any = window;

    if (w._mdTemplatesHack && baseUrl.startsWith(w._mdTemplatesHack)) {
      baseUrl = baseUrl.substr(0, w._mdTemplatesHack.length);
    }
    let result = super.resolve(baseUrl, url);
    if (w._mdTemplatesHack && MaterialTemplateResolver.TEMPLATE_MATCHER.test(result)) {
      return `${w._mdTemplatesHack}${result}`;
    }
    return result;
  }
}

bootstrap(DemosApp, [HTTP_PROVIDERS, provide(UrlResolver, {useValue: new MaterialTemplateResolver()}), MATERIAL_PROVIDERS]);
