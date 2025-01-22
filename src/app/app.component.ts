// app.component.ts
import { Component, OnInit } from '@angular/core';
import { RouterOutlet, NavigationEnd, Router  } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html', // On va modifier le template ici
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    // Écouter les changements de route
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd) // On filtre uniquement les événements de fin de navigation
    ).subscribe(() => {
      // Une fois la navigation terminée, on fait défiler la page vers le haut
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}
