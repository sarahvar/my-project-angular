import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Viktor } from './viktor.model';  // Import du modèle Viktor

@Component({
  selector: 'app-viktor',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './viktor.component.html',
  styleUrls: ['./viktor.component.scss']  // Correction : styleUrls au lieu de styleUrl
})
export class ViktorComponent {
  routes: { path: string; name: string }[] = [
    { path: '/', name: 'Accueil 🏠' },
    { path: '/histoire', name: 'L\'histoire 📖' },
    { path: '/vi', name: 'Vi 👊' },
    { path: '/jinx', name: 'Jinx 💥' },
    { path: '/caitlyn', name: 'Caitlyn ⭐🤠' },
    { path: '/jayce', name: 'Jayce ⚙️' },
    { path: '/silco', name: 'Silco 🐍' },
    { path: '/ekko', name: 'Ekko ⏳' },
    { path: '/isha', name: 'Isha 🌱' },
    { path: '/quiz', name: 'Quiz 📝' },
    { path: '/game', name: 'Memory Game 🧠' },
    { path: '/fight', name: 'Fight 🥊' },
  ];

  title = 'Viktor - Le Visionnaire de Zaun 🔧';

  viktorBio: Viktor[] = [
    {
      category: 'Origines et Caractéristiques',
      details: [
        "Viktor est un brillant scientifique originaire de Zaun, doté d'une vision unique pour l'avenir de la technologie.",
        "Il travaille sans relâche pour améliorer la vie des habitants de Zaun à travers ses inventions."
      ]
    },
    {
      category: 'Relation avec Jayce',
      details: [
        "Viktor collabore étroitement avec Jayce, un autre scientifique brillant de Piltover.",
        "Leur partenariat est marqué par de nombreuses découvertes révolutionnaires et par des défis éthiques."
      ]
    },
    {
      category: 'Expérience avec le Hexcore',
      details: [
        "Viktor découvre le Hexcore, une technologie révolutionnaire qui pourrait transformer Zaun.",
        "Son obsession pour le Hexcore entraîne des conflits avec Jayce et soulève des questions éthiques majeures."
      ]
    },
    {
      category: 'Évolution dans Arcane',
      details: [
        "Dans Arcane, Viktor évolue en tant que scientifique et visionnaire, naviguant à travers des dilemmes moraux et des conflits personnels."
      ]
    },
    {
      category: 'Popularité et Appréciation',
      details: [
        "Viktor est apprécié pour son intelligence, sa détermination et sa passion pour l'innovation.",
        "Sa quête pour un avenir meilleur pour Zaun en fait un personnage complexe et admirable."
      ]
    }
  ];

  viktorPowers = [
    'Intelligence et compétences en ingénierie',
    'Maîtrise des technologies avancées',
    'Vision et détermination pour l’innovation'
  ];

  appearances = [
    'Saison 1 - Episode 2 : Collaboration avec Jayce',
    'Saison 1 - Episode 5 : Découverte du Hexcore',
    'Saison 2 - Episode 4 : Utilisation du Hexcore',
    'Saison 2 - Episode 6 : Confrontation avec Jayce',
    'Saison 2 - Episode 8 : Confrontation finale avec Jayce au cœur des Hexgates'
  ];
}
