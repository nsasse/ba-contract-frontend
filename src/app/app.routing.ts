import {RouterModule, Routes} from '@angular/router';
import {UserDataComponent} from './components/user-data/user-data.component';
import {BuyButtonComponent} from './components/buy-button/buy-button.component';
import {AppComponent} from './app.component';

export const appRoutes: Routes = [
  {path: '', component: AppComponent},
  {path: 'contract', component: UserDataComponent},
  {path: 'buy', component: BuyButtonComponent}
];

export const appRouting = RouterModule.forRoot(appRoutes);
export const routingComponents = [
  UserDataComponent, BuyButtonComponent
];
