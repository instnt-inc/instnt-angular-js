import { AfterViewInit, ElementRef, Component, ViewChild } from '@angular/core';
import { Input } from '@angular/core';
import { InstntSignupService } from './instnt-signup.service';

/*
* Instnt signup component that displays the html signup content.
*/
@Component({
  selector: 'instnt-signup',
  template: `
    <div id="instnt-form-generator" #innerDivElement></div>
  `,
  styles: []
})
export class InstntSignupComponent implements AfterViewInit {
  @Input() formId: string;
  @Input() sandbox: boolean;
  @Input() hideFormFields: boolean;
  @ViewChild('innerDivElement') innerDivElement: ElementRef;

  constructor(private instntSignupService: InstntSignupService) { }

  ngAfterViewInit(): void {
    // Load the jquery library first.
    const jQueryFragment = document.createRange().createContextualFragment('<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>');
    this.innerDivElement.nativeElement.appendChild(jQueryFragment);

    this.instntSignupService
        .getFormCodes(this.formId, this.sandbox, this.hideFormFields)
        .subscribe(response => {
          const fragment = document.createRange().createContextualFragment(response.html);
          this.innerDivElement.nativeElement.appendChild(fragment);
        }, err => {
          console.log(err);
        });
  }
}
