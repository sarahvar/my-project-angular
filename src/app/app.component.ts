// app.component.ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html', // On va modifier le template ici
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Bienvenue dans le monde d\''; // Définir seulement le texte du titre ici
}
