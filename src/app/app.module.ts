import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CpfCnpjPipe } from '../pipes/cpfcnpj.pipe';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, CpfCnpjPipe ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
