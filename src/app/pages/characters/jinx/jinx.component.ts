import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Jinx } from './jinx.model'; // Import du modèle Jinx

@Component({
  selector: 'app-jinx',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './jinx.component.html',
  styleUrls: ['./jinx.component.scss'], // Correction : styleUrls au lieu de styleUrl
})
export class JinxComponent {
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
    { path: '/sevika', name: 'Sevika 🦾' },
    { path: '/mel', name: 'Mel 🌟' },
    { path: '/quiz', name: 'Quiz 📝' },
    { path: '/game', name: 'Memory Game 🧠' },
    { path: '/fight', name: 'Fight🥊' },
  ];

  title = 'Jinx - Un cocktail explosif de chaos et de génie 💥';

  jinxBio: Jinx[] = [
    {
      category: 'Origines et Enfance (Powder - Poudre)',
      details: [
        'Jinx a grandi à Zaun, un endroit sombre et dangereux situé sous la riche cité de Piltover.',
        "Elle était la plus jeune membre d'un groupe familial de contrebandiers dirigé par Vander.",
        "Malgré les conditions de vie difficiles, Powder était pleine de vie et idolâtrait Vi.",
      ],
    },
    {
      category: 'Caractéristiques enfantines',
      details: [
        'À cette époque, Powder était inventive et adorait fabriquer des gadgets explosifs.',
        'Cependant, elle se sentait souvent inadéquate par rapport aux autres.',
      ],
    },
    {
      category: 'Le Trauma et la Perte',
      details: [
        "L'attaque sur Vander : Silco attaque Vander pour asseoir son pouvoir sur Zaun.",
        "Vi, Vander et d'autres tentent de résister, laissant Powder derrière.",
      ],
    },
    {
      category: 'La tragédie du pont',
      details: [
        "Powder décide d'utiliser un de ses gadgets pour aider.",
        'Son invention provoque une explosion massive qui tue Vander et leurs amis.',
        'Vi rejette Powder, la tenant responsable des morts.',
        "Silco devient une figure paternelle et l'incite à embrasser sa folie.",
      ],
    },
    {
      category: 'Transformation en Jinx',
      details: [
        "Sous l'influence de Silco, Powder adopte le nom de Jinx.",
        'Elle devient une criminelle infâme, connue pour ses attaques explosives.',
      ],
    },
    {
      category: 'Relation avec Vi',
      details: [
        "Vi croit encore qu'il reste une part de sa sœur en Jinx et tente de la ramener.",
        "Jinx désire retrouver Vi, mais sa peur d'être abandonnée la pousse à la repousser.",
      ],
    },
    {
      category: 'Relation avec Vander',
      details: [
        'Vander était une figure paternelle pour Jinx et Vi.',
        'Sa mort a été un tournant pour Jinx, contribuant à sa transformation.',
      ],
    },
    {
      category: "L’héritage de Jinx dans League of Legends",
      details: [
        "Jinx incarne l'idée de destruction joyeuse et imprévisible.",
        'Son gameplay reflète sa personnalité avec des explosions et un style audacieux.',
      ],
    },
    {
      category: 'Tatouage japonais',
      details: [
        'Jinx porte un tatouage représentant les nuages Komo japonais.',
        'Ils symbolisent le changement et reflètent son passé traumatisant.',
      ],
    },
    {
      category: 'Thème du personnage',
      details: [
        "Jinx est en quête d'identité et lutte avec son passé.",
      ],
    },
  ];

  jinxPowers: string[] = [
    'Explosions et armes de destruction massive',
    'Grande agilité et maîtrise des armes',
    'Comportement imprévisible et extrêmement dangereux',
    'Ingéniosité en création de gadgets destructeurs',
  ];

  appearances: string[] = [
    "Saison 1 - Episode 1 : Apparition en tant qu'enfant",
    "Saison 1 - Episode 3 : Première rencontre avec Vi en tant qu'adulte",
    'Saison 2 - Episode 8 : Jinx devient un protagoniste central',
  ];

  expandedCategories: Set<string> = new Set();

  toggleCollapse(category: string): void {
    this.expandedCategories.has(category)
      ? this.expandedCategories.delete(category)
      : this.expandedCategories.add(category);
  }

  isExpanded(category: string): boolean {
    return this.expandedCategories.has(category);
  }
}
