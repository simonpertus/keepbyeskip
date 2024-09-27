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
      card:true,
      revealTwist:false,
    },
    {
      title: 'Ange gardien',
      description: 'Si la cible prend le téléphone, les deux duellistes sont sauvés. Sinon, les deux sont éliminés.',
      emoji: '😇',
      card:false,
      revealTwist:false,
    },
    {
      title: 'Kamikaze',
      description: 'Si la cible prend le téléphone, les deux duellistes sont éliminés. Sinon, ils sont sauvés.',
      emoji: '💣',
      card:false,
      revealTwist:false,
    },
    {
      title: 'Démocratie',
      description: 'Tous les joueurs (sauf les duellistes) votent pour garder l’un des deux duellistes.',
      emoji: '🗳️',
      card:false,
      revealTwist:true,
    },
    {
      title: 'Une vie de plus',
      description: 'Le gagnant du duel gagne une vie supplémentaire.',
      emoji: '💖',
      card:true,
      revealTwist:false,
    },
    {
      title: 'Mort vivant',
      description: 'Le provocateur joue contre le premier joueur éliminé sur sa gauche. Si le joueur mort gagne, il revient à la vie.',
      emoji: '🧟',
      card:true,
      revealTwist:true,
    },
    {
      title: 'La vérité si je mens',
      description: 'Si le provocateur ment une seule fois, il est éliminé.',
      emoji: '🤥',
      card:true,
      revealTwist:false,
    },
    {
      title: 'L\'esquive',
      description: 'Le joueur éliminé esquive la mort si un joueur se trouve à la gauche de la cible.',
      emoji: '🏃‍♂️',
      card:true,
      revealTwist:false,
    },
    {
      title: 'Roulette russe',
      description: 'Le provocateur et la cible tirent à tour de rôle. Celui qui tire "Bye" en premier est éliminé.',
      emoji: '🎲',
      card:false,
      revealTwist:true,
    },
    {
      title: 'Le remplaçant',
      description: 'Le provocateur choisit un autre joueur pour le remplacer dans le duel.',
      emoji: '🫵',
      card:true,
      revealTwist:true,
    },
    {
      title: 'L\'ennemi',
      description: 'Le provocateur choisit un autre joueur pour devenir la cible.',
      emoji: '🎯',
      card:true,
      revealTwist:true,
    },
    {
      title: 'La paix',
      description: 'Le provocateur peut choisir d\'annuler le duel.',
      emoji: '✌️',
      card:true,
      revealTwist:true,
    },
    {
      title: 'Le conseiller',
      description: 'La cible choisit un joueur qui décidera si elle doit prendre le téléphone ou non.',
      emoji: '🗣️',
      card:true,
      revealTwist:true,
    },
    {
      title: 'Inversion',
      description: 'La cible devient provocateur et reçoit une nouvelle carte.',
      emoji: '🔄',
      card:false,
      revealTwist:true,
    },
  ];

  constructor() {}

  getRandomTwist() {
    const randomChance = Math.random(); // Renvoie un nombre entre 0 et 1

    // Si randomChance est inférieur ou égal à 0.5, il n'y a pas de twist
    console.log(randomChance);
    if (randomChance <= 0.5) {
      return null; // Pas de twist
    }

    // Sinon, un twist est choisi aléatoirement
    const randomIndex = Math.floor(Math.random() * this.twists.length);
    return this.twists[randomIndex];
  }
}
