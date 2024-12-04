import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AudioService {
  private main!: HTMLAudioElement;
  private duel!: HTMLAudioElement;
  private reveal!: HTMLAudioElement;


  private button!: HTMLAudioElement;

  private isMusic: boolean = true;
  private isSound: boolean = true;


  constructor() {
    // Initialiser la musique
    this.main = new Audio('assets/sounds/musics/main.mp3');
    this.main.loop = true; // Boucle la musique
    this.main.volume = 0.8; // Ajuste le volume

    // Initialiser la musique
    this.duel = new Audio('assets/sounds/musics/duel.mp3');
    this.duel.loop = true; // Boucle la musique
    this.duel.volume = 0.8; // Ajuste le volume

    // Initialiser la musique
    this.reveal = new Audio('assets/sounds/musics/reveal.wav');
    this.reveal.loop = true; // Boucle la musique
    this.reveal.volume = 0.4; // Ajuste le volume

    // Initialiser la musique
    this.button = new Audio('assets/sounds/button.wav');
    this.button.loop = false; // Boucle la musique
  }

  startMusic(title: string = '') {
    if (this.isMusic) {
      switch (title) {
        case 'main':
          this.duel.pause();
          this.duel.currentTime = 0;
          this.reveal.pause();
          this.reveal.currentTime = 17;
          this.main.play();
          break;
        case 'duel':
          this.main.pause();
          this.main.currentTime = 0;
          this.reveal.pause();
          this.reveal.currentTime = 17;
          this.duel.play();
          break;
        case 'reveal':
          this.main.pause();
          this.main.currentTime = 0;
          this.duel.pause();
          this.duel.currentTime = 0;
          this.reveal.play();
          break;
      }
    }
  }

  stopMusic(title: string = '') {
    if (this.isMusic) {
      switch (title) {
        case 'main':
          this.main.pause();
          this.main.currentTime = 0;
          break;
        case 'duel':
          this.duel.pause();
          this.duel.currentTime = 0;
          break;
        case 'reveal':
          this.reveal.pause();
          this.reveal.currentTime = 17;
          break;
        default:
          this.main.pause();
          this.main.currentTime = 0;
          this.duel.pause();
          this.duel.currentTime = 0;
          this.reveal.pause();
          this.reveal.currentTime = 17;
      }
    }
  }

  startSound(title:string=''){
    if (this.isSound) {
      switch (title) {
        case 'button':
          this.button.play();
      }
    }
  }

}
