import { AnimationController, Animation } from '@ionic/angular';

export const customPageTransition = (baseEl: HTMLElement, opts?: any): Animation => {
  const animationCtrl = new AnimationController();
  
  const enteringAnimation = animationCtrl
    .create()
    .addElement(opts.enteringEl)
    .duration(500) // Durée en ms
    .easing('ease-in-out') // Type d'animation
    .fromTo('opacity', 0, 1) // Transition d'opacité
    .fromTo('transform', 'scale(1', 'scale(1)'); // Transition glissée depuis la droite

  const leavingAnimation = animationCtrl
    .create()
    .addElement(opts.leavingEl)
    .duration(100)
    .easing('ease-in-out')
    .fromTo('opacity', 1, 0)
    .fromTo('transform', 'translateX(0%)', 'translateX(0%)'); // Transition glissée vers la gauche

  return animationCtrl.create().addAnimation([enteringAnimation, leavingAnimation]);
};
