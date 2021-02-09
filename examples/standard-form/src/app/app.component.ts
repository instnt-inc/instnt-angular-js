import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { map } from "rxjs/operators";

/* declare and extend to the window interface to get rid of build errors. */
declare global {
  interface Window {
    instnt:any;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'standard-form';
  
  public form: FormGroup;
  public apiResponse: any = '';

  constructor(private formBuilder: FormBuilder,
    private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: [''],
      firstName: [''],
      surName: [''],
      mobileNumber: [''],
      physicalAddress: [''],
      zip: [''],
      city: [''],
      state: [''],
      country: ['']
    });
  }

  public onSubmitFormHelperFunction(event: any): void {
    window.instnt.submitCustomForm(this.form.value);
  }

  public onSubmitFormViaAPI(event: any): void {
    const token = window.instnt.getToken();

    this.httpClient
      .post<any>(`https://sandbox2-api.instnt.org/public/submitformdata/v1.0`, {
        ...this.form.value,
        'instnt_token': token
      }).pipe(map((response: any) => response))
      .subscribe((response: any) => {
        console.log(response);
        this.apiResponse = JSON.stringify(response.data);
      });
  }
}
