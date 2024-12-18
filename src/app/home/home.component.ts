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
    { path: 'histoire', name: 'L\'histoire'},
    { path: 'vi', name: 'Vi' },
    { path: 'jinx', name: 'Jinx' },
    { path: 'caitlyn', name: 'Caitlyn' },
    { path: 'jayce', name: 'Jayce' },
    { path: 'viktor', name: 'Viktor' },
    { path: 'silco', name: 'Silco' },   // Retirer le '/' ici
    { path: 'ekko', name: 'Ekko' },     // Retirer le '/' ici
    { path: 'isha', name: 'Isha' },     // Retirer le '/' ici
    { path: 'quiz', name: 'Quiz' },
    { path: 'game', name: 'Memory Game' },
    { path: 'fight', name: 'Fight' },
  ];

  title = 'Bienvenue dans le monde d\'Arcane'; // Titre de la page d'accueil
}
