import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';  // Importation de RouterModule
import { CommonModule } from '@angular/common';  // Importation de CommonModule

@Component({
  selector: 'app-caitlyn',
  standalone: true,
  imports: [CommonModule, RouterModule],  // Ajout des modules nécessaires ici
  templateUrl: './caitlyn.component.html',
  styleUrls: ['./caitlyn.component.scss']
})

  export class CaitlynComponent {
    title = 'Caitlyn - La Shérif de Piltover ⭐🤠';
    bio = `Caitlyn est une détective brillante de Piltover. Réputée pour sa
            détermination et son sens de la justice, elle s'allie souvent avec Vi
            pour résoudre les mystères les plus complexes et défendre sa ville.`;

    abilities = ['Tir de précision', 'Pièges tactiques', 'Sniper d\'élite'];
    series = ['Saison 1 - Épisodes 3 à 9'];
  // Définir un tableau statique de routes avec un 'path' et un 'name'
  routes: { path: string; name: string }[] = [
    { path: '/', name: 'Accueil' },
    { path: '/vi', name: 'Vi' },
    { path: '/jinx', name: 'Jinx' },
    { path: '/jayce', name: 'Jayce' },
    { path: '/viktor', name: 'Viktor' }
  ];

  constructor() {
    // Pas besoin de récupérer les routes dynamiquement du Router
    // Vous pouvez directement manipuler le tableau statique ci-dessus
  }
}

