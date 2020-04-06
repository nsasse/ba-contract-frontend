import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {UserProfile} from '../models/user-profile.model';

@Injectable({
  providedIn: 'root'
})

// You have to unlock CORS in your browser with an addon!
export class RestService {

  constructor(private http: HttpClient) {
  }

  public sendUserProfile(userProfile: UserProfile): Observable<any> {
    return this.http.post<any>('http://localhost:8081/contract/userprofile', userProfile);
  }
}
