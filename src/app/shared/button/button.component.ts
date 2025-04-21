import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: false,
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent implements OnChanges {
  @Input() backgroundcolor?: string | undefined; /* Green */
  @Input() border?: string | undefined;
  @Input() color?: string | undefined;
  @Input() padding?: number | undefined;
  @Input() textalign?: string | undefined;
  @Input() textdecoration?: string | undefined;
  @Input() display?: string | undefined;
  @Input() fontsize?: number | undefined;
  private _value: string = 'default value';

  @Input()
  set value(val: string | undefined) {
    this._value = val ?? 'default value';
  }

  get value(): string {
    return this._value;
  }

  constructor() {}

  private handlePropertyChange(property: string, defaultValue: string): void {
    const value = property;
    if (typeof value !== 'string' || value === 'null' || value === undefined) {
      property = defaultValue;
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if ('backgroundcolor' in changes) {
      this.handlePropertyChange('backgroundcolor', 'gray');
    }
    if ('color' in changes) {
      this.handlePropertyChange('color', 'black');
    }
  }

  // ngOnInit(): void {
  //   throw new Error('Method not implemented.');
  // }
}
