import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TwistService {
  private twists = [
    {
      title: 'Sans un bruit',
      description: 'Le provocateur n\'a plus le droit de parler jusqu\'à la fin du duel.',
      emoji: '🤐',
    },
    {
      title: 'Ange gardien',
      description: 'Si la cible prend le téléphone, les deux duellistes sont sauvés. Sinon, les deux sont éliminés.',
      emoji: '😇',
    },
    {
      title: 'Kamikaze',
      description: 'Si la cible prend le téléphone, les deux duellistes sont éliminés. Sinon, ils sont sauvés.',
      emoji: '💣',
    },
    {
      title: 'Démocratie',
      description: 'Tous les joueurs (sauf les duellistes) votent pour garder l’un des deux duellistes.',
      emoji: '🗳️',
    },
    {
      title: 'Une vie de plus',
      description: 'Le gagnant du duel gagne une vie supplémentaire.',
      emoji: '💖',
    },
    {
      title: 'Mort vivant',
      description: 'Le provocateur joue contre le premier joueur éliminé sur sa gauche. Si le joueur mort gagne, il revient à la vie.',
      emoji: '🧟',
    },
    {
      title: 'La vérité si je mens',
      description: 'Si le provocateur ment une seule fois, il est éliminé.',
      emoji: '🤥',
    },
    {
      title: 'L\'esquive',
      description: 'Le joueur éliminé esquive la mort si un joueur se trouve à la gauche de la cible.',
      emoji: '🏃‍♂️',
    },
    {
      title: 'Roulette russe',
      description: 'Le provocateur et la cible tirent à tour de rôle. Celui qui tire "Bye" en premier est éliminé.',
      emoji: '🎲',
    },
    {
      title: 'Le remplaçant',
      description: 'Le provocateur choisit un autre joueur pour le remplacer dans le duel.',
      emoji: '🫵',
    },
    {
      title: 'L\'ennemi',
      description: 'Le provocateur choisit un autre joueur pour devenir la cible.',
      emoji: '🎯',
    },
    {
      title: 'La paix',
      description: 'Le provocateur peut choisir d\'annuler le duel.',
      emoji: '✌️',
    },
    {
      title: 'Le conseiller',
      description: 'La cible choisit un joueur qui décidera si elle doit prendre le téléphone ou non.',
      emoji: '🗣️',
    },
    {
      title: 'Inversion',
      description: 'La cible devient provocateur et reçoit une nouvelle carte.',
      emoji: '🔄',
    },
  ];

  constructor() {}

  getRandomTwist() {
    const randomChance = Math.random(); // Renvoie un nombre entre 0 et 1

    // Si randomChance est inférieur ou égal à 0.15, il n'y a pas de twist
    if (randomChance <= 0.2) {
      return null; // Pas de twist
    }

    // Sinon, un twist est choisi aléatoirement
    const randomIndex = Math.floor(Math.random() * this.twists.length);
    return this.twists[randomIndex];
  }
}
