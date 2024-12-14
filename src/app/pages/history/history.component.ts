import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';  // Importation de RouterModule
import { CommonModule } from '@angular/common';  // Importation de CommonModule

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [CommonModule, RouterModule],  // Ajout des modules nécessaires ici
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent {
  // Définir un tableau statique de routes avec un 'path' et un 'name'
  routes: { path: string; name: string }[] = [
    { path: '/', name: 'Accueil' },
    { path: '/caitlyn', name: 'Caitlyn' },
    { path: '/vi', name: 'Vi' },
    { path: '/jinx', name: 'Jinx' },
    { path: '/jayce', name: 'Jayce' },
    { path: '/viktor', name: 'Viktor' },
    { path: '/silco', name: 'Silco' },
    { path: '/ekko', name: 'Ekko' },
    { path: '/isha', name: 'Isha' },
    { path: '/quiz', name: 'Quiz' },
    { path: '/game', name: 'Memory Game' },
    { path: '/fight', name: 'Fight' },
  ];

  arcaneStory: string = `
    La série Arcane, disponible sur Netflix, est une adaptation de l'univers de League of Legends. Elle raconte une histoire captivante ancrée dans le conflit entre deux cités jumelles : Piltover, une ville brillante et prospère, et Zaun, son opposé sombre et industrialisé.
    L'intrigue explore les origines de plusieurs personnages emblématiques du jeu, notamment Vi, Jinx, Caitlyn, Jayce et Viktor.

    L'intrigue principale tourne autour de Violet (Vi) et Powder (Jinx), deux sœurs aux relations complexes marquées par la tragédie, l'amour et la perte. Ce duo est central dans un univers où la lutte pour le pouvoir, la quête de justice, et les découvertes technologiques comme l'Hextech transforment leur monde. Jayce et Viktor, par exemple, explorent le potentiel de cette magie technologique, avec des conséquences éthiques et personnelles profondes.

    Arcane se distingue par une narration intimiste, où les relations entre les personnages – qu'elles soient amicales, familiales, ou conflictuelles – sont au cœur du récit, offrant une profondeur émotionnelle rare dans les séries d'animation.
  `;

}
