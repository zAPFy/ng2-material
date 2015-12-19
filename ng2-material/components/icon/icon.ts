import {Directive, ElementRef} from 'angular2/core';
import {DOM} from 'angular2/src/platform/dom/dom_adapter';


@Directive({
  selector: '[md-icon], .md-icon',
  host: {
    '[class.material-icons]': 'true'
  }
})
export class MdIcon {
}
