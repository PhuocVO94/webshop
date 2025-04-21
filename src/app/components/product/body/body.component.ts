import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  standalone: false,
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css', '../../../../styles.css'],
})
export class BodyComponent {
  handlerToggle(collapse: boolean) {
    console.log('Lớp con truyền qua lớp cha-->', collapse);
  }
}
