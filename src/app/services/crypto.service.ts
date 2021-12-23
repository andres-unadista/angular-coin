import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Crypto } from '../interfaces/crypto.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CryptoService {
  private path:string;

  constructor(private http:HttpClient) { 
    this.path = environment.pathAPI;
  }

  getCurrencyCrypto():Observable<Crypto[]>{
    return this.http.get<Crypto[]>(this.path);
  }
}
