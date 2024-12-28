import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';  // Importation de RouterModule
import { CommonModule } from '@angular/common';  // Importation de CommonModule

@Component({
  selector: 'app-caitlyn',
  standalone: true,
  imports: [CommonModule, RouterModule],  // Ajout des modules nécessaires ici
  templateUrl: './caitlyn.component.html',
  styleUrls: ['./caitlyn.component.scss']
})

  export class CaitlynComponent {
    title = 'Caitlyn - La Shérif de Piltover ⭐🤠';
    bio = `Caitlyn Kiramman est issue d'une famille noble de Piltover, la Cité du Progrès. Cependant, son privilège familial ne l'a pas isolée de la réalité complexe de sa ville. Après qu'un drame personnel a frappé sa famille, Caitlyn a décidé de se dédier à la protection des innocents et à la lutte contre la corruption dans Piltover.

Grâce à ses compétences exceptionnelles en enquête, son sang-froid et sa maîtrise des armes à feu, elle est rapidement devenue la meilleure détective de la ville. Avec son fusil Hextech, conçu pour la précision et l'efficacité, elle traque les criminels les plus dangereux, faisant d'elle une figure respectée et redoutée.

Dans la série Arcane, Caitlyn joue un rôle crucial en s'alliant avec Vi. Leur relation, marquée par des différences de classe sociale et de caractère, évolue lors de la saison 2 ❤️. Ensemble, elles affrontent des ennemis redoutables tout en dévoilant les complots sombres qui menacent Piltover et Zaun.

Au-delà de son rôle de shérif, Caitlyn incarne une femme forte, indépendante et animée par une véritable volonté de changement. Son dévouement, sa morale inébranlable et sa volonté de voir au-delà des préjugés sociaux font d'elle une héroïne respectée et inspirante.`;

    abilities = ['Tir de précision', 'Pièges tactiques', 'Sniper d\'élite'];
    series = ['Saison 1 - Épisodes 3 à 9',
             'Saison 2 - Épisodes 1 à 9'];
  // Définir un tableau statique de routes avec un 'path' et un 'name'
  routes: { path: string; name: string }[] = [
    { path: '/', name: 'Accueil 🏠' },
    { path: 'histoire', name: 'L\'histoire 📖' },
    { path: '/vi', name: 'Vi 👊' },
    { path: '/jinx', name: 'Jinx 💥' },
    { path: '/jayce', name: 'Jayce ⚙️' },
    { path: '/viktor', name: 'Viktor 🔧' },
    { path: '/silco', name: 'Silco 🐍' },
    { path: '/ekko', name: 'Ekko ⏳' },
    { path: '/isha', name: 'Isha 🌱' },
    { path: '/quiz', name: 'Quiz 📝' },
    { path: '/game', name: 'Memory Game 🧠' },
    { path: '/fight', name: 'Fight 🥊' },
  ];

  // Un objet pour suivre l'état de chaque section
  contentVisibility: { [key: string]: boolean } = {
    bio: false,
    psychology: false,
    abilities: false,
    series: false
  };

  // Fonction pour basculer la visibilité d'une section
  toggleContent(section: string): void {
    this.contentVisibility[section] = !this.contentVisibility[section];
  }

  // Fonction pour vérifier si une section est visible
  isContentVisible(section: string): boolean {
    return this.contentVisibility[section];
  }
}

