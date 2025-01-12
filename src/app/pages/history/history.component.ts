import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  title: string | undefined;
  mainContent: string | undefined;
  sections: { header: string; content: string }[] = []; // Initialisation de la propriété sections
  routes: { path: string; name: string }[] = [
    { path: '/', name: 'Accueil 🏠' },
    { path: '/vi', name: 'Vi 👊' },
    { path: '/jinx', name: 'Jinx 💥' },
    { path: '/vander', name: 'Vander 🍺🐺'},
    { path: '/caitlyn', name: 'Caitlyn ⭐🤠' },
    { path: '/jayce', name: 'Jayce ⚙' },
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

  constructor() { }

  ngOnInit(): void {
    this.title = 'La série Arcane, disponible sur Netflix, est une adaptation de l\'univers de League of Legends.';
    this.mainContent = 'Elle raconte une histoire captivante ancrée dans le conflit entre deux cités jumelles : Piltover, une ville brillante et prospère, et Zaun, son opposé sombre et industrialisé.';
    this.sections = [
      {
        header: 'Origines des personnages',
        content: 'L\'intrigue explore les origines de plusieurs personnages emblématiques du jeu, notamment Vi, Jinx, Caitlyn, Jayce et Viktor.'
      },
      {
        header: 'L\'histoire de Vi et Jinx',
        content: 'L\'intrigue principale tourne autour de Violet (Vi) et Powder (Jinx), deux sœurs aux relations complexes marquées par la tragédie, l\'amour et la perte. Ce duo est central dans un univers où la lutte pour le pouvoir, la quête de justice, et les découvertes technologiques comme l\'Hextech transforment leur monde.'
      },
      {
        header: 'Découvertes technologiques',
        content: 'Jayce et Viktor, par exemple, explorent le potentiel de cette magie technologique, avec des conséquences éthiques et personnelles profondes.'
      },
      {
        header: 'Narration intimiste',
        content: 'Arcane se distingue par une narration intimiste, où les relations entre les personnages – qu\'elles soient amicales, familiales, ou conflictuelles – sont au cœur du récit, offrant une profondeur émotionnelle rare dans les séries d\'animation.'
      }
    ];
  }
}
