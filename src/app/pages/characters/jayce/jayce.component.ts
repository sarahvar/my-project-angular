import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Jayce } from './jayce.model';  // Import du modèle Jayce

@Component({
  selector: 'app-jayce',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './jayce.component.html',
  styleUrls: ['./jayce.component.scss']  // Correction : styleUrls au lieu de styleUrl
})
export class JayceComponent {
  routes: { path: string; name: string }[] = [
    { path: '/', name: 'Accueil 🏠' },
    { path: '/histoire', name: 'L\'histoire 📖' },
    { path: '/vi', name: 'Vi 👊' },
    { path: '/jinx', name: 'Jinx 💥' },
    { path: '/caitlyn', name: 'Caitlyn ⭐🤠' },
    { path: '/viktor', name: 'Viktor 🔧' },
    { path: '/silco', name: 'Silco 🐍' },
    { path: '/ekko', name: 'Ekko ⏳' },
    { path: '/isha', name: 'Isha 🌱' },
    { path: '/vander', name: 'Vander 🍺🐺'},
    { path: '/sevika', name: 'Sevika 🦾'},
    { path: '/quiz', name: 'Quiz 📝' },
    { path: '/game', name: 'Memory Game 🧠' },
    { path: '/fight', name: 'Fight 🥊' },
  ];

  title = 'Jayce - L’Innovateur de Piltover ⚙️';

  jayceBio: Jayce[] = [
    {
      category: 'Origines et Caractéristiques',
      details: [
        "Jayce est un brillant inventeur originaire de Piltover, connu pour ses nombreuses innovations technologiques.",
        "Il est déterminé à améliorer la ville de Piltover grâce à ses inventions et sa vision du progrès scientifique."
      ]
    },
    {
      category: 'Expérience dans le désert',
      details: [
        "Enfant, Jayce et sa mère se sont retrouvés piégés dans le désert après un accident.",
        "Ils ont été sauvés par un mage mystérieux utilisant la magie pour les transporter en sécurité.",
        "Cette expérience a eu un impact profond sur Jayce, le convainquant du potentiel de la technologie et de la magie pour sauver des vies et améliorer le monde."
      ]
    },
    {
      category: 'Relation avec Viktor',
      details: [
        "Jayce travaille en étroite collaboration avec Viktor, un autre scientifique de talent.",
        "Leur partenariat est marqué par des découvertes révolutionnaires et des défis éthiques importants."
      ]
    },
    {
      category: 'Évolution dans Arcane',
      details: [
        "Dans Arcane, Jayce traverse de nombreux conflits internes et externes alors qu'il lutte pour équilibrer ses aspirations personnelles et les attentes de la société de Piltover."
      ]
    },
    {
      category: 'Popularité et Appréciation',
      details: [
        "Jayce est apprécié pour son intelligence, sa détermination et son rôle clé dans le développement technologique de Piltover.",
        "Son personnage aborde des questions complexes sur l'innovation et les responsabilités qui en découlent."
      ]
    }
  ];

  jaycePowers = [
    'Intelligence et compétences en ingénierie',
    'Inventions technologiques avancées',
    'Leadership et vision pour le progrès'
  ];

  appearances = [
    'Saison 1 - Episode 2 : Présentation en tant qu\'inventeur',
    'Saison 1 - Episode 4 : Collaboration avec Viktor',
    'Saison 1 - Episode 7 : Conflit avec les autorités de Piltover',
    'Saison 2 - Épisode 2 : Jayce est présent lors de l\'attaque de Jinx sur le conseil de Piltover',
    'Saison 2 - Épisode 4 : Il aide à sauver Viktor avec le Hexcore',
    'Saison 2 - Épisode 6 : Jayce tue Viktor dans un effort pour arrêter son utilisation du Hexcore',
    'Saison 2 - Épisode 8 : Jayce et Viktor se retrouvent dans une confrontation finale au cœur des Hexgates',
    'Saison 2 - Episode 9 : Je ne vais pas vous spoiler quand même !'
  ];
}

