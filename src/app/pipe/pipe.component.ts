import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss'],
})
export class PipeComponent implements OnInit {
  message: string = 'hello world';
  tax: number = 0.1;
  price: number = 1000;
  today: Date = new Date();
  student: any = {
    name: 'Dant',
    age: 26,
  };
  total: number = 1000000;
  colors: string[] = ['red', 'green', 'yellow', 'pink'];
  constructor() {}

  ngOnInit(): void {}
}
