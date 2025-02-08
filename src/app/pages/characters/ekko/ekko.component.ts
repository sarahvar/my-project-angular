import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Ekko } from './ekko.model';  // Import du modèle Ekko

@Component({
  selector: 'app-ekko',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './ekko.component.html',
  styleUrls: ['./ekko.component.scss']  // Correction : styleUrls au lieu de styleUrl
})
export class EkkoComponent {
  routes: { path: string; name: string }[] = [
    { path: '/', name: 'Accueil 🏠' },
    { path: '/histoire', name: 'L\'histoire 📖' },
    { path: '/vi', name: 'Vi 👊' },
    { path: '/jinx', name: 'Jinx 💥' },
    { path: '/vander', name: 'Vander 🍺🐺'},
    { path: '/caitlyn', name: 'Caitlyn ⭐🤠' },
    { path: '/jayce', name: 'Jayce ⚙️' },
    { path: '/viktor', name: 'Viktor 🔧' },
    { path: '/silco', name: 'Silco 🐍' },
    { path: '/isha', name: 'Isha 🌱' },
    { path: '/sevika', name: 'Sevika 🦾'},
    { path: '/mel', name: 'Mel 🌟'},
    { path: '/quiz', name: 'Quiz 📝' },
    { path: '/game', name: 'Memory Game 🧠' },
    { path: '/fight', name: 'Fight 🥊' },
  ];

  title = 'Ekko - Le Génie de Zaun ⏳';
  theme = 'Le Temps et la Deuxième Chance';

  ekkoBio: Ekko[] = [
    {
      category: 'Origines et Caractéristiques',
      details: [
        "Ekko est un jeune prodige de Zaun, connu pour ses compétences exceptionnelles en ingénierie et en innovation.",
        "Il est le fondateur des Firelights, un groupe rebelle luttant contre l'oppression dans Zaun."
      ]
    },
    {
      category: 'Atmosphère et Environnement',
      details: [
        "Ekko évolue dans les bas-fonds industriels de Zaun, un endroit marqué par la pollution et la pauvreté.",
        "Malgré les conditions difficiles, Ekko utilise son ingéniosité pour créer des inventions à partir de pièces récupérées.",
        "L'environnement de Zaun est un mélange de technologie avancée et de ruines industrielles, reflétant les défis et les opportunités qu'Ekko rencontre."
      ]
    },
    {
      category: 'Capacités et Inventions',
      details: [
        "Ekko a créé un dispositif de manipulation temporelle, lui permettant de revenir quelques secondes en arrière pour rectifier ses erreurs.",
        "Ses inventions incluent également divers gadgets et armes, souvent fabriqués à partir de matériaux de récupération."
      ]
    },
    {
      category: 'Évolution dans Arcane',
      details: [
        "Dans Arcane, Ekko se bat pour libérer Zaun de l'oppression et de la corruption.",
        "Son personnage explore les thèmes de la résistance, de l'ingéniosité et de l'espoir face à l'adversité."
      ]
    },
    {
      category: 'Popularité et Appréciation',
      details: [
        "Ekko est apprécié pour son intelligence, sa détermination et son esprit rebelle.",
        "Sa capacité à transformer des ressources limitées en solutions innovantes en fait un symbole d'espoir et de résilience pour les habitants de Zaun."
      ]
    },
    {
      category: 'Thème du personnage',
      details: [
        "Le Temps et la Seconde Chance : L'Essence du Parcours d'Ekko",

        "Ekko incarne profondément le thème du temps et de la seconde chance. Son génie en ingénierie n'est pas seulement une caractéristique, mais une clé qui lui permet de naviguer dans les nombreux défis auxquels il fait face. Grâce à sa manipulation du temps, Ekko obtient ce que beaucoup d'autres n'ont pas : la possibilité de rectifier ses erreurs et de forger un avenir meilleur, même après des moments de regret et de douleur.",

        "Le temps est une ressource précieuse pour Ekko. Dès son plus jeune âge, il se retrouve confronté à des situations où chaque seconde compte. C'est dans cette urgence qu'il trouve sa vocation : utiliser la technologie pour transformer ses faiblesses en forces. Son invention phare, le dispositif de manipulation temporelle, lui permet de revenir quelques secondes en arrière, offrant ainsi une chance de rattraper ses erreurs. Mais derrière cet appareil se cache une réflexion plus profonde : et si le temps, au lieu d'être une simple ressource, devenait un moyen de se réinventer ? Ekko ne se contente pas de modifier les événements ; il cherche à comprendre comment la rédemption et la transformation peuvent résulter des choix que l'on fait.",

        "La seconde chance devient donc un thème récurrent dans sa vie. Les erreurs du passé, qu'elles soient personnelles ou collectives, ne sont pas irréparables. Au contraire, Ekko prouve que même dans les circonstances les plus sombres, il existe toujours un moyen de corriger le cours des choses, d'apprendre des erreurs passées et d'offrir aux autres une chance de rédemption.",

       "Dans Arcane, ce thème du temps et de la seconde chance est particulièrement poignant dans ses interactions avec les autres personnages. Par exemple, lorsqu'Ekko se retrouve face à Jinx, leur relation est marquée par une série d'événements qui auraient pu les séparer définitivement. Cependant, Ekko voit en elle une occasion de restaurer ce qui a été perdu, en offrant une opportunité d'un nouveau départ, tout en cherchant à réparer les blessures du passé.",

        "En fin de compte, Ekko nous enseigne que le temps n'est pas un simple vecteur d'événements, mais un terrain de réinvention. Chaque seconde est une chance de changer de direction, de se redécouvrir et de réécrire son propre avenir. Pour Ekko, le temps est plus qu'une question de manipulation mécanique : c'est la possibilité d'un renouveau, d'une seconde chance qui n'est jamais hors de portée."
      ]
    }
  ];

  ekkoPowers = [
    'Manipulation temporelle',
    'Ingéniosité et compétences en ingénierie',
    'Leadership et esprit rebelle'
  ];

  appearances = [
    'Saison 1 - Episode 4 : Introduction en tant que jeune inventeur',
    'Saison 1 - Episode 7 : Confrontation avec Jinx',
    'Saison 1 - Episode 9 : Utilisation de son dispositif temporel pour sauver ses amis'
  ];
}
