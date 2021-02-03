import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IndicatorsService {

  constructor(public http: HttpClient) { }

  getData() {
    return this.http.get('https://mindicador.cl/api');
  }

  getIndicatorDetail(indicator: string){
    return this.http.get('https://mindicador.cl/api/'+ indicator);
  }
}
