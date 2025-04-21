import { EventEmitter } from '@angular/core';
import { Nav } from '../../../interface/nav';
import { name } from './../../../../../node_modules/@leichtgewicht/ip-codec/types/index.d';
import { Component, Output } from '@angular/core';

interface sidenav {
  collapse: boolean;
  creenWidth: number;
}
@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css', '../../../../styles.css'],
})
export class HeaderComponent {
  @Output() onFocusSideNav = new EventEmitter<sidenav>();
  collapse: boolean = false;
  creenWidth = 0;
  nav: Nav[] = [
    {
      name: 'Danh Mục',
      url: '#',
      icon: '',
      active: false,
    },
    {
      name: 'Đơn Hàng',
      url: '/order',
      icon: 'shopping_cart',
      active: false,
    },
    {
      name: 'Giỏ Hàng',
      url: '/cart',
      icon: 'shopping_cart',
      active: false,
    },
    {
      name: 'Tài Khoản',

      icon: 'account_circle',
      active: false,
      subMenu: [
        {
          name: 'Thông Tin Tài Khoản',
          url: '/account/info',
          icon: 'info',
          active: false,
        },

        {
          name: 'Đăng Xuất',
          url: '/login',
          icon: 'login',
          active: false,
        },
      ],
    },
  ];

  handlerToger(item: Nav) {
    if (item.subMenu) {
      item.active = !item.active;
      console.log(item.active);
    }
  }

  //Xử lý từ lớp con chuyền qua lớp cha
  toggleCollapsed(): void {
    this.collapse = !this.collapse;
    // console.log('ddadss', this.collapse);
    this.onFocusSideNav.emit({
      collapse: this.collapse,
      creenWidth: this.creenWidth,
    });
  }
}
