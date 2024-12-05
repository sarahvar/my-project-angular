import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';  // Importation de RouterModule
import { CommonModule } from '@angular/common';  // Importation de CommonModule

@Component({
  selector: 'app-jayce',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './jayce.component.html',
  styleUrl: './jayce.component.scss'
})
export class JayceComponent {
  // Définir un tableau statique de routes avec un 'path' et un 'name'
  routes: { path: string; name: string }[] = [
    { path: '/', name: 'Accueil' },
    { path: '/vi', name: 'Vi' },
    { path: '/jinx', name: 'Jinx' },
    { path: '/caitlyn', name: 'Caitlyn' },  // Assurez-vous que le chemin est correct', name: 'Jayce' },
    { path: '/viktor', name: 'Viktor' }
  ];

}
