import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule,
         MatButtonModule,
         MatCardModule,MatIconModule} from '@angular/material';
import { FlexLayoutModule} from '@angular/flex-layout';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import { KitchenComponent } from './kitchen/kitchen.component';
import { ProfileComponent } from './profile/profile.component';
import { RecipeComponent } from './recipe/recipe.component';

import { RecipeCardComponent } from './recipe-card/recipe-card.component';
import { HttpClientModule } from '@angular/common/http';
import { FoodDataService } from './food-data.service';
import { UserFormComponent } from './user-form/user-form.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    MarketplaceComponent,
    KitchenComponent,
    ProfileComponent,
    RecipeComponent,
    RecipeCardComponent,
    UserFormComponent

  ],
  imports: [
    BrowserModule,
    MatIconModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatButtonModule,
    MatCardModule,
    HttpClientModule
  ],
  providers: [FoodDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
