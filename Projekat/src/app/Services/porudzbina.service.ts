import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { Porudzbina } from '../models/porudzbina.model';
import { identifierName } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class PorudzbinaService {

  constructor(private http: HttpClient) { }

  getPorudzbine() : Observable<Porudzbina[]> {
    return this.http.get<Porudzbina[]>(environment.serverURL + '/api/Porudzbina');
  }

  addPorudzbina(porudzbina:Porudzbina) : Observable<Porudzbina> {
    return this.http.post<Porudzbina>(environment.serverURL + '/api/Porudzbina',porudzbina);
  }

  getPorudzbineKorisnika(id:number) : Observable<Porudzbina[]> {
    return this.http.get<Porudzbina[]>(environment.serverURL + '/api/Porudzbina/Korisnik/'+ id);
  }

  getPorudzbineZaDostavu() : Observable<Porudzbina[]> {
    return this.http.get<Porudzbina[]>(environment.serverURL + '/api/Porudzbina/Dostava');
  }

  getTekucePorudzbine(id:number): Observable<Porudzbina[]> {
    return this.http.get<Porudzbina[]>(environment.serverURL + '/api/Porudzbina/TekuceDostave/'+id);
  }

  Prihvati(porudzbina:Porudzbina,id:number) : Observable<Porudzbina> {
    return this.http.put<Porudzbina>(environment.serverURL + '/api/Porudzbina/Prihvati/' +id ,porudzbina.id);
  }

}
