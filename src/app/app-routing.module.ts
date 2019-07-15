import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { KitchenComponent } from './kitchen/kitchen.component';
import { ProfileComponent } from './profile/profile.component';
import { RecipeComponent } from './recipe/recipe.component';
import { MarketplaceComponent } from './marketplace/marketplace.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent, data: { animation: 'isRight' }},
  {path: 'kitchen', component: KitchenComponent, data: { animation: 'isRight' }},
  {path: 'profile', component: ProfileComponent, data: { animation: 'isRight' }},
  {path: 'recipe', component: RecipeComponent, data: { animation: 'isRight' }},
  {path: 'marketplace', component: MarketplaceComponent, data: { animation: 'isRight' }}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
