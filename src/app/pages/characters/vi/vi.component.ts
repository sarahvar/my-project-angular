import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';  // Importation de RouterModule
import { CommonModule } from '@angular/common';  // Importation de CommonModule


@Component({
  selector: 'app-vi',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './vi.component.html',
  styleUrl: './vi.component.scss'
})
export class ViComponent {
 // Définir un tableau statique de routes avec un 'path' et un 'name'
 routes: { path: string; name: string }[] = [
  { path: '/', name: 'Accueil 👊' },
  { path: 'histoire', name: 'L\'histoire 👊' },
  { path: '/jinx', name: 'Jinx 👊' },
  { path: '/caitlyn', name: 'Caitlyn 👊' },
  { path: '/jayce', name: 'Jayce 👊' },
  { path: '/viktor', name: 'Viktor 👊' },
  { path: '/silco', name: 'Silco 👊' },
  { path: '/ekko', name: 'Ekko 👊' },
  { path: '/isha', name: 'Isha 👊' },
  { path: '/quiz', name: 'Quiz 👊' },
  { path: '/game', name: 'Memory Game 👊' },
  { path: '/fight', name: 'Fight 👊' },
];

// Histoire de Vi
arcaneStory = `
Vi est une jeune femme audacieuse, dynamique et puissante, née dans les bas-fonds de Zaun. Elle utilise des poings métalliques comme armes principales et est une combattante de talent.
Elle a une relation complexe avec sa sœur Jinx et se retrouve souvent dans des situations où ses choix moraux sont mis à l'épreuve.
Dans Arcane, Vi évolue, devenant un personnage plus nuancé, avec une relation croissante avec Caitlyn.
Vi est l'un des personnages les plus appréciés de Arcane, notamment pour sa force physique et son courage, mais aussi pour la profondeur émotionnelle que le show lui confère, faisant d'elle un personnage complexe au-delà de ses capacités de combattante.
`;
}
