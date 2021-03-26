import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';



const appRoutes: Routes = [
  {path: '', redirectTo: '/recipes', pathMatch: 'full'},
  //Lazy loading- When user visit /recipes then only Recipes Component
 // {path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule'}

  //new way to implement Lazy loading for new angular version- either we can use above implementation or below one.
   {path: 'recipes', loadChildren: () => import('./recipes/recipes.module').then(m => m.RecipesModule)},
   {path: 'shopping-list', loadChildren: () => import('./shopping-list/shopping-list.module').then(m => m.ShoppingListModule)},
   {path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)}




];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }



