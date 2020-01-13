import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategorieComponent } from './categorie/categorie.component';


// definir les routes de mon projet
const routes: Routes = [
  // creation des routes
  { path: 'categorie', component: CategorieComponent},

  {
    // si rien, alors avoir par defaut
    path: '',
    // redirection vers path existant
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
