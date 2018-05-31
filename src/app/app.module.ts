import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule, MatListModule, MatButtonModule, MatInputModule, MatSelectModule } from '@angular/material';

import { AppComponent } from './app.component';
import { TheGameComponent } from './the-game/the-game.component';
import { TheDictionaryComponent } from './the-dictionary/the-dictionary.component';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    TheGameComponent,
    TheDictionaryComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatListModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
