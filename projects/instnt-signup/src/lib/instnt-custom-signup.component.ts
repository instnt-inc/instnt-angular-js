import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Input } from '@angular/core';
import { InstntSignupService } from './instnt-signup.service';

/*
* Instnt custom signup component.
*/
@Component({
  selector: 'instnt-custom-signup',
  template: `
  <div style="display: none">
    <div id="instnt-form-generator" #innerDivElement></div>
  </div>
  `,
  styles: []
})
export class InstntCustomSignupComponent implements AfterViewInit {
  @Input() formId: string;
  @Input() sandbox: boolean;
  @ViewChild('innerDivElement') innerDivElement: ElementRef;

  constructor(private instntSignupService: InstntSignupService) { }

  ngAfterViewInit(): void {
    // Load the jquery library first.
    const jQueryFragment = document.createRange().createContextualFragment('<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>');
    this.innerDivElement.nativeElement.appendChild(jQueryFragment);

    this.instntSignupService
      .getFormCodes(this.formId, this.sandbox, true)
      .subscribe(response => {
        const fragment = document.createRange().createContextualFragment(response.html);
        this.innerDivElement.nativeElement.appendChild(fragment);
      }, err => {
        console.log(err);
      });
  }
}