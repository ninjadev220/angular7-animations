import { FlipModule } from '../animation/flip/flip.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PrettyBoxModule } from '../animation/prettybox/pretty.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FlipModule, PrettyBoxModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
