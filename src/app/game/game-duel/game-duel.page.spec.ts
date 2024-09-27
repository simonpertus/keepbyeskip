import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GameDuelPage } from './game-duel.page';

describe('GameDuelPage', () => {
  let component: GameDuelPage;
  let fixture: ComponentFixture<GameDuelPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GameDuelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
