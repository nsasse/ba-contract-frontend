import {Component, Injector} from '@angular/core';
import {createCustomElement} from '@angular/elements';
import {UserDataComponent} from './components/user-data/user-data.component';
import {BuyButtonComponent} from './components/buy-button/buy-button.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'ba-contract';

  constructor(private injector: Injector) {
    const contract = createCustomElement(UserDataComponent, {injector: this.injector});
    const buyButton = createCustomElement(BuyButtonComponent, {injector: this.injector});
    customElements.define('user-data', contract);
    customElements.define('buy-button', buyButton);
  }
}
