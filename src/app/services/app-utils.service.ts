import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppUtilsService {
  private decision: string = 'keep';

  constructor() { }

  setDecision(decision: string) {
    this.decision = decision;
  }

  getDecision(): string {
    return this.decision;
  }
  
  animateButton(buttonId: string) {
    const button = document.getElementById(buttonId);
    if (button) {
      // Ajoute la classe 'active' pour lancer l'animation
      button.classList.add('active');
      setTimeout(() => {
        button.classList.remove('active');
      }, 200);
    }
  }
}
