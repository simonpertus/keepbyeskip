import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';

import { register } from 'swiper/element/bundle';
register();

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private platform: Platform) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      document.body.classList.toggle('dark', false);  // Forcer le mode clair
    });
  }
}
