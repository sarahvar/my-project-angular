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
  routes = [
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
  matchedPairs = 0;
  startTime = 0;
  elapsedTime = 0;
  timer: any;
  gameStarted = false;

  images = [
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

  private matchDelay = 1250;

  ngOnInit(): void {
    this.initializeGame();
    this.preloadImages();
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
      this.cards.push({ id: id++, image, isFlipped: false, isMatched: false });
      this.cards.push({ id: id++, image, isFlipped: false, isMatched: false });
    });

    this.cards = this.shuffle(this.cards);
  }

  preloadImages(): void {
    this.images.forEach(image => {
      const img = new Image();
      img.src = image;
    });
  }

  shuffle(array: Card[]): Card[] {
    return array.sort(() => Math.random() - 0.5);
  }

  flipCard(card: Card): void {
    if (card.isMatched || card.isFlipped) return;

    if (!this.gameStarted) {
      this.startTimer();
      this.gameStarted = true;
    }

    if (this.flippedCards.length < 2) {
      card.isFlipped = true;
      this.flippedCards.push(card);

      if (this.flippedCards.length === 2) {
        setTimeout(() => this.checkForMatch(), this.matchDelay);
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
      clearInterval(this.timer); // ✅ Stoppe le timer immédiatement
      setTimeout(() => {
        alert(`Félicitations ! Vous avez terminé en ${this.formatTime(this.elapsedTime)} 🎉.`);
      }, 300);
    }
  }



  formatTime(ms: number): string {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    return `${minutes}m ${seconds}s`;
  }
}
