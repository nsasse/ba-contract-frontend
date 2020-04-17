import {Component, Injector} from '@angular/core';
import {createCustomElement} from '@angular/elements';
import {UserDataComponent} from './components/user-data/user-data.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'ba-contract';

  constructor(private injector: Injector) {
    const el = createCustomElement(UserDataComponent, {injector: this.injector});
    customElements.define('user-data', el);
  }
}
