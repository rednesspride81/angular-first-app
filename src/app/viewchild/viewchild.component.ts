import { ToggleComponent } from './toggle/toggle.component';
import { Component, OnInit, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-viewchild',
  templateUrl: './viewchild.component.html',
  styleUrls: ['./viewchild.component.scss'],
})
export class ViewchildComponent implements OnInit {
  // dùng viewchild để sử dụng được reference của thẻ bên trong component
  @ViewChild('toggle') toggleComponent!: ToggleComponent;
  // @ViewChild('toggle') toggleComponent: ToggleComponent | null = null;

  @ViewChildren('toggle') toggleComponents!: ToggleComponent[];
  constructor() {}

  ngOnInit(): void {}

  handleToggle(): void {
    this.toggleComponent.toggle();
  }
  handleToggleAll(): void {
    this.toggleComponents.forEach((item: ToggleComponent) => {
      item.toggle();
    });
  }
}
