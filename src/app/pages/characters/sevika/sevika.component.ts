import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-sevika',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sevika.component.html',
  styleUrls: ['./sevika.component.scss'], // Correction : styleUrls au lieu de styleUrl
})
export class SevikaComponent {
  routes: { path: string; name: string }[] = [
    { path: '/', name: 'Accueil 🏠' },
    { path: '/histoire', name: "L'histoire 📖" },
    { path: '/vi', name: 'Vi 👊' },
    { path: '/vander', name: 'Vander 🍺🐺' },
    { path: '/caitlyn', name: 'Caitlyn ⭐🤠' },
    { path: '/jayce', name: 'Jayce ⚙️' },
    { path: '/viktor', name: 'Viktor 🔧' },
    { path: '/silco', name: 'Silco 🐍' },
    { path: '/ekko', name: 'Ekko ⏳' },
    { path: '/isha', name: 'Isha 🌱' },
    { path: '/quiz', name: 'Quiz 📝' },
    { path: '/game', name: 'Memory Game 🧠' },
    { path: '/fight', name: 'Fight🥊' },
  ];

}
