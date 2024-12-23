import { Injectable } from '@angular/core';
import { AudioService } from './audio.service';

@Injectable({
  providedIn: 'root'
})
export class AppUtilsService {
  private decision: string = 'keep';
  private twist: any = null;
  private cancelDuel: boolean = false;

  constructor(private audioService: AudioService) { }

  setDecision(decision: string) {
    this.decision = decision;
  }

  getDecision(): string {
    return this.decision;
  }

  setCancelDuel(cancelDuel: boolean) {
    this.cancelDuel = cancelDuel;
  }

  isCancelDuel(): boolean {
    return this.cancelDuel;
  }

  setTwist(twist: any) {
    this.twist = twist;
  }

  getTwist(): any {
    return this.twist;
  }

  animateButton(buttonId: string, sound: boolean = true) {
    const button = document.getElementById(buttonId);
    if (sound){
      this.audioService.startSound('button');
    }
    if (button) {
      // Ajoute la classe 'active' pour lancer l'animation
      button.classList.add('active');
      setTimeout(() => {
        button.classList.remove('active');
      }, 200);
    }
  }
}
