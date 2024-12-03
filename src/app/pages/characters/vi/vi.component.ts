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
  { path: '/', name: 'Home' },
  { path: '/jinx', name: 'Jinx' },
  { path: '/caitlyn', name: 'Caitlyn' },
  { path: '/jayce', name: 'Jayce' },
  { path: '/viktor', name: 'Viktor' }
];
constructor() {
  // Pas besoin de récupérer les routes dynamiquement du Router
  // Vous pouvez directement manipuler le tableau statique ci-dessus
}
}
