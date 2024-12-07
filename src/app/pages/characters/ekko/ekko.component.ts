import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Ekko } from './ekko.model';  // Import du modèle Ekko

@Component({
  selector: 'app-ekko',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './ekko.component.html',
  styleUrls: ['./ekko.component.scss']  // Correction : styleUrls au lieu de styleUrl
})
export class EkkoComponent {
  routes: { path: string; name: string }[] = [
    { path: '/', name: 'Accueil' },
    { path: '/vi', name: 'Vi' },
    { path: '/jinx', name: 'Jinx' },
    { path: '/caitlyn', name: 'Caitlyn' },
    { path: '/jayce', name: 'Jayce' },
    { path: '/viktor', name: 'Viktor' }
  ];

  title = 'Ekko - Le Génie de Zaun ⏳';

  ekkoBio: Ekko[] = [
    {
      category: 'Origines et Caractéristiques',
      details: [
        "Ekko est un jeune prodige de Zaun, connu pour ses compétences exceptionnelles en ingénierie et en innovation.",
        "Il est le fondateur des Firelights, un groupe rebelle luttant contre l'oppression dans Zaun."
      ]
    },
    {
      category: 'Atmosphère et Environnement',
      details: [
        "Ekko évolue dans les bas-fonds industriels de Zaun, un endroit marqué par la pollution et la pauvreté.",
        "Malgré les conditions difficiles, Ekko utilise son ingéniosité pour créer des inventions à partir de pièces récupérées.",
        "L'environnement de Zaun est un mélange de technologie avancée et de ruines industrielles, reflétant les défis et les opportunités qu'Ekko rencontre."
      ]
    },
    {
      category: 'Capacités et Inventions',
      details: [
        "Ekko a créé un dispositif de manipulation temporelle, lui permettant de revenir quelques secondes en arrière pour rectifier ses erreurs.",
        "Ses inventions incluent également divers gadgets et armes, souvent fabriqués à partir de matériaux de récupération."
      ]
    },
    {
      category: 'Évolution dans Arcane',
      details: [
        "Dans Arcane, Ekko se bat pour libérer Zaun de l'oppression et de la corruption.",
        "Son personnage explore les thèmes de la résistance, de l'ingéniosité et de l'espoir face à l'adversité."
      ]
    },
    {
      category: 'Popularité et Appréciation',
      details: [
        "Ekko est apprécié pour son intelligence, sa détermination et son esprit rebelle.",
        "Sa capacité à transformer des ressources limitées en solutions innovantes en fait un symbole d'espoir et de résilience pour les habitants de Zaun."
      ]
    }
  ];

  ekkoPowers = [
    'Manipulation temporelle',
    'Ingéniosité et compétences en ingénierie',
    'Leadership et esprit rebelle'
  ];

  appearances = [
    'Saison 1 - Episode 4 : Introduction en tant que jeune inventeur',
    'Saison 1 - Episode 7 : Confrontation avec Jinx',
    'Saison 1 - Episode 9 : Utilisation de son dispositif temporel pour sauver ses amis'
  ];
}
