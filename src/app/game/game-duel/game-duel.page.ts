import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppUtilsService } from 'src/app/services/app-utils.service';
import { TwistService } from 'src/app/services/twist.service';

@Component({
  selector: 'app-game-duel',
  templateUrl: './game-duel.page.html',
  styleUrls: ['./game-duel.page.scss'],
})
export class GameDuelPage {
  public decision: string = 'keep';
  public description: string = 'Lors du duel, tu dois tout faire pour garder le téléphone à la fin.';
  public twist: any;
  public showReveal: boolean = true;
  public oneTime: boolean = false;

  // Variables pour le twist Compte à rebours
  public timeLeft: number = 3000; // 30 secondes en centièmes de seconde
  public timerRunning: boolean = false;
  public displayTime: string = '00:00:00'; // Format affiché (MM:SS:CC)
  private interval: any;

  // Variables pour le twist Roulette russe
  public bullet: boolean = false;
  private basePanChance: number = 0.05;  // Chance initiale de "PAN" (5 %)
  private panChance: number = this.basePanChance;  // Chance actuelle de "PAN"
  private shotsTaken: number = 0;  // Compteur de tirs

  constructor(private router: Router, private aus: AppUtilsService, private route: ActivatedRoute, private twistService: TwistService) { }

  ionViewWillEnter() {
    this.timeLeft = 3000;
    this.timerRunning = false;
    this.displayTime = '00:00:00';

    this.aus.setCancelDuel(false);

    this.bullet = false;
    this.basePanChance = 0.05;  // Chance initiale de "PAN" (5 %)
    this.panChance = this.basePanChance;  // Chance actuelle de "PAN"
    this.shotsTaken = 0;  // Compteur de tirs

    // Récupérer la décision passée
    this.decision = this.aus.getDecision();
    if (this.decision === 'bye') {
      this.description = 'Lors du duel, tu dois tout faire pour donner le téléphone à la fin.';
    }

    // Obtenir le twist
    this.twist = { ...this.twistService.getRandomTwist() };
    if (this.twist.id == undefined) {
      this.twist = null;
    }
    this.aus.setTwist(this.twist);

    // Si le twist est Compte à rebours, cacher le bouton Révéler
    if (this.twist && (this.twist.id === 'compte-a-rebours' || this.twist.id === 'roulette-russe' || this.twist.id === 'inversion'
      || this.twist.id === 'lies-jusqua-la-mort' || this.twist.id === 'democratie' || this.twist.id === 'remplacant'
      || this.twist.id === 'gladiateurs')
    ) {
      this.showReveal = false;
    }
  }

  // Méthode pour démarrer le chrono
  startTimer() {
    this.aus.animateButton('button-start-timer');
    setTimeout(() => {
      this.timerRunning = true;
      this.showReveal = true; // Afficher le bouton Révéler quand le temps est écoulé
      this.interval = setInterval(() => {
        if (this.timeLeft > 0) {
          this.timeLeft--;
          this.updateDisplayTime();
        } else {
          this.timerRunning = false;
          clearInterval(this.interval);

        }
      }, 10); // Intervalle de 10ms pour les centièmes de seconde
    }, 400);
  }

  // Mettre à jour l'affichage du temps restant
  updateDisplayTime() {
    const centiseconds = this.timeLeft % 100;
    const seconds = Math.floor((this.timeLeft / 100) % 60);
    const minutes = Math.floor(this.timeLeft / 6000);

    this.displayTime = `${this.formatTime(minutes)}:${this.formatTime(seconds)}:${this.formatTime(centiseconds)}`;
  }

  // Formater l'affichage en ajoutant un 0 si nécessaire
  formatTime(unit: number) {
    return unit < 10 ? '0' + unit : unit.toString();
  }

  shoot() {
    this.aus.animateButton('button-shoot');
    setTimeout(() => {
      this.shotsTaken++;  // Incrémenter le nombre de tirs
      this.oneTime = true;
      const randomChance = Math.random();  // Renvoie un nombre entre 0 et 1

      // Si randomChance <= 0.05 (5 % de chance), c'est "pan", sinon "clic"
      if (randomChance <= this.panChance) {
        this.bullet = true;  // Tir fatal
        this.showReveal = true;
      }
      // Tous les 3 tirs, augmenter la probabilité de "PAN" de 10 %
      if (this.shotsTaken % 3 === 0) {
        this.increasePanChance();
      }
    }, 400);
  }

  // Augmente la probabilité de "PAN" de 10 %
  increasePanChance() {
    this.panChance += 0.15;

    // Assure que la probabilité de "PAN" ne dépasse pas 100 %
    if (this.panChance > 1) {
      this.panChance = 1;
    }
  }

  // Méthode pour générer un choix aléatoire entre 'KEEP' et 'BYE'
  generateRandomDecision() {
    this.aus.animateButton('button-newcard');
    setTimeout(() => {
      this.description = 'Lors du duel, tu dois tout faire pour garder le téléphone à la fin.';
      const choices = ['keep', 'bye'];
      const randomIndex = Math.floor(Math.random() * choices.length);
      this.decision = choices[randomIndex]; // Stocker la décision dans une variable
      if (this.decision === 'bye') {
        this.description = 'Lors du duel, tu dois tout faire pour donner le téléphone à la fin.';
      }
      this.aus.setDecision(this.decision);
      this.showReveal = true;
      this.twist.card = true;
    }, 400);

  }

  // Retour à la page d'accueil
  goHome() {
    this.router.navigate(['/home']);
  }

  goNewTurn() {
    this.aus.animateButton('button-end');
    setTimeout(() => {
      this.router.navigate(['/game-decision']);
    }, 400);
  }

  goCancel() {
    this.aus.animateButton('button-cancel');
    this.aus.setCancelDuel(true);
    setTimeout(() => {
      this.router.navigate(['/game-reveal']);
    }, 400);
  }

  goVote() {
    this.aus.animateButton('button-vote');
    setTimeout(() => {
      this.router.navigate(['/game-reveal']);
    }, 400);
  }

  goReveal() {
    this.aus.animateButton('button-reveal');
    setTimeout(() => {
      this.router.navigate(['/game-reveal']);
    }, 400);

  }
}
