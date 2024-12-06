import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';  // Importation de RouterModule
import { CommonModule } from '@angular/common';  // Importation de CommonModule
@Component({
  selector: 'app-jinx',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './jinx.component.html',
  styleUrl: './jinx.component.scss'
})
export class JinxComponent {
// Définir un tableau statique de routes avec un 'path' et un 'name'
routes: { path: string; name: string }[] = [
  { path: '/', name: 'Accueil' },
  { path: '/vi', name: 'Vi' },
  { path: '/caitlyn', name: 'Caitlyn' },
  { path: '/jayce', name: 'Jayce' },
  { path: '/viktor', name: 'Viktor' }
];
title = 'Jinx - Un cocktail explosif de chaos et de génie 💥.';

  jinxBio = `Jinx est un personnage emblématique de l'univers d'Arcane et de League of Legends. Dans la série Arcane, elle est l'antagoniste principale dans la région de Piltover et Zaun. Elle est connue pour ses explosions colorées, ses jouets dangereux et son comportement imprévisible, ce qui la rend à la fois intrigante et terrifiante.

  Jinx a un passé marqué par la souffrance et la perte, ce qui a forgé sa personnalité chaotique et déstabilisée. D'abord innocente et attachée à sa sœur Vi, elle a traversé de nombreux événements traumatisants qui ont contribué à sa transformation en l'un des personnages les plus emblématiques de l'univers de League of Legends.`;

  jinxPowers = [
    'Explosions et armes de destruction massive',
    'Grande agilité et maîtrise des armes',
    'Comportement imprévisible et extrêmement dangereux'
  ];

  // Liste des apparitions dans la série
  appearances = [
    'Saison 1 - Episode 1 : Apparition en tant qu\'enfant',
    'Saison 1 - Episode 3 : Première rencontre avec Vi en tant qu\'adulte',
    'Saison 2 - Episode 8 : Jinx devient un protagoniste central'
  ];
constructor() {
  // Pas besoin de récupérer les routes dynamiquement du Router
  // Vous pouvez directement manipuler le tableau statique ci-dessus
}
}
