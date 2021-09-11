import { HttpClient, HttpEvent, HttpHeaders, HttpRequest } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PublicService {

  constructor(private http: HttpClient) { }

  // SendEnquiry(emailData) {
  //   return this.http.post<any>('https://azum5j2gpj.execute-api.ap-south-1.amazonaws.com/Prod/api/values/sendemail',emailData, {
  //     headers: new HttpHeaders({
  //       'content-type': 'application/json'
  //     })
  //   });
  // }
  SendEnquiry(emailData) {
    return this.http.post<any>('https://localhost:5001/api/values/SendEmail',emailData);
  }
}
