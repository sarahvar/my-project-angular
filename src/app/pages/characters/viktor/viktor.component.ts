import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';  // Importation de RouterModule
import { CommonModule } from '@angular/common';  // Importation de CommonModule
@Component({
  selector: 'app-viktor',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './viktor.component.html',
  styleUrl: './viktor.component.scss'
})
export class ViktorComponent {
// Définir un tableau statique de routes avec un 'path' et un 'name'
routes: { path: string; name: string }[] = [
  { path: '/', name: 'Accueil' },
  { path: '/jinx', name: 'Jinx' },
  { path: '/caitlyn', name: 'Caitlyn' },
  { path: '/jayce', name: 'Jayce' },
  { path: '/vi', name: 'Vi' }
];
constructor() {
  // Pas besoin de récupérer les routes dynamiquement du Router
  // Vous pouvez directement manipuler le tableau statique ci-dessus
}
}
