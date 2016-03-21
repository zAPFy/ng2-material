import {UrlResolver} from "angular2/src/compiler/url_resolver";

export class TestUrlResolver extends UrlResolver {
  constructor() {
    super();
  }

  resolve(baseUrl: string, url: string): string {

    let result = super.resolve(baseUrl, url);
    if (url.indexOf('./components/') === 0) {
      return `/base/node_modules/@angular2-material/${result.replace('components/', '')}`;
    }
    return `/base/${result}`;
  }
}
