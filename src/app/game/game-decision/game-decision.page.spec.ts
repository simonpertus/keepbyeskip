import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GameDecisionPage } from './game-decision.page';

describe('GameDecisionPage', () => {
  let component: GameDecisionPage;
  let fixture: ComponentFixture<GameDecisionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GameDecisionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
