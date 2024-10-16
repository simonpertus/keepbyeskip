import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppUtilsService } from 'src/app/services/app-utils.service';
import { TwistService } from 'src/app/services/twist.service';

@Component({
  selector: 'app-game-duel',
  templateUrl: './game-duel.page.html',
  styleUrls: ['./game-duel.page.scss'],
})
export class GameDuelPage implements OnInit {
  public decision: string = 'keep';
  public description: string = 'Lors du duel, tu dois tout faire pour garder le téléphone à la fin.';
  public twist: any;
  public showReveal: boolean = true;
  public oneTime:boolean = false;

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

  ngOnInit() {
    // Récupérer la décision passée en tant que paramètre
    this.route.queryParams.subscribe(params => {
      this.decision = this.aus.getDecision();
      if (this.decision === 'bye') {
        this.description = 'Lors du duel, tu dois tout faire pour donner le téléphone à la fin.';
      }
    });
    
    // Obtenir le twist
    this.twist = this.twistService.getRandomTwist('roulette-russe');

    // Si le twist est Compte à rebours, cacher le bouton Révéler
    if (this.twist.id === 'compte-a-rebours' || this.twist.id === 'roulette-russe') {
      this.showReveal = false;
    }
  }

  // Méthode pour démarrer le chrono
  startTimer() {
    this.timerRunning = true;
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
        this.updateDisplayTime();
      } else {
        this.timerRunning = false;
        clearInterval(this.interval);
        this.showReveal = true; // Afficher le bouton Révéler quand le temps est écoulé
      }
    }, 10); // Intervalle de 10ms pour les centièmes de seconde
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
  }

  // Augmente la probabilité de "PAN" de 10 %
  increasePanChance() {
    this.panChance += 0.15;

    // Assure que la probabilité de "PAN" ne dépasse pas 100 %
    if (this.panChance > 1) {
      this.panChance = 1;
    }
    console.log(`Nouvelle probabilité de PAN: ${this.panChance * 100}%`);
  }

  // Retour à la page d'accueil
  goHome() {
    this.router.navigate(['/home']);
  }
}
