import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Jinx } from './jinx.model';  // Import du modèle Jinx

@Component({
  selector: 'app-jinx',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './jinx.component.html',
  styleUrls: ['./jinx.component.scss']  // Correction : styleUrls au lieu de styleUrl
})
export class JinxComponent {
  routes: { path: string; name: string }[] = [
    { path: '/', name: 'Accueil' },
    { path: '/histoire', name: 'L\'histoire' },
    { path: '/vi', name: 'Vi 👊'  },
    { path: '/caitlyn', name: 'Caitlyn ⭐🤠' },
    { path: '/jayce', name: 'Jayce ⚙️' },
    { path: '/viktor', name: 'Viktor 🔧' },
    { path: '/silco', name: 'Silco 🐍' },
    { path: '/ekko', name: 'Ekko ⏳' },
    { path: '/isha', name: 'Isha 🌱' },
    { path: '/quiz', name: 'Quiz' },
    { path: '/game', name: 'Memory Game' },
    { path: '/fight', name: 'Fight' },
  ];

  title = 'Jinx - Un cocktail explosif de chaos et de génie 💥';

  jinxBio: Jinx[] = [
    {
      category: 'Origines et Enfance (Powder - Poudre)',
      details: [
        "Jinx a grandi à Zaun, un endroit sombre et dangereux situé sous la riche cité de Piltover.",
        "Elle était la plus jeune membre d'un groupe familial de contrebandiers dirigé par Vander, un père de substitution pour elle et sa sœur aînée, Vi.",
        "Malgré les conditions de vie difficiles, Powder était pleine de vie, d'espoir et idolâtrait Vi, qu'elle voyait comme une héroïne."
      ]
    },
    {
      category: 'Caractéristiques enfantines',
      details: [
        "À cette époque, Powder était inventive et adorait fabriquer des gadgets explosifs.",
        "Cependant, elle se sentait souvent inadéquate par rapport à Vi et les autres membres du groupe, car ses inventions échouaient fréquemment, ce qui renforçait ses insécurités."
      ]
    },
    {
      category: 'Le Trauma et la Perte',
      details: [
        "L'attaque sur Vander : Le tournant de sa vie survient lorsque Silco, un criminel de Zaun, attaque Vander pour asseoir son pouvoir sur la région.",
        "Vi, Vander, et d'autres membres du groupe tentent de résister, laissant Powder derrière pour sa sécurité."
      ]
    },
    {
      category: 'La tragédie du pont',
      details: [
        "Ne voulant pas être laissée de côté, Powder décide d'utiliser un de ses gadgets pour aider.",
        "Son invention provoque une explosion massive qui tue Vander et les amis proches du groupe.",
        "Vi rejette Powder, la tenant responsable des morts.",
        "La jeune fille, déjà fragile émotionnellement, sombre dans le désespoir.",
        "Silco devient une figure paternelle : Après l'explosion, Powder est prise sous l'aile de Silco, l'antagoniste principal de Zaun.",
        "Il exploite ses insécurités, l'encourageant à embrasser sa folie et à se rebeller contre ceux qui l'ont abandonnée."
      ]
    },
    {
      category: 'Transformation en Jinx (porte-poisse)',
      details: [
        "Perte d'identité : Sous l'influence de Silco, Powder adopte le nom de Jinx, symbolisant son rejet de son ancienne vie.",
        "Elle devient une criminelle infâme, connue pour ses attaques explosives et son mépris des règles.",
        "Cependant, elle lutte intérieurement avec les souvenirs de sa sœur et de son passé."
      ]
    },
    {
      category: 'Caractéristiques psychologiques',
      details: [
        "Elle est souvent hantée par des hallucinations de ses amis morts, ce qui reflète son sentiment de culpabilité.",
        "Ses actions sont guidées par un désir de validation, que ce soit auprès de Silco ou de Vi.",
        "Créativité destructrice : Jinx utilise son génie inventif pour créer des armes et des gadgets extravagants, comme sa fameuse mitrailleuse Pow-Pow, son lance-roquettes Fishbones, et ses grenades Chompers.",
        "Son style de combat est un mélange de chaos et de précision."
      ]
    },
    {
      category: 'Relation avec Vi',
      details: [
        "La relation entre Jinx et Vi est le cœur émotionnel de Arcane.",
        "Malgré leur séparation, elles restent profondément connectées.",
        "Vi cherche à sauver Powder : Vi croit encore qu'il reste une part de sa sœur dans Jinx et tente de la ramener à elle.",
        "Conflit interne de Jinx : Jinx lutte avec ses émotions contradictoires envers Vi.",
        "Elle désire retrouver son amour, mais sa peur d'être abandonnée à nouveau la pousse à repousser sa sœur."
      ]
    },
    {
      category: 'L’héritage de Jinx dans League of Legends',
      details: [
        "Un emblème du chaos : Dans le jeu, Jinx incarne l'idée de destruction joyeuse et imprévisible.",
        "Son gameplay reflète sa personnalité, favorisant des explosions et un style de combat audacieux.",
        "Sa devise : Jinx est célèbre pour sa phrase 'Rules are made to be broken... like buildings! Or people!'",
        "Son évolution : Bien que Jinx soit souvent perçue comme une antagoniste, ses motivations trouvent leurs racines dans des souffrances réelles, ce qui la rend incroyablement humaine et relatable."
      ]
    },
    {
      category: 'Thèmes explorés dans Jinx',
      details: [
        "Jinx est un exemple de personnage souffrant de troubles post-traumatiques, d'anxiété et de dissociation.",
        "Elle incarne la lutte entre sa folie croissante et ses désirs humains d’amour et de rédemption.",
        "La série explore si Jinx est devenue ce qu'elle est à cause de son environnement ou de ses choix personnels.",
        "Ses traumatismes semblent jouer un rôle majeur dans sa transformation.",
        "Bien qu'elle soit chaotique et dangereuse, Jinx est aussi profondément humaine, ce qui la rend difficile à détester."
      ]
    }
  ];

  jinxPowers = [
    'Explosions et armes de destruction massive',
    'Grande agilité et maîtrise des armes',
    'Comportement imprévisible et extrêmement dangereux'
  ];

  appearances = [
    'Saison 1 - Episode 1 : Apparition en tant qu\'enfant',
    'Saison 1 - Episode 3 : Première rencontre avec Vi en tant qu\'adulte',
    'Saison 2 - Episode 8 : Jinx devient un protagoniste central'
  ];
}
