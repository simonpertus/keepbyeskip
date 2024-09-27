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
  public decision: string ='keep';
  public description: string = 'Lors du duel, tu dois tout faire pour garder le téléphone à la fin.';
  public twist: any;

  constructor(private router: Router, private aus: AppUtilsService,private route: ActivatedRoute,private twistService: TwistService) { }

  
  ngOnInit() {
     // Récupérer la décision passée en tant que paramètre
     this.route.queryParams.subscribe(params => {
      this.decision = this.aus.getDecision();
      if(this.decision==='bye'){
        this.description = 'Lors du duel, tu dois tout faire pour donner le téléphone à la fin.';
      }
    });
    this.twist = this.twistService.getRandomTwist();
  }

  goHome() {
    this.router.navigate(['/home']);
  }

}
