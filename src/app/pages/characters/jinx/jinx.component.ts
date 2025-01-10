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
    { path: '/sevika', name: 'Sevika 🦾'},
    { path: '/mel', name: 'Mel 🌟'},
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
        "Elle était la plus jeune membre d'un groupe familial de contrebandiers dirigé par Vander, un père de substitution pour elle et sa sœur aînée, Vi.",
        "Malgré les conditions de vie difficiles, Powder était pleine de vie, d'espoir et idolâtrait Vi, qu'elle voyait comme une héroïne.",
      ],
    },
    {
      category: 'Caractéristiques enfantines',
      details: [
        'À cette époque, Powder était inventive et adorait fabriquer des gadgets explosifs.',
        'Cependant, elle se sentait souvent inadéquate par rapport à Vi et les autres membres du groupe, car ses inventions échouaient fréquemment, ce qui renforçait ses insécurités.',
      ],
    },
    {
      category: 'Le Trauma et la Perte',
      details: [
        "L'attaque sur Vander : Le tournant de sa vie survient lorsque Silco, un criminel de Zaun, attaque Vander pour asseoir son pouvoir sur la région.",
        "Vi, Vander, et d'autres membres du groupe tentent de résister, laissant Powder derrière pour sa sécurité.",
      ],
    },
    {
      category: 'La tragédie du pont',
      details: [
        "Ne voulant pas être laissée de côté, Powder décide d'utiliser un de ses gadgets pour aider.",
        'Son invention provoque une explosion massive qui tue Vander et les amis proches du groupe.',
        'Vi rejette Powder, la tenant responsable des morts.',
        'La jeune fille, déjà fragile émotionnellement, sombre dans le désespoir.',
        "Silco devient une figure paternelle : Après l'explosion, Powder est prise sous l'aile de Silco, l'antagoniste principal de Zaun.",
        "Il exploite ses insécurités, l'encourageant à embrasser sa folie et à se rebeller contre ceux qui l'ont abandonnée.",
      ],
    },
    {
      category: 'Transformation en Jinx (porte-poisse)',
      details: [
        "L'influence de Vi : La première personne a l'avoir appelée Jinx est Vi",
        "Perte d'identité : Sous l'influence de Silco, Powder adopte le nom de Jinx, symbolisant son rejet de son ancienne vie.",
        'Elle devient une criminelle infâme, connue pour ses attaques explosives et son mépris des règles.',
        'Cependant, elle lutte intérieurement avec les souvenirs de sa sœur et de son passé.',
      ],
    },
    {
      category: 'Caractéristiques psychologiques',
      details: [
        'Jinx est constamment hantée par des hallucinations de ses amis morts, reflet de son sentiment de culpabilité et de son traumatisme non résolu.',
        'Ses émotions oscillent rapidement entre joie explosive et colère destructrice, reflétant une instabilité émotionnelle extrême, caractéristique des troubles de la personnalité borderline.',
        "Elle développe une peur irrationnelle de l'abandon après la perte de Vi et de Vander, ce qui la pousse à rechercher désespérément l'approbation, d'abord auprès de Silco, puis de Vi.",
        'Elle a toujours été extrêmement sensible à l’opinion des autres, une caractéristique amplifiée par son besoin profond de validation. Toute critique ou rejet perçu exacerbe son insécurité et déclenche des réactions violentes.',
        'Jinx montre une identité fragmentée, oscillant entre Powder, la jeune fille innocente qu’elle était, et Jinx, la criminelle chaotique.',
        'Son impulsivité se manifeste dans ses actions imprévisibles et dangereuses, notamment ses attaques explosives et son mépris pour les règles, souvent guidées par des émotions intenses plutôt que par une réflexion.',
        "Sous l'influence de Silco, elle rejette son ancienne identité pour adopter pleinement celle de Jinx, symbolisant son rejet de son passé tout en luttant intérieurement avec ses souvenirs et son amour pour Vi.",
        "Elle représente un cas complexe de trouble borderline, avec des symptômes tels que : une peur intense de l'abandon, des relations instables et intenses, une impulsivité marquée, une instabilité émotionnelle, un sentiment d'identité fragile et une tendance à l'autosabotage émotionnel.",
        "Jinx n'est pas fondamentalement mauvaise ; ses actions destructrices sont le reflet des traumatismes qui ont façonné son esprit et dévoré son âme. Elle incarne une douleur profonde et non résolue, chaque acte de violence ou de chaos étant une tentative désespérée de combler les vides laissés par ses pertes.",
        'Sa descente dans la folie est moins une conséquence de choix délibérés qu’une réaction à des souffrances incommensurables, montrant qu’elle est avant tout une victime de son environnement et de ses expériences.',
        "Malgré ses actes, elle conserve un besoin d'amour et de rédemption, illustrant que son chaos n’est qu’une façade pour protéger une âme profondément blessée.",
        'Elle représente un dilemme humain puissant : peut-on blâmer quelqu’un qui agit par désespoir et douleur, et jusqu’à quel point les traumatismes peuvent-ils façonner une personne ? Jinx est la preuve que derrière la destruction peut se cacher une quête d’acceptation et de paix intérieure.',
      ],
    },
    {
      category: 'Relation avec Vi',
      details: [
        'La relation entre Jinx et Vi est le cœur émotionnel de Arcane.',
        'Malgré leur séparation, elles restent profondément connectées.',
        "Vi cherche à sauver Powder : Vi croit encore qu'il reste une part de sa sœur dans Jinx et tente de la ramener à elle.",
        'Conflit interne de Jinx : Jinx lutte avec ses émotions contradictoires envers Vi.',
        "Elle désire retrouver son amour, mais sa peur d'être abandonnée à nouveau la pousse à repousser sa sœur.",
      ],
    },
    {
      category: 'Relation avec Vander',
      details: [
        'Vander était une figure paternelle pour Jinx (anciennement connue sous le nom de Powder) et Vi.',
        "Après la perte de leurs parents, Vander a pris soin d'elles et les a protégées dans les rues dangereuses de Zaun.",
        'Il a toujours cherché à inculquer des valeurs de protection et de responsabilité à Jinx, même si elle a souvent eu du mal à se conformer à ses attentes.',
        "La mort tragique de Vander a été un tournant pour elle n'ayant plus le soutient de sa soeur Vi, contribuant à son évolution vers Jinx.",
        "Jinx, qui était encore enfant à l'époque, n'a pas pleinement compris la gravité de ses actions, mais elle porte un lourd fardeau de culpabilité tout au long de la série.",
      ],
    },
    {
      category: 'L’héritage de Jinx dans League of Legends',
      details: [
        "Un emblème du chaos : Dans le jeu, Jinx incarne l'idée de destruction joyeuse et imprévisible.",
        'Son gameplay reflète sa personnalité, favorisant des explosions et un style de combat audacieux.',
        "Sa devise : Jinx est célèbre pour sa phrase 'Rules are made to be broken... like buildings! Or people!'",
        'Son évolution : Bien que Jinx soit souvent perçue comme une antagoniste, ses motivations trouvent leurs racines dans des souffrances réelles, ce qui la rend incroyablement humaine et relatable.',
      ],
    },
    {
      category: 'Thèmes explorés dans Jinx',
      details: [
        "Jinx est un exemple de personnage souffrant de troubles post-traumatiques, d'anxiété et de dissociation.",
        'Elle incarne la lutte entre sa folie croissante et ses désirs humains d’amour et de rédemption.',
        "La série explore si Jinx est devenue ce qu'elle est à cause de son environnement ou de ses choix personnels.",
        'Ses traumatismes semblent jouer un rôle majeur dans sa transformation.',
        "Bien qu'elle soit chaotique et dangereuse, Jinx est aussi profondément humaine, ce qui la rend difficile à détester.",
      ],
    },
    {
      category: 'Tatouage japonais',
      details: [
        'Jinx porte un tatouage représentant les nuages Komo japonais sur la partie droite de son corps.',
        'Les nuages Komo symbolisent le changement, reflétant un événement particulièrement traumatisant de Jinx.',
        'Ce tatouage représente son esprit tourmenté et ses actions imprévisibles.',
      ],
    },
  ];

  jinxPowers = [
    'Explosions et armes de destruction massive',
    'Grande agilité et maîtrise des armes',
    'Comportement imprévisible et extrêmement dangereux',
  ];

  appearances = [
    "Saison 1 - Episode 1 : Apparition en tant qu'enfant",
    "Saison 1 - Episode 3 : Première rencontre avec Vi en tant qu'adulte",
    'Saison 2 - Episode 8 : Jinx devient un protagoniste central',
  ];
  expandedCategories: Set<string> = new Set();

  toggleCollapse(category: string): void {
    if (this.expandedCategories.has(category)) {
      this.expandedCategories.delete(category);
    } else {
      this.expandedCategories.add(category);
    }
  }

  isExpanded(category: string): boolean {
    return this.expandedCategories.has(category);
  }
}
