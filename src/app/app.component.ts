import { Component } from '@angular/core';

// @Component: Type decorator - khai báo cho angular biết đây là 1 component
// Nếu ko có @component thì là class bình thường
@Component({
  // Tên component khi sử dụng trong file html
  selector: 'app-root',
  // kết nối file html với component
  templateUrl: './app.component.html',
  // kết nối file css/scss với component
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-first-app';
}
