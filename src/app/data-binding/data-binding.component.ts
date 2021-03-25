import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss'],
})
export class DataBindingComponent implements OnInit {
  message: string = 'hello world';
  student: any = {
    name: 'John',
    age: 45,
  };
  disabled: boolean = true;
  userName: string = '';
  email: string = '';
  address: string = '';
  color: string = '';
  fullName = '';
  constructor() {}

  ngOnInit(): void {}

  setDisabled(): void {
    this.disabled = !this.disabled;
  }
  changeUserName(event: any) {
    this.userName = event.target.value;
  }
  changeEmail(emailRef: HTMLInputElement): void {
    console.log(emailRef);
    this.email = emailRef.value;
  }

  changeFullName(fullNameRef: HTMLInputElement): void {
    this.fullName = fullNameRef.value;
  }
}
