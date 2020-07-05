import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, throwError, of } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CreditApplicationService {

  creditApplicationUrl = 'https://dovercreditapppoc.azurewebsites.net/api/OnCreditApplicationPost';

  constructor(private httpClient: HttpClient) { }

  postCreditApplication(data: any) {
    return this.httpClient.post<any>(
      this.creditApplicationUrl,
      data,
      {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
        }),
        responseType: 'json'
      })
    .pipe(
      catchError((error) => of(console.error(error)))
    );
  }

}
