import { Component, OnInit } from '@angular/core';
import { Card } from './card.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-memory-game',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './memory-game.component.html',
  styleUrls: ['./memory-game.component.scss']
})
export class MemoryGameComponent implements OnInit {
  routes: { path: string; name: string }[] = [
    { path: '/', name: 'Accueil 🏠' },
    { path: '/histoire', name: 'L\'histoire 📖' },
    { path: '/vi', name: 'Vi 👊' },
    { path: '/jinx', name: 'Jinx 💥' },
    { path: '/caitlyn', name: 'Caitlyn ⭐🤠' },
    { path: '/jayce', name: 'Jayce ⚙️' },
    { path: '/viktor', name: 'Viktor 🔧' },
    { path: '/silco', name: 'Silco 🐍' },
    { path: '/ekko', name: 'Ekko ⏳' },
    { path: '/isha', name: 'Isha 🌱' },
    { path: '/vander', name: 'Vander 🍺🐺' },
    { path: '/sevika', name: 'Sevika 🦾' },
    { path: '/mel', name: 'Mel 🌟' },
    { path: '/quiz', name: 'Quiz 📝' },
    { path: '/fight', name: 'Fight 🥊' },
  ];
  cards: Card[] = [];
  flippedCards: Card[] = [];
  matchedPairs: number = 0;
  startTime: number = 0;
  elapsedTime: number = 0;
  timer: any;
  gameStarted: boolean = false;

  images: string[] = [
    '/assets/vi.gif',
    '/assets/jinx.gif',
    '/assets/caitlyn.gif',
    '/assets/Jayce.jpg',
    '/assets/Viktor.webp',
    '/assets/silco.avif',
    '/assets/Ekko.png',
    '/assets/isha.webp',
    '/assets/Vander.jpg',
    '/assets/Sevika.gif',
    '/assets/Mel.png',
  ];

  private matchDelay = 1250; // Délai configurable avant de vérifier une correspondance

  ngOnInit(): void {
    this.initializeGame(); // Initialisation du jeu directement
    this.preloadImages(); // Préchargement des images en arrière-plan
  }

  initializeGame(): void {
    this.cards = [];
    this.flippedCards = [];
    this.matchedPairs = 0;
    this.startTime = 0;
    this.elapsedTime = 0;
    this.gameStarted = false;
    clearInterval(this.timer);

    let id = 0;
    this.images.forEach(image => {
      this.cards.push({ id: id++, image: image, isFlipped: false, isMatched: false });
      this.cards.push({ id: id++, image: image, isFlipped: false, isMatched: false });
    });

    this.cards = this.shuffle(this.cards); // Mélange les cartes
  }

  preloadImages(): void {
    this.images.forEach(image => {
      const img = new Image();
      img.src = image;

      img.onload = () => {
        console.log(`Image loaded: ${image}`);
      };

      img.onerror = () => {
        console.error(`Image failed to load: ${image}`);
      };
    });
  }

  shuffle(array: Card[]): Card[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  flipCard(card: Card): void {
    if (card.isMatched || card.isFlipped) {
      return; // Ignore les cartes déjà retournées ou correspondantes
    }

    if (!this.gameStarted) {
      this.startTimer(); // Démarre le chronomètre
      this.gameStarted = true;
    }

    if (this.flippedCards.length < 2) {
      card.isFlipped = true;
      this.flippedCards.push(card);

      if (this.flippedCards.length === 2) {
        setTimeout(() => {
          this.checkForMatch();
        }, this.matchDelay); // Délai avant de vérifier la correspondance
      }
    }
  }

  startTimer(): void {
    this.startTime = Date.now();
    this.timer = setInterval(() => {
      this.elapsedTime = Date.now() - this.startTime;
    }, 1000);
  }

  checkForMatch(): void {
    const [card1, card2] = this.flippedCards;

    if (card1.image === card2.image) {
      card1.isMatched = true;
      card2.isMatched = true;
      this.matchedPairs++;
    } else {
      card1.isFlipped = false;
      card2.isFlipped = false;
    }

    this.flippedCards = [];

    if (this.matchedPairs === this.images.length / 2) {
      clearInterval(this.timer);
      alert(`Félicitations ! Vous avez terminé en ${this.formatTime(this.elapsedTime)}.`);
      this.showRestartButton(); // Montre un bouton pour rejouer
    }
  }

  showRestartButton(): void {
    const restartButton = document.createElement('button');
    restartButton.textContent = 'Rejouer';
    restartButton.className = 'restart-btn';
    restartButton.onclick = () => {
      document.body.removeChild(restartButton); // Retire le bouton avant de redémarrer
      this.initializeGame();
    };
    document.body.appendChild(restartButton);
  }

  formatTime(ms: number): string {
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}m ${seconds}s`;
  }
}
