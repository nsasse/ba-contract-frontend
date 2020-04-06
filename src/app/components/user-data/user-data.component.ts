import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {RestService} from '../../services/rest.service';
import {UserProfile} from '../../models/user-profile.model';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.scss']
})
export class UserDataComponent implements OnInit {

  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    prename: new FormControl('', [Validators.required]),
    mail: new FormControl('', [Validators.required, Validators.email]),
    age: new FormControl('', [Validators.required, Validators.min(18), Validators.max(120)]),
  });

  constructor(
    private readonly fb: FormBuilder,
    private readonly restService: RestService) {
  }

  ngOnInit(): void {
  }

  public submitUserProfile() {
    this.restService.sendUserProfile(
      new UserProfile(
        null,
        this.form.value.name,
        this.form.value.prename,
        this.form.value.mail,
        this.form.value.age,
        null)).subscribe(
      data => {
        console.log(data);
      }
    );
  }
}
