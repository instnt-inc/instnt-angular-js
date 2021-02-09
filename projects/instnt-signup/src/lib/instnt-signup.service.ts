import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InstntSignupService {
  private sanboxUrl = 'https://sandbox2-api.instnt.org';
  private liveUrl = 'https://api.instnt.org';

  constructor(private httpClient: HttpClient) { }

  public getFormCodes(formId: string, isSandbox: boolean, hideFormfields: boolean): Observable<any> {
    const serviceUrl = isSandbox ? this.sanboxUrl : this.liveUrl;
    const queryParams = hideFormfields ? '?hide_form_fields=true' : '';

    return this.httpClient
          .get(`${serviceUrl}/public/getformcodes/${formId}${queryParams}`)
          .pipe(map((response: any) => response));
  }
}
