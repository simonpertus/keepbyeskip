import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppUtilsService } from 'src/app/services/app-utils.service';
import { AudioService } from 'src/app/services/audio.service';
import { TwistService } from 'src/app/services/twist.service';

@Component({
  selector: 'app-game-reveal',
  templateUrl: './game-reveal.page.html',
  styleUrls: ['./game-reveal.page.scss'],
})
export class GameRevealPage {
  public decision: string = 'keep';
  public description: string = 'Lors du duel, tu dois tout faire pour garder le téléphone à la fin.';
  public twist: any;
  public cancelReveal: boolean = false;

  constructor(private router: Router, private aus: AppUtilsService, private route: ActivatedRoute, private twistService: TwistService,private audioService: AudioService) { }

  ionViewWillEnter() {
    this.audioService.startMusic('game');

    // Récupérer la décision passée
    this.decision = this.aus.getDecision();
    if (this.decision === 'bye') {
      this.description = 'Lors du duel, tu dois tout faire pour donner le téléphone à la fin.';
    }

    this.cancelReveal = this.aus.isCancelDuel();

    // Obtenir le twist
    this.twist = this.aus.getTwist();
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

}
