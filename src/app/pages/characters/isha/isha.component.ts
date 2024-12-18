import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Isha } from './isha.model';  // Import du modèle Isha

@Component({
  selector: 'app-isha',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './isha.component.html',
  styleUrls: ['./isha.component.scss']  // Correction : styleUrls au lieu de styleUrl
})
export class IshaComponent {
  routes: { path: string; name: string }[] = [
    { path: '/', name: 'Accueil' },
    { path: '/histoire', name: 'L\'histoire'},
    { path: '/vi', name: 'Vi' },
    { path: '/jinx', name: 'Jinx' },
    { path: '/caitlyn', name: 'Caitlyn' },
    { path: '/jayce', name: 'Jayce' },
    { path: '/viktor', name: 'Viktor' },
    { path: '/silco', name: 'Silco' },
    { path: '/ekko', name: 'Ekko' },
    { path: '/quiz', name: 'Quiz' },
    { path: '/game', name: 'Memory Game' },
    { path: '/fight', name: 'Fight' },
  ];

  title = 'Isha - L\'Espoir de Zaun 🌱';

  ishaBio: Isha[] = [
    {
      category: 'Origines et Caractéristiques',
      details: [
        "Isha est une enfant orpheline et non verbale qui devient la compagne inattendue de Jinx.",
        "Connue pour son esprit résilient et sa capacité à inspirer l'espoir, elle imite les cheveux bleus emblématiques de Jinx, renforçant l'influence de Jinx sur elle."
      ]
    },
    {
      category: 'Relation avec Jinx',
      details: [
        "Isha, surnommée « Baby Jinx », est dévouée à Jinx, la voyant comme un mentor et une protectrice.",
        "Elle suit Jinx partout, soulignant son courage et sa détermination inébranlable."
      ]
    },
    {
      category: 'Impact sur Jinx',
      details: [
        "Isha symbolise le dernier vestige d’innocence chez Jinx, laissant entrevoir un chemin potentiel vers la rédemption.",
        "En assumant un rôle de protectrice, Jinx est confrontée à la vulnérabilité d’Isha, contrastant avec son mode de vie chaotique et violent.",
        "Cette dynamique pourrait inspirer un côté plus doux à Jinx, la reconnectant à son propre passé traumatisant."
      ]
    },
    {
      category: 'Évolution dans Arcane',
      details: [
        "Dans Arcane, Isha joue un rôle clé dans l’arc narratif de Jinx, créant des tensions et influençant les interactions entre Jinx, Vi et Caitlyn."
      ]
    },
    {
      category: 'Popularité et Appréciation',
      details: [
        "Isha est appréciée pour son dévouement, son altruisme et sa capacité à inspirer Jinx.",
        "Sa présence renforce les enjeux émotionnels de la série et ouvre des perspectives sur la dynamique complexe des personnages."
      ]
    }
  ];

  ishaPowers = [
    'Capacité à inspirer et motiver',
    'Loyauté et courage',
    'Influence positive sur Jinx'
  ];

  appearances = [
    'Saison 2 - Episode 1 : Introduction en tant que « Baby Jinx »',
    'Saison 2 - Episode 3 : Confrontation entre Jinx et Vi',
  ];
}
