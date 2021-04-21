import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}


// Khai báo App module sẽ  là module khởi chạt đầu tiên
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
