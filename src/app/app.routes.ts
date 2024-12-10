import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';  // Assurez-vous que le chemin est correct
import { HistoryComponent } from '../app/pages/history/history.component';
import { ViComponent } from '../app/pages/characters/vi/vi.component';  // Assurez-vous que le chemin est correct
import { JinxComponent } from '../app/pages/characters/jinx/jinx.component';
import { CaitlynComponent } from '../app/pages/characters/caitlyn/caitlyn.component';  // Assurez-vous que le chemin est correct
import { JayceComponent } from '../app/pages/characters/jayce/jayce.component';
import { ViktorComponent } from '../app/pages/characters/viktor/viktor.component';
import { SilcoComponent } from '../app/pages/characters/silco/silco.component';
import { EkkoComponent } from '../app/pages/characters/ekko/ekko.component';
import { IshaComponent } from '../app/pages/characters/isha/isha.component';
import { QuizComponent } from '../app/pages/quiz/quiz.component';
// Tableau des routes
export const routes: Routes = [
  { path: '', component: HomeComponent },  // Route pour la page d'
  { path: 'histoire', component: HistoryComponent },
  { path: 'vi', component: ViComponent },  // Route pour la page "vi"
  { path: 'jinx', component: JinxComponent },
  { path: 'caitlyn', component: CaitlynComponent },  // Route pour la page "caitlyn"
  { path: 'jayce', component: JayceComponent },
  { path: 'viktor', component: ViktorComponent },
  { path: 'silco', component: SilcoComponent },
  { path: 'ekko', component: EkkoComponent },
  { path: 'isha', component: IshaComponent },
  { path: 'quiz', component: QuizComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  // Utilisation des routes dans l'application
  exports: [RouterModule]
})
export class AppRoutingModule { }
