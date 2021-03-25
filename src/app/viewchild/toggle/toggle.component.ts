import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss'],
})
export class ToggleComponent implements OnInit {
  checked: boolean = false;
  constructor() {}

  ngOnInit(): void {}
  toggle() {
    this.checked = !this.checked;
  }
}
