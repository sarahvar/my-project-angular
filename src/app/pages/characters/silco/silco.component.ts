import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Silco } from './silco.model';  // Import du modèle Silco

@Component({
  selector: 'app-silco',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './silco.component.html',
  styleUrls: ['./silco.component.scss']  // Correction : styleUrls au lieu de styleUrl
})
export class SilcoComponent {
  routes: { path: string; name: string }[] = [
    { path: '/', name: 'Accueil' },
    { path: '/vi', name: 'Vi' },
    { path: '/jinx', name: 'Jinx' },
    { path: '/caitlyn', name: 'Caitlyn' },
    { path: '/jayce', name: 'Jayce' },
    { path: '/viktor', name: 'Viktor' },
    { path: '/histoire', name: 'Histoire' },
    { path: '/ekko', name: 'Ekko' },
    { path: '/isha', name: 'Isha' },

  ];

  title = 'Silco - Le Maître de Zaun 🐍';

  silcoBio: Silco[] = [
    {
      category: 'Origines et Caractéristiques',
      details: [
        "Silco est un chef criminel influent de Zaun, déterminé à asseoir son pouvoir sur la région.",
        "Il est connu pour sa personnalité charismatique mais impitoyable, capable de manipuler et d'inspirer la peur."
      ]
    },
    {
      category: 'Relation avec Vander',
      details: [
        "Silco et Vander étaient autrefois des partenaires proches, luttant ensemble pour l'indépendance de Zaun.",
        "Un conflit idéologique a éclaté entre eux, menant à une trahison qui a laissé Silco avec une cicatrice permanente sur le visage."
      ]
    },
    {
      category: 'Transformation de Jinx',
      details: [
        "Après l'explosion sur le pont, Silco prend Powder sous son aile et la renomme Jinx.",
        "Il exploite ses insécurités et sa vulnérabilité, la transformant en une redoutable criminelle."
      ]
    },
    {
      category: 'Évolution dans Arcane',
      details: [
        "Dans Arcane, Silco poursuit sans relâche son objectif de domination, utilisant la force, la manipulation et la ruse.",
        "Son personnage est complexe, explorant les thèmes de pouvoir, trahison et sacrifice."
      ]
    },
    {
      category: 'Popularité et Appréciation',
      details: [
        "Silco est apprécié pour son charisme sombre et ses stratégies machiavéliques.",
        "Sa relation avec Jinx et ses motivations profondes le rendent à la fois fascinant et redoutable."
      ]
    }
  ];

  silcoPowers = [
    'Manipulation et charisme',
    'Intelligence stratégique',
    'Capacité à inspirer la peur et la loyauté'
  ];

  appearances = [
    'Saison 1 - Episode 1 : Introduction en tant que chef criminel',
    'Saison 1 - Episode 3 : Prise en charge de Powder',
    'Saison 1 - Episode 5 : Confrontation avec Vander'
  ];
}
