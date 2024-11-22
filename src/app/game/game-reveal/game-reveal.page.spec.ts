import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GameRevealPage } from './game-reveal.page';

describe('GameRevealPage', () => {
  let component: GameRevealPage;
  let fixture: ComponentFixture<GameRevealPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GameRevealPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
