import {Component, ViewChild} from "angular2/core";
import {MATERIAL_DIRECTIVES, Media, MdSidenavLayout} from "ng2-material/all";


@Component({
  selector: 'sidenav-basic-usage',
  templateUrl: 'examples/components/sidenav/basic_usage.html',
  directives: [MATERIAL_DIRECTIVES]
})
export default class SidenavBasicUsage {

  @ViewChild(MdSidenavLayout)
  layout: MdSidenavLayout;

  hasMedia(breakSize: string): boolean {
    return Media.hasMedia(breakSize);
  }

  open(name: string) {
    this.layout.start.toggle(true);
  }

  close(name: string) {
    this.layout.start.toggle(false);
  }
}
