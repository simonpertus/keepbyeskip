import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AnimationController } from '@ionic/angular';
import { AppUtilsService } from 'src/app/services/app-utils.service';
import { AudioService } from 'src/app/services/audio.service';

@Component({
  selector: 'app-game-decision',
  templateUrl: './game-decision.page.html',
  styleUrls: ['./game-decision.page.scss'],
})
export class GameDecisionPage {

  public maxSkips: number = this.generateRandomSkips();
  public skipsRemaining: number=0;
  public decision: string = 'keep';
  public description: string = 'Lors du duel, tu dois tout faire pour garder le téléphone à la fin.';

  constructor(private router: Router, private aus: AppUtilsService,private audioService: AudioService) {}

  ionViewWillEnter () {
    this.audioService.startMusic('game');

    //console.log('Initialisation de la décision');
    this.maxSkips = this.generateRandomSkips();
    this.skipsRemaining = this.maxSkips;
    this.generateRandomDecision();
  }

  goHome() {
    this.router.navigate(['/home']);
  }


  // Génère un nombre aléatoire entre 1 et 12
  generateRandomSkips(): number {
    return Math.floor(Math.random() * 12) + 1;
  }

  // Méthode pour générer un choix aléatoire entre 'KEEP' et 'BYE'
  generateRandomDecision() {
    //console.log('Choix en cours');
    const choices = ['keep', 'bye'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    this.decision = choices[randomIndex]; // Stocker la décision dans une variable
    if (this.decision === 'bye') {
      this.description = 'Lors du duel, tu dois tout faire pour donner le téléphone à la fin.';
    }
  }

  onSkip() {
    if (this.skipsRemaining > 0) {
      this.aus.animateButton('button-skip');
      this.skipsRemaining--;
    }
  }

  onDuel() {
    this.aus.animateButton('button-duel');
    setTimeout(() => {
      this.aus.setDecision(this.decision);
      this.router.navigate(['/game-duel']);
    }, 400);
  }


}
