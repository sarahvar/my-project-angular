import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Character {
  name: string;
  emoji: string;
  health: number;
  damage: number;
  regeneration: number;
}

@Component({
  selector: 'app-arcane-combat',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './arcane-combat.component.html',
  styleUrls: ['./arcane-combat.component.scss']
})
export class ArcaneCombatComponent implements OnInit {
  characters: Character[] = [
    { name: 'Vi', emoji: '👊', health: 100, damage: 15, regeneration: 5 },
    { name: 'Jinx', emoji: '🔫', health: 80, damage: 20, regeneration: 3 },
    { name: 'Caitlyn', emoji: '🎯', health: 90, damage: 18, regeneration: 4 },
    { name: 'Jayce', emoji: '🔨', health: 110, damage: 12, regeneration: 6 },
    { name: 'Viktor', emoji: '⚙️', health: 85, damage: 17, regeneration: 4 },
    { name: 'Silco', emoji: '🦹‍♂️', health: 95, damage: 16, regeneration: 5 },
    { name: 'Ekko', emoji: '⏳', health: 75, damage: 19, regeneration: 4 },
    { name: 'Isha', emoji: '🌿', health: 100, damage: 14, regeneration: 7 }
  ];

  player?: Character;
  enemy?: Character;
  resultMessage: string = '';
  battleLog: string[] = [];

  ngOnInit(): void {}

  selectCharacter(character: Character): void {
    this.player = character;
    this.enemy = undefined; // Reset enemy selection
    this.resultMessage = `Vous avez choisi ${this.player.name}. Sélectionnez un adversaire !`;
    this.battleLog = [];
  }

  selectEnemy(character: Character): void {
    if (!this.player || this.player.name === character.name) return;
    this.enemy = character;
    this.resultMessage = `${this.player.name} contre ${this.enemy.name}`;
  }

  playerAttack(): void {
    if (!this.player || !this.enemy) return;
    const attackValue = this.player.damage;
    this.enemy.health -= attackValue;
    this.battleLog.push(`${this.player.name} attaque ${this.enemy.name} et inflige ${attackValue} dégâts.`);
    this.enemyTurn();
  }

  playerDefend(): void {
    if (!this.player || !this.enemy) return;
    const defendValue = this.player.regeneration * 2;
    this.player.health += defendValue;
    this.battleLog.push(`${this.player.name} se défend et régénère ${defendValue} PV.`);
    this.enemyTurn();
  }

  enemyTurn(): void {
    if (!this.player || !this.enemy) return;
    const action = Math.random() < 0.5 ? 'attack' : 'defend';

    if (action === 'attack') {
      const attackValue = this.enemy.damage;
      this.player.health -= attackValue;
      this.battleLog.push(`${this.enemy.name} attaque ${this.player.name} et inflige ${attackValue} dégâts.`);
    } else {
      const defendValue = this.enemy.regeneration * 2;
      this.enemy.health += defendValue;
      this.battleLog.push(`${this.enemy.name} se défend et régénère ${defendValue} PV.`);
    }

    this.checkEndOfGame();
  }

  checkEndOfGame(): void {
    if (this.player && this.enemy) {
      if (this.player.health <= 0) {
        this.resultMessage = `${this.enemy.name} gagne le combat !`;
      } else if (this.enemy.health <= 0) {
        this.resultMessage = `${this.player.name} gagne le combat !`;
      }
    }
  }
  routes: { path: string; name: string }[] = [
    { path: '/', name: 'Accueil' },
    { path: '/vi', name: 'Vi' },
    { path: '/jinx', name: 'Jinx' },
    { path: '/caitlyn', name: 'Caitlyn' },
    { path: '/jayce', name: 'Jayce' },
    { path: '/viktor', name: 'Viktor' },
    { path: '/silco', name: 'Silco' },
    { path: '/ekko', name: 'Ekko' },
    { path: '/isha', name: 'Isha' },
    { path: '/quiz', name: 'Quiz' },
    { path: '/game', name: 'Memory Game' },
  ];
}

