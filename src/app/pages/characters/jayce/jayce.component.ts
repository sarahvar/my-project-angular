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
    { path: '/', name: 'Accueil' },
    { path: '/vi', name: 'Vi' },
    { path: '/jinx', name: 'Jinx' },
    { path: '/caitlyn', name: 'Caitlyn' },
    { path: '/viktor', name: 'Viktor' }
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
    'Saison 1 - Episode 7 : Conflit avec les autorités de Piltover'
  ];
}
