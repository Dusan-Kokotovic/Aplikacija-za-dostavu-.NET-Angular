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

  getKorisnik(id:number) : Observable<Registration> {
    return this.http.get<Registration>(environment.serverURL + '/api/Korisnik/'+id);
  }

  getKorisnici() : Observable<Registration[]> {
    return this.http.get<Registration[]>(environment.serverURL + '/api/Korisnik');
  }
  updateKorisnik(registration:Registration) : Observable<Registration> {
    return this.http.put<Registration>(environment.serverURL + '/api/Korisnik/'+registration.id,registration);
  }

  addKorisnik(registration:Registration) : Observable<Registration> {
    return this.http.post<Registration>(environment.serverURL + '/api/Korisnik/',registration);
  }

  sendMail(mail:string) : Observable<Registration> {
    return this.http.get<Registration>(environment.serverURL + '/api/Korisnik/Mail/'+mail);
  }

  Login(register:Registration) : Observable<Registration> {
    return this.http.post<Registration>(environment.serverURL + '/api/Korisnik/Login',register);
  }

  PrihvatiPorudzbinu(Id:Number) : Observable<Registration> {
    return this.http.get<Registration>(environment.serverURL + '/api/Korisnik/Prihvati/'+Id);
  }

  getToken(){
    return localStorage.getItem('token');
  }

}
