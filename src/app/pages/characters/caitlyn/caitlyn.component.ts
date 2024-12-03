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
  // Définir un tableau statique de routes avec un 'path' et un 'name'
  routes: { path: string; name: string }[] = [
    { path: '/home', name: 'Home' },
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

