import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { InstntCustomSignupComponent } from './instnt-custom-signup.component';

import { InstntSignupComponent } from './instnt-signup.component';



@NgModule({
  declarations: [InstntSignupComponent, InstntCustomSignupComponent],
  imports: [
    HttpClientModule
  ],
  exports: [InstntSignupComponent, InstntCustomSignupComponent]
})
export class InstntSignupModule { }
