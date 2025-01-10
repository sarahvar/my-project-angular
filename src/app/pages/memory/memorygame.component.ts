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
    { path: '/vander', name: 'Vander 🍺🐺'},
    { path: '/sevika', name: 'Sevika 🦾'},
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
    '/assets/Vi.jpg',
    '/assets/Jinx.png',
    '/assets/Caitlyn.webp',
    '/assets/Jayce.jpg',
    '/assets/Viktor.webp',
    '/assets/silco.avif',
    '/assets/Ekko.png',
    '/assets/Isha-memory.jpg',
    '/assets/Vander.jpg',
    '/assets/Sevika.jpg',
    '/assets/Mel.png',

  ];

  ngOnInit(): void {
    this.initializeGame();
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

    this.cards = this.shuffle(this.cards);
  }

  shuffle(array: Card[]): Card[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  flipCard(card: Card): void {
    if (!this.gameStarted) {
      this.startTimer();
      this.gameStarted = true;
    }

    if (this.flippedCards.length < 2 && !card.isFlipped) {
      card.isFlipped = true;
      this.flippedCards.push(card);

      if (this.flippedCards.length === 2) {
        setTimeout(() => {
          this.checkForMatch();
        }, 1000);
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

    if (this.matchedPairs === this.images.length) {
      clearInterval(this.timer);
    }
  }

  formatTime(ms: number): string {
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}m ${seconds}s`;
  }
}
