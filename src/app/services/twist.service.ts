import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TwistService {
  private twists = [
    {
      id: 'sans-un-bruit',
      title: 'Sans un bruit',
      description: 'Le provocateur n\'a plus le droit de parler jusqu\'à la fin du duel.',
      emoji: '🤐',
      card: true,
      revealTwist: false, // Caché
    },
    {
      id: 'ange-gardien',
      title: 'Ange gardien',
      description: 'Si la cible prend le téléphone, les deux duellistes sont sauvés. Sinon, les deux sont éliminés.',
      emoji: '😇',
      card: false,
      revealTwist: false, // Caché
    },
    {
      id: 'kamikaze',
      title: 'Kamikaze',
      description: 'Si la cible prend le téléphone, les deux duellistes sont éliminés. Sinon, ils sont sauvés.',
      emoji: '💣',
      card: false,
      revealTwist: false, // Caché
    },
    {
      id: 'democratie',
      title: 'Démocratie',
      description: 'Tous les joueurs (sauf les duellistes) votent pour garder l’un des deux duellistes.',
      emoji: '🗳️',
      card: false,
      revealTwist: true, // Obligatoire
    },
    {
      id: 'une-vie-de-plus',
      title: 'Une vie de plus',
      description: 'Le gagnant du duel gagne une vie supplémentaire.',
      emoji: '💖',
      card: true,
      revealTwist: false, // Caché
    },
    {
      id: 'mort-vivant',
      title: 'Mort vivant',
      description: 'Le provocateur joue contre le premier joueur éliminé sur sa gauche. Si le joueur mort gagne, il revient à la vie.',
      emoji: '🧟',
      card: true,
      revealTwist: true, // Obligatoire
    },
    {
      id: 'la-verite-si-je-mens',
      title: 'La vérité si je mens',
      description: 'Si le provocateur ment une seule fois, il est éliminé.',
      emoji: '🤥',
      card: true,
      revealTwist: false, // Caché
    },
    {
      id: 'esquive',
      title: 'L\'esquive',
      description: 'Le joueur éliminé esquive la mort si un joueur se trouve directement à la gauche de la cible.',
      emoji: '🏃‍♂️',
      card: true,
      revealTwist: false, // Caché
    },
    {
      id: 'roulette-russe',
      title: 'Roulette russe',
      description: 'Le provocateur et la cible appuient sur la détente à tour de rôle. Celui qui tire une balle est éliminé.',
      emoji: '🎲',
      card: false,
      revealTwist: true, // Obligatoire
    },
    {
      id: 'remplacant',
      title: 'Le remplaçant',
      description: 'Le provocateur choisit un autre joueur pour le remplacer dans le duel.',
      emoji: '🫵',
      card: false,
      revealTwist: true, // Obligatoire
    },
    {
      id: 'ennemi',
      title: 'L\'ennemi',
      description: 'Le provocateur choisit un autre joueur pour devenir la cible.',
      emoji: '🎯',
      card: true,
      revealTwist: true, // Obligatoire
    },
    {
      id: 'la-paix',
      title: 'La paix',
      description: 'Le provocateur peut choisir d\'annuler le duel.',
      emoji: '✌️',
      card: true,
      revealTwist: true, // Obligatoire
    },
    {
      id: 'conseiller',
      title: 'Le conseiller',
      description: 'La cible choisit un joueur qui décidera à sa place si elle doit prendre le téléphone ou non.',
      emoji: '🗣️',
      card: true,
      revealTwist: true, // Obligatoire
    },
    {
      id: 'inversion',
      title: 'Inversion',
      description: 'La cible devient provocateur et reçoit une nouvelle carte.',
      emoji: '🔄',
      card: false,
      revealTwist: true, // Obligatoire
    },
    {
      id: 'compte-a-rebours',
      title: 'Compte à rebours',
      description: 'La cible a 30 secondes pour décider de prendre ou non le téléphone. Passé ce délai, la carte doit être révélée.',
      emoji: '⏳',
      card: true,
      revealTwist: true, // Obligatoire
    },
    {
      id: 'lies-jusqua-la-mort',
      title: 'Liés jusqu\'à la mort',
      description: 'Le duel est annulé. Le provocateur et la cible sont liés au même destin jusqu\'à la fin de la partie.',
      emoji: '🤝',
      card: false,
      revealTwist: true, // Obligatoire
    },
    {
      id: 'gladiateurs',
      title: 'Les gladiateurs',
      description: 'Le provocateur choisit un nouveau provocateur et une cible parmi les duellistes.',
      emoji: '🗡️',
      card: false,
      revealTwist: true, // Obligatoire
    }
  ];



  constructor() {}

  getRandomTwist(id:string='') {
    if (id !== '') {
      return this.twists.find(twist => twist.id === id);
    }
    const randomChance = Math.random(); // Renvoie un nombre entre 0 et 1

    // Si randomChance est inférieur ou égal à 0.5, il n'y a pas de twist
    if (randomChance <= 0.5) {
      return null; // Pas de twist
    }

    // Sinon, un twist est choisi aléatoirement
    const randomIndex = Math.floor(Math.random() * this.twists.length);
    return this.twists[randomIndex];
  }
}
