import { Component } from '@angular/core';
import { sidenav } from '../../../data/sidenav';

@Component({
  selector: 'app-banner',
  standalone: false,
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css',
})
export class BannerComponent {
  collapsed = false;
  side = sidenav;
}
