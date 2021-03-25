import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}
// module có tác dụng chứa 1 hoặc nhiều component
// Khai báo cho ứng dụng biến là App chạy đầu tien
platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
