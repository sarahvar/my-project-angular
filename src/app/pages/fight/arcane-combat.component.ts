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
    { name: 'Jinx', emoji: '💥', health: 100, damage: 20, regeneration: 3 },
    { name: 'Caitlyn', emoji: '⭐🤠', health: 95, damage: 18, regeneration: 4 },
    { name: 'Jayce', emoji: '⚙️', health: 110, damage: 12, regeneration: 6 },
    { name: 'Viktor', emoji: '🔧', health: 95, damage: 17, regeneration: 4 },
    { name: 'Silco', emoji: '🐍', health: 95, damage: 16, regeneration: 5 },
    { name: 'Ekko', emoji: '⏳', health: 95, damage: 19, regeneration: 4 },
    { name: 'Isha', emoji: '🌱', health: 100, damage: 14, regeneration: 7 }
  ];

  player?: Character;
  enemy?: Character;
  resultMessage: string = '';
  finalResult: string = '';
  battleLog: string[] = [];

  ngOnInit(): void {}

  selectCharacter(character: Character): void {
    this.player = character;
    this.enemy = undefined; // Reset enemy selection
    this.resultMessage = `Vous avez choisi ${this.player.name}. Sélectionnez un adversaire !`;
    this.battleLog = [];
    this.finalResult = '';
  }

  selectEnemy(character: Character): void {
    if (!this.player || this.player.name === character.name) return;
    this.enemy = character;
    this.resultMessage = `${this.player.name} contre ${this.enemy.name}`;
  }

  playerAttack(): void {
    if (!this.player || !this.enemy) return;
    const attackValue = this.calculateDamage(this.player.damage);
    this.enemy.health -= attackValue;
    this.battleLog.push(`${this.player.name} attaque ${this.enemy.name} et inflige ${attackValue} dégâts.`);
    this.checkEndOfGame();
    if (!this.finalResult) this.enemyTurn();
  }

  playerDefend(): void {
    if (!this.player || !this.enemy) return;
    const defendValue = this.calculateRegeneration(this.player.regeneration);
    this.player.health += defendValue;
    this.battleLog.push(`${this.player.name} se défend et régénère ${defendValue} PV.`);
    this.checkEndOfGame();
    if (!this.finalResult) this.enemyTurn();
  }

  specialAttack(): void {
    if (!this.player || !this.enemy) return;
    const chance = Math.random();
    if (chance < 0.5) {
      const specialDamage = this.calculateDamage(this.player.damage * 2);
      this.enemy.health -= specialDamage;
      this.battleLog.push(`${this.player.name} utilise une attaque spéciale et inflige ${specialDamage} dégâts massifs !`);
    } else {
      this.battleLog.push(`${this.player.name} rate son attaque spéciale !`);
    }
    this.checkEndOfGame();
    if (!this.finalResult) this.enemyTurn();
  }

  enemyTurn(): void {
    if (!this.player || !this.enemy) return;
    const action = Math.random() < 0.5 ? 'attack' : 'defend';

    if (action === 'attack') {
      const attackValue = this.calculateDamage(this.enemy.damage);
      this.player.health -= attackValue;
      this.battleLog.push(`${this.enemy.name} attaque ${this.player.name} et inflige ${attackValue} dégâts.`);
    } else {
      const defendValue = this.calculateRegeneration(this.enemy.regeneration);
      this.enemy.health += defendValue;
      this.battleLog.push(`${this.enemy.name} se défend et régénère ${defendValue} PV.`);
    }

    this.checkEndOfGame();
  }

  calculateDamage(baseValue: number): number {
    const isCritical = Math.random() < 0.2; // 20% de chance de coup critique
    const isBlocked = Math.random() < 0.1; // 10% de chance de bloquer l'attaque
    const isFailed = Math.random() < 0.05; // 5% de chance d'échec critique
    const criticalMultiplier = isCritical ? 2 : 1;
    const blockedMultiplier = isBlocked ? 0 : 1;
    const failedMultiplier = isFailed ? 0.5 : 1;
    const damage = Math.max(0, baseValue * criticalMultiplier * blockedMultiplier * failedMultiplier);
    if (isCritical) this.battleLog.push('Coup critique !');
    if (isBlocked) this.battleLog.push('L\'attaque a été bloquée !');
    if (isFailed) this.battleLog.push('Attaque échouée !');
    return damage;
  }

  calculateRegeneration(baseValue: number): number {
    const isFailed = Math.random() < 0.1; // 10% de chance de régénération échouée
    const regenerationMultiplier = isFailed ? 0 : 1;
    const isBoosted = Math.random() < 0.05; // 5% de chance de régénération boostée
    const boostedMultiplier = isBoosted ? 1.5 : 1;
    const regeneration = baseValue * regenerationMultiplier * boostedMultiplier;
    if (isFailed) this.battleLog.push('La régénération a échoué !');
    if (isBoosted) this.battleLog.push('Régénération boostée !');
    return regeneration;
  }

  checkEndOfGame(): void {
    if (this.player && this.enemy) {
      if (this.player.health <= 0) {
        this.finalResult = `${this.enemy.name} gagne le combat !`;
        this.resultMessage = this.finalResult;
      } else if (this.enemy.health <= 0) {
        this.finalResult = `${this.player.name} gagne le combat !`;
        this.resultMessage = this.finalResult;
      }
    }
  }
  routes: { path: string; name: string }[] = [
    { path: '/', name: 'Accueil' },
    { path: '/histoire', name: 'L\'histoire'},
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
