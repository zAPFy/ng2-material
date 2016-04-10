import "angular2-universal/polyfills";
import {provide, enableProdMode} from "angular2/core";
import {APP_BASE_HREF} from "angular2/router";
import {UrlResolver} from "angular2/compiler";
import {prerender} from "angular2-gulp-prerender";
import {App} from "./src/app";
import {NODE_HTTP_PROVIDERS, NODE_ROUTER_PROVIDERS, BASE_URL, REQUEST_URL} from "angular2-universal";
import gulp = require('gulp');
import path = require('path');

enableProdMode();

export class NodeUrlResolver extends UrlResolver {
  resolve(baseUrl: string, url: string): string {
    return `file://${path.resolve(path.join(baseUrl, url))}`;
  }
}

gulp.task('prerender', () => {
  let baseUrl = '/';

  let dirs: any[] = [App];
  return gulp.src('./index.html')
    .pipe(prerender({
      directives: dirs,
      providers: [
        provide(APP_BASE_HREF, {useValue: baseUrl}),
        provide(BASE_URL, {useValue: path.resolve(__dirname)}),
        provide(REQUEST_URL, {useValue: baseUrl}),
        provide(UrlResolver, {useValue: new NodeUrlResolver}),
        NODE_ROUTER_PROVIDERS,
        NODE_HTTP_PROVIDERS,
      ],
      preboot: false,
      async: true
    }))
    .pipe(gulp.dest('dist'));
});

gulp.task('watch:prerender', () => {
  gulp.watch(['./index.html', './src/**'], ['prerender']);
});

gulp.task('default', ['prerender'], () => {
  console.log('welcome');
});
