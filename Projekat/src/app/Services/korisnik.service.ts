import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { Registration } from '../models/registration.model';

@Injectable({
  providedIn: 'root'
})
export class KorisnikService {

  constructor(private http: HttpClient) { }

  getKorisnici() : Observable<Registration[]> {
    return this.http.get<Registration[]>(environment.serverURL + '/api/Korisnik');
  }
  updateKorisnik(registration:Registration) : Observable<Registration> {
    return this.http.put<Registration>(environment.serverURL + '/api/Korisnik/'+registration.id,registration);
  }

  addKorisnik(registration:Registration) : Observable<Registration> {
    return this.http.post<Registration>(environment.serverURL + '/api/Korisnik/',registration);
  }
}
