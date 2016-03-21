import {Component} from "angular2/core";
import {MATERIAL_DIRECTIVES, Media, MdSidenav} from "ng2-material/all";


@Component({
  selector: 'sidenav-basic-usage',
  templateUrl: 'examples/components/sidenav/basic_usage.html',
  directives: [MATERIAL_DIRECTIVES]
})
export default class SidenavBasicUsage {
  hasMedia(breakSize: string): boolean {
    return Media.hasMedia(breakSize);
  }

  open(sidenav: MdSidenav) {
    sidenav.toggle(true);
  }

  close(sidenav: MdSidenav) {
    sidenav.toggle(false);
  }
}
