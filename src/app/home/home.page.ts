import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppUtilsService } from '../services/app-utils.service';
import { AudioService } from '../services/audio.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private router: Router,private aus: AppUtilsService,private audioService: AudioService) { }

  ngOnInit() {
    this.animateLogo();
    this.audioService.startMusic('main');
  }

  ionViewWillEnter() {
    this.audioService.startMusic('main');
  }

  animateLogo() {
    const keep = document.querySelector('.logo-keep') as HTMLElement;
    const bye = document.querySelector('.logo-bye') as HTMLElement;
    const skip = document.querySelector('.logo-skip') as HTMLElement;
    const buttonsGroup = document.querySelector('.buttons-group.hide') as HTMLElement;


    if (keep) {
      setTimeout(() => {
        keep.classList.add('logo-img-show');
        setTimeout(() => {
          keep.classList.add('logo-img-animate');
        }, 0); // Ajoute l'animation de zoom après l'apparition
      }, 200); // Délai pour l'apparition initiale
    }

    if (bye) {
      setTimeout(() => {
        bye.classList.add('logo-img-show');
        setTimeout(() => {
          bye.classList.add('logo-img-animate');
        }, 400);
      }, 300); // Délai pour l'apparition de "Bye" après "Keep"
    }

    if (skip) {
      setTimeout(() => {
        skip.classList.add('logo-img-show');
        setTimeout(() => {
          if (buttonsGroup) {
            buttonsGroup.classList.remove("hide");
          }
        }, 400);
        setTimeout(() => {
          skip.classList.add('logo-img-animate');
        }, 800);
      }, 400); // Délai pour l'apparition de "Skip" après "Bye"
    }
  }

  startGame() {
    this.aus.animateButton("button-start");
    setTimeout(() => {
      this.router.navigate(['/game-decision']);
    }, 400);
  }

  showRules() {
    this.aus.animateButton("button-rules");
    setTimeout(() => {
      this.router.navigate(['/rules']);
    }, 400);
  }

}
