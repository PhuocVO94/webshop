import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnChanges,
  Renderer2,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { sidenav } from '../../../data/sidenav';

@Component({
  selector: 'app-banner',
  standalone: false,
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css',
})
export class BannerComponent implements OnChanges {
  @Input() _collapse = false;
  @Input() _screenWidth = 768;
  @ViewChild('sidebarNav') sidebarNav: ElementRef | undefined;
  collapsed = false;
  side = sidenav;
  constructor(private renderer: Renderer2) {}
  ngOnChanges(changes: SimpleChanges): void {
    if ('_collapse' in changes) {
      console.log('Check log ', this._collapse);
    }
  }
  // ngAfterViewInit(): void {
  //   console.log('Check --->', this._collapse);
  // }
  getBodyBanner() {
    if (this._screenWidth >= 768 && this._collapse) {
      console.log(this.renderer.selectRootElement(this.sidebarNav));
    }
    if (this._screenWidth < 768 && this._collapse) {
      console.log('Huu Phuoc');
    } else {
    }
  }
}
