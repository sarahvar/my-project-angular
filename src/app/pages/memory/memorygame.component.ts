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
  cards: Card[] = [];
  flippedCards: Card[] = [];
  matchedPairs: number = 0;

  images: string[] = [
    '/assets/Vi.jpg',
    '/assets/Jinx.png',
    '/assets/Caitlyn.webp',
    '/assets/Jayce.jpg',
    '/assets/Viktor.jpg',
    '/assets/silco.avif',
    '/assets/Ekko.png',
    '/assets/Isha.jpg',
  ];

  ngOnInit(): void {
    this.initializeGame();
  }

  initializeGame(): void {
    this.cards = [];
    this.flippedCards = [];
    this.matchedPairs = 0;

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
  }
}
