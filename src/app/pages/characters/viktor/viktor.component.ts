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
    { path: '/vander', name: 'Vander 🍺🐺'},
    { path: '/sevika', name: 'Sevika 🦾'},
    { path: '/mel', name: 'Mel 🌟'},
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
        "Dans Arcane, Viktor évolue en tant que scientifique et visionnaire, naviguant à travers des dilemmes moraux et des conflits personnels.",
        "Viktor se bat littéralement sur le fil entre technologie et humanité, cherchant à imposer sa vision d'une humanité parfaite.",
        "Tout au long de la saison 2, Viktor se dévoile comme un ennemi redoutable, mais aussi comme un personnage complexe avec ses propres doutes et ses propres souffrances."
      ]
    },
    {
      category: 'Popularité et Appréciation',
      details: [
        "Viktor est apprécié pour son intelligence, sa détermination et sa passion pour l'innovation.",
        "Son but est de faire des innovations technologiques qui amélioreront la vie de tous les habitants de Zaun.",
        "Viktor est un personnage central qui explore profondément les thèmes des émotions et de la souffrance.",
        "Il croit fermement que les émotions sont la source de tous les maux et cherche à unifier l'humanité sous une seule conscience, la sienne, en éliminant ces émotions.",
        "Son affrontement avec Jayce est particulièrement intense et symbolique de sa lutte à imposer sa vision d'une humanité parfaite."
      ]
    },
    {
      category: 'Thème de Viktor',
      details: [
        "Viktor est obsédé par l'idée d'immortalité. Sa quête de la survie éternelle, alimentée par sa maladie incurable, l'amène à rechercher des solutions technologiques qui lui permettent de transcender la mort. Cette obsession le conduit à manipuler son propre corps avec la technologie hextech, une démarche qui allie souffrance physique et mentale.",
        "Cependant, l'immortalité, loin d'être une bénédiction, devient un fardeau pour Viktor. Son corps modifié est un terrain de souffrance constante, et chaque progrès technologique apporte son lot de dilemmes éthiques. En cherchant à abolir la mortalité, Viktor se confronte à la question de savoir à quel prix il est prêt à sacrifier son humanité.",
        "Ainsi, l'immortalité pour Viktor représente à la fois un idéal inatteignable et une souffrance continue. Le pouvoir qu'il cherche à obtenir, loin de le libérer, l'emprisonne dans un tourbillon de douleur et de dilemmes moraux."
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
