import { Component, Input } from '@angular/core';

interface SideNav {
  collapse: boolean;
  creenWidth: number;
}
@Component({
  selector: 'app-body',
  standalone: false,
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css', '../../../../styles.css'],
})
export class BodyComponent {
  @Input() _collapse = false;

  @Input() _screenWidth = 0;

  onFocusSideNav(sidenav: SideNav) {
    this._collapse = sidenav.collapse;
    this._screenWidth = sidenav.creenWidth;
  }
}
