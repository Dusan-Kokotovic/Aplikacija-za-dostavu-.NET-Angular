import { Injectable } from '@angular/core';
import { Jelo } from '../models/jelo.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JeloService {
  constructor(private http: HttpClient) { }

  getJela(token:string) : Observable<Jelo[]> {

    return this.http.get<Jelo[]>(environment.serverURL + '/api/Jelo');
  }
  dodajJelo(jelo:Jelo,token:string) :Observable<Jelo> {
    return this.http.post<Jelo>(environment.serverURL + '/api/Jelo', jelo);
  }

}
