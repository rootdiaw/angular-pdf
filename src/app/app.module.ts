import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ExemplepdfComponent } from './modules/exemplepdf/exemplepdf.component';
import { NewutilisateurComponent } from './modules/newutilisateur/newutilisateur.component';

@NgModule({
  declarations: [
    AppComponent,
    ExemplepdfComponent,
    NewutilisateurComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
