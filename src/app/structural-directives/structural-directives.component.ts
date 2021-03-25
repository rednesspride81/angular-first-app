import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.scss'],
})
export class StructuralDirectivesComponent implements OnInit {
  isActive: boolean = false;
  isLogin: boolean = true;
  color: string = 'primary';

  students: any[] = [
    { name: 'nguyen', email: 'ngnuyen@gmail.com', score: 7 },
    { name: 'nghia', email: 'nghia@gmail.com', score: 8 },
    { name: 'trang', email: 'trang@gmail.com', score: 1 },
  ];
  constructor() {}

  ngOnInit(): void {}
}
