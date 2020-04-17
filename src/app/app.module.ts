import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {appRouting, routingComponents} from './app.routing';

import {AppComponent} from './app.component';
import {UserDataComponent} from './components/user-data/user-data.component';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientJsonpModule, HttpClientModule} from '@angular/common/http';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BuyButtonComponent} from './components/buy-button/buy-button.component';

@NgModule({
  declarations: [
    AppComponent,
    UserDataComponent,
    BuyButtonComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    appRouting
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    UserDataComponent,
    BuyButtonComponent
  ]
})
export class AppModule {

}
