import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {Swiper} from 'swiper';
import { register } from 'swiper/element';

register();

@Component({
  selector: 'app-rules',
  templateUrl: './rules.page.html',
  styleUrls: ['./rules.page.scss'],

})

export class RulesPage  implements AfterViewInit {
  @ViewChild('swiper') swiperRef: any;
  public swiper!: Swiper;

  constructor(private router: Router) {}

  ngAfterViewInit() {
    this.resetSwiper();
  }

  goHome() {
    this.router.navigate(['/home']);
  }
  resetSwiper() {
    if (this.swiperRef && this.swiperRef.swiper) {
      this.swiperRef.swiper.slideTo(0, 0);  // Move to the first slide instantly
    }
  }
}
