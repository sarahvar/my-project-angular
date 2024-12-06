import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-caitlyn',
  templateUrl: './caitlyn.component.html',
  standalone: true,
  imports: [CommonModule, RouterModule],
  styleUrls: ['./caitlyn.component.css']
})
export class CaitlynComponent {
  title = 'Caitlyn - La Shérif de Piltover';
  bio = `Caitlyn est une détective brillante de Piltover. Réputée pour sa
          détermination et son sens de la justice, elle s'allie souvent avec Vi
          pour résoudre les mystères les plus complexes et défendre sa ville.`;

  abilities = ['Tir de précision', 'Pièges tactiques', 'Sniper d\'élite'];
  series = ['Saison 1 - Épisodes 3 à 9'];

  routes = [
    { path: '/vi', name: 'Vi' },
    { path: '/jinx', name: 'Jinx' },
    { path: '/jayce', name: 'Jayce' }
  ];
}

