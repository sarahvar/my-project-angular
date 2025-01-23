import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Character {
  name: string;
  emoji: string;
  health: number;
  damage: number;
  regeneration: number;
  initialHealth: number;
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
    { name: 'Vi', emoji: '👊', health: 100, damage: 15, regeneration: 5, initialHealth: 100 },
    { name: 'Jinx', emoji: '💥', health: 100, damage: 20, regeneration: 3, initialHealth: 100 },
    { name: 'Caitlyn', emoji: '⭐🤠', health: 95, damage: 18, regeneration: 4, initialHealth: 95 },
    { name: 'Jayce', emoji: '⚙️', health: 110, damage: 12, regeneration: 6, initialHealth: 110 },
    { name: 'Viktor', emoji: '🔧', health: 95, damage: 17, regeneration: 4, initialHealth: 95 },
    { name: 'Silco', emoji: '🐍', health: 95, damage: 16, regeneration: 5, initialHealth: 95 },
    { name: 'Ekko', emoji: '⏳', health: 95, damage: 19, regeneration: 4, initialHealth: 95 },
    { name: 'Isha', emoji: '🌱', health: 100, damage: 14, regeneration: 7, initialHealth: 100 },
    { name: 'Sevika', emoji: '🦾', health: 100, damage: 20, regeneration: 7, initialHealth: 100 },
    { name: 'Mel', emoji: '🌟', health: 105, damage: 13, regeneration: 7, initialHealth: 105 },
  ];

  player?: Character;
  enemy?: Character;
  resultMessage: string = '';
  finalResult: string = '';
  battleLog: string[] = [];
  historyLog: string[] = [];
  consecutiveAttacks: number = 0; // Track consecutive attacks

  ngOnInit(): void {}

  selectCharacter(character: Character): void {
    this.player = character;
    this.restoreHealth(this.player);
    this.enemy = undefined; // Reset enemy selection
    this.resultMessage = `Vous avez choisi ${this.player.name}. Sélectionnez un adversaire !`;
    this.battleLog = [];
    this.finalResult = '';
    this.consecutiveAttacks = 0; // Reset attack counter
  }

  selectEnemy(character: Character): void {
    if (!this.player || this.player.name === character.name) return;
    this.enemy = character;
    this.restoreHealth(this.enemy);
    this.resultMessage = `${this.player.name} contre ${this.enemy.name}`;
  }

  playerAttack(): void {
    if (!this.player || !this.enemy) return;

    // Apply fatigue if attacking consecutively
    const fatigueMultiplier = Math.max(0.5, 1 - 0.1 * this.consecutiveAttacks); // Reduce damage by 10% per consecutive attack, minimum 50%
    const attackValue = this.calculateDamage(this.player.damage * fatigueMultiplier);

    this.enemy.health -= attackValue;
    this.battleLog.push(`${this.player.name} attaque ${this.enemy.name} et inflige ${attackValue.toFixed(1)} dégâts.`);

    this.consecutiveAttacks++; // Increment consecutive attacks
    this.checkEndOfGame();

    if (!this.finalResult) this.enemyTurn();
  }

  playerDefend(): void {
    if (!this.player || !this.enemy) return;
    const defendValue = this.calculateRegeneration(this.player.regeneration);
    this.player.health += defendValue;
    this.battleLog.push(`${this.player.name} se défend et régénère ${defendValue.toFixed(1)} PV.`);

    this.consecutiveAttacks = 0; // Reset attack counter when defending
    this.checkEndOfGame();

    if (!this.finalResult) this.enemyTurn();
  }

  specialAttack(): void {
    if (!this.player || !this.enemy) return;
    const chance = Math.random();
    if (chance < 0.5) {
      const specialDamage = this.calculateDamage(this.player.damage * 2);
      this.enemy.health -= specialDamage;
      this.battleLog.push(`${this.player.name} utilise une attaque spéciale et inflige ${specialDamage.toFixed(1)} dégâts massifs !`);
    } else {
      this.battleLog.push(`${this.player.name} rate son attaque spéciale !`);
    }

    this.consecutiveAttacks = 0; // Reset attack counter after special attack
    this.checkEndOfGame();

    if (!this.finalResult) this.enemyTurn();
  }

  enemyTurn(): void {
    if (!this.player || !this.enemy) return;
    const action = Math.random();
    let actionChoice: string;

    if (action < 0.4) {
      actionChoice = 'attack'; // 40% chance for attack
    } else if (action < 0.7) {
      actionChoice = 'defend'; // 30% chance for defend
    } else {
      actionChoice = 'special'; // 30% chance for special attack
    }

    if (actionChoice === 'attack') {
      const attackValue = this.calculateDamage(this.enemy.damage);
      this.player.health -= attackValue;
      this.battleLog.push(`${this.enemy.name} attaque ${this.player.name} et inflige ${attackValue.toFixed(1)} dégâts.`);
    } else if (actionChoice === 'defend') {
      const defendValue = this.calculateRegeneration(this.enemy.regeneration);
      this.enemy.health += defendValue;
      this.battleLog.push(`${this.enemy.name} se défend et régénère ${defendValue.toFixed(1)} PV.`);
    } else {
      const chance = Math.random();
      if (chance < 0.5) {
        const specialDamage = this.calculateDamage(this.enemy.damage * 2);
        this.player.health -= specialDamage;
        this.battleLog.push(`${this.enemy.name} utilise une attaque spéciale et inflige ${specialDamage.toFixed(1)} dégâts massifs !`);
      } else {
        this.battleLog.push(`${this.enemy.name} rate son attaque spéciale !`);
      }
    }

    this.checkEndOfGame();
  }

  calculateDamage(baseValue: number): number {
    const isCritical = Math.random() < 0.25; // 25% chance for a critical hit
    const isBlocked = Math.random() < 0.15; // 15% chance to block the attack
    const isFailed = Math.random() < 0.1; // 10% chance of a failed attack
    const criticalMultiplier = isCritical ? 2 : 1;
    const blockedMultiplier = isBlocked ? 0 : 1;
    const failedMultiplier = isFailed ? 0.5 : 1;

    const damage = Math.max(0, baseValue * criticalMultiplier * blockedMultiplier * failedMultiplier);
    if (isCritical) this.battleLog.push('Coup critique !');
    if (isBlocked) this.battleLog.push('L/attaque a été bloquée !');
    if (isFailed) this.battleLog.push('Attaque échouée !');

    return damage;
  }

  calculateRegeneration(baseValue: number): number {
    const isFailed = Math.random() < 0.1; // 10% chance of failed regeneration
    const regenerationMultiplier = isFailed ? 0 : 1;
    const isBoosted = Math.random() < 0.1; // 10% chance of boosted regeneration
    const boostedMultiplier = isBoosted ? 1.75 : 1; // Boost regeneration more significantly

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
        this.historyLog.push(...this.battleLog, this.finalResult, "Le combat est terminé.");
        setTimeout(() => this.resetGame(), 10000); // Delay reset
      } else if (this.enemy.health <= 0) {
        this.finalResult = `${this.player.name} gagne le combat !`;
        this.resultMessage = this.finalResult;
        this.historyLog.push(...this.battleLog, this.finalResult, "Le combat est terminé.");
        setTimeout(() => this.resetGame(), 10000); // Delay reset
      }
    }
  }

  restoreHealth(character: Character): void {
    character.health = character.initialHealth;
  }

  resetHealth(): void {
    this.characters.forEach(character => {
      character.health = character.initialHealth;
    });
  }

  resetGame(): void {
    this.resultMessage = '';
    this.finalResult = '';
    this.battleLog = [];
    this.resetHealth();
  }

  routes: { path: string; name: string }[] = [
    { path: '/', name: 'Accueil 🏠' },
    { path: '/histoire', name: 'L\'histoire 📖'},
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
    { path: '/mel', name: 'Mel 🌟'},
    { path: '/quiz', name: 'Quiz 📝' },
    { path: '/game', name: 'Memory Game 🧠' },
  ];
}
