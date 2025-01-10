
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';  // Importation de RouterModule
import { CommonModule } from '@angular/common';  // Importation de CommonModule


@Component({
  selector: 'app-vander',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './vander.component.html',
  styleUrl: './vander.component.scss'
})
export class VanderComponent {
 // Définir un tableau statique de routes avec un 'path' et un 'name'
 routes: { path: string; name: string }[] = [
  { path: '/', name: 'Accueil 🏠' },
  { path: '/histoire', name: 'L\'histoire 📖' },
  { path: '/vi', name: 'Vi 👊'},
  { path: '/jinx', name: 'Jinx 💥' },
  { path: '/caitlyn', name: 'Caitlyn ⭐🤠' },
  { path: '/jayce', name: 'Jayce ⚙️' },
  { path: '/viktor', name: 'Viktor 🔧' },
  { path: '/silco', name: 'Silco 🐍' },
  { path: '/ekko', name: 'Ekko ⏳' },
  { path: '/isha', name: 'Isha 🌱' },
  { path: '/sevika', name: 'Sevika 🦾'},
  { path: '/mel', name: 'Mel 🌟'},
  { path: '/quiz', name: 'Quiz 📝' },
  { path: '/game', name: 'Memory Game 🧠' },
  { path: '/fight', name: 'Fight 🥊' },
];

}
