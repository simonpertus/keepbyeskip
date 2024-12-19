import { Injectable } from '@angular/core';
import { App } from '@capacitor/app'; // Importer le plugin Capacitor App

@Injectable({
  providedIn: 'root',
})
export class AudioService {
  private main!: HTMLAudioElement;
  private game!: HTMLAudioElement;
  private duel!: HTMLAudioElement;
  private reveal!: HTMLAudioElement;

  private button!: HTMLAudioElement;
  private clic!: HTMLAudioElement;
  private pan!: HTMLAudioElement;
  private chrono!: HTMLAudioElement;
  private alert!: HTMLAudioElement;

  private isMusic: boolean = true;
  private isSound: boolean = true;

  private currentMusic: string = ''; // Titre de la musique en cours
  private currentTime: number = 0; // Position de lecture de la musique

  constructor() {
    // Initialiser la musique
    this.main = new Audio('assets/sounds/musics/main.mp3');
    this.main.loop = true; // Boucle la musique
    this.main.volume = 0.2; // Ajuste le volume

    // Initialiser la musique
    this.game = new Audio('assets/sounds/musics/game.wav');
    this.game.loop = true; // Boucle la musique
    this.game.volume = 0.1; // Ajuste le volume

    this.duel = new Audio('assets/sounds/musics/duel.mp3');
    this.duel.loop = true;
    this.duel.volume = 0.1;

    this.reveal = new Audio('assets/sounds/musics/reveal.wav');
    this.reveal.loop = true;
    this.reveal.volume = 0.4;

    this.button = new Audio('assets/sounds/button.wav');
    this.clic = new Audio('assets/sounds/clic.wav');
    this.pan = new Audio('assets/sounds/pan.wav');
    this.chrono = new Audio('assets/sounds/chrono.wav');
    this.chrono.loop = false; // Boucle la musique
    this.chrono.volume = 1.2;
    this.alert = new Audio('assets/sounds/alert.wav');
    this.alert.volume = 0.5;

    // Écouter les changements d'état de l'application (passage en arrière-plan et retour au premier plan)
    App.addListener('appStateChange', (state) => {
      if (!state.isActive) {
        // Sauvegarder la musique en cours et sa position
        this.saveCurrentMusic();
        // Arrêter la musique lorsque l'application passe en arrière-plan
        this.stopMusic();
      } else {
        // Reprendre la musique lorsque l'app revient au premier plan
        this.resumeMusic();
      }
    });
  }

  private saveCurrentMusic() {
    // Enregistrer la musique en cours et la position actuelle
    if (this.main.paused === false) {
      this.currentMusic = 'main';
      this.currentTime = this.main.currentTime;
    } else if (this.duel.paused === false) {
      this.currentMusic = 'duel';
      this.currentTime = this.duel.currentTime;
    } else if (this.reveal.paused === false) {
      this.currentMusic = 'reveal';
      this.currentTime = this.reveal.currentTime;
    }
  }

  private resumeMusic() {
    // Reprendre la musique à la position enregistrée
    if (this.currentMusic) {
      this.stopMusic(); // Arrêter la musique en cours avant de la reprendre

      switch (this.currentMusic) {
        case 'main':
          this.main.currentTime = this.currentTime;
          this.main.play();
          break;
        case 'duel':
          this.duel.currentTime = this.currentTime;
          this.duel.play();
          break;
        case 'reveal':
          this.reveal.currentTime = this.currentTime;
          this.reveal.play();
          break;
      }
    }
  }

  startMusic(title: string = '') {
    if (this.isMusic) {
      switch (title) {
        case 'main':
          this.game.pause();
          this.game.currentTime = 0;
          this.main.play();
          this.currentMusic = 'main'; // Enregistrer la musique en cours
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
        case 'game':
          this.game.pause();
          this.game.currentTime = 0;
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
          this.game.pause();
          this.game.currentTime = 0;
          this.duel.pause();
          this.duel.currentTime = 0;
          this.reveal.pause();
          this.reveal.currentTime = 17;
      }
    }
  }

  startSound(title: string = '') {
    if (this.isSound) {
      switch (title) {
        case 'button':
          this.button.play();
          break;
        case 'clic':
          this.clic.play();
          break;
        case 'pan':
          this.pan.play();
          break;
        case 'chrono':
          this.chrono.play();
          break;
        case 'alert':
          this.alert.play();
          break;
      }
    }
  }
}
