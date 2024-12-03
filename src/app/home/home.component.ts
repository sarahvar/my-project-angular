import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';  // Importation de RouterModule
import { CommonModule } from '@angular/common';  // Importation de CommonModule

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],  // Ajout des modules nécessaires ici
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  // Définir un tableau statique de routes avec un 'path' et un 'name'
  routes: { path: string; name: string }[] = [
    { path: 'vi', name: 'vi' },
    { path: 'jinx', name: 'jinx' },
    { path: 'caitlyn', name: 'caitlyn' },
    { path: 'jayce', name: 'jayce' },
    { path: 'viktor', name: 'viktor' }
  ];

  constructor() {
    // Pas besoin de récupérer les routes dynamiquement du Router
    // Vous pouvez directement manipuler le tableau statique ci-dessus
  }
}

