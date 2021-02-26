# Instnt Angular SDK

This documentation covers the basics of Instnt Angular SDK implementation. Put simply, Angular is an open-source front-end developer library utilized by Instnt to create a more streamlined and elegant integration with your company's forms. For a more detailed look at this implementation, visit
[Instnt's documentation library.](https://support.instnt.org/hc/en-us/articles/360055345112-Integration-Overview)

[![build status](https://img.shields.io/travis/instnt/instnt-angular-js/master.svg?style=flat-square)](https://travis-ci.org/instnt/instnt-angular-js)
[![npm version](https://img.shields.io/npm/v/@instnt/instnt-angular-js.svg?style=flat-square)](https://www.npmjs.com/package/@instnt/instnt-angular-js)

### Table of Contents
- [Getting Started](https://github.com/instnt-inc/instnt-angular-js#getting-started)
- [Rendering a Standard Signup Workflow with Instnt Angular SDK](https://github.com/instnt-inc/instnt-angular-js#rendering-a-standard-signup-form-with-instnt-angular-sdk)
- [Rendering a Custom Signup Workflow with Instnt Angular SDK](https://github.com/instnt-inc/instnt-angular-js#rendering-a-custom-signup-form-with-instnt-angular-sdk)
- [Submit Workflow to Instnt Using the JavaScript Helper Function](https://github.com/instnt-inc/instnt-angular-js#submit-form-to-instnt-using-the-javascript-helper-function)
- [Submit Workflow to Instnt via API](https://github.com/instnt-inc/instnt-angular-js#submit-form-to-instnt-via-api)
- [Instnt's Sandbox](https://github.com/instnt-inc/instnt-angular-js#instnts-sandbox)
- [FAQ](https://github.com/instnt-inc/instnt-angular-js#faq)

### Related Material
- [Instnt API Endpoints](https://swagger.instnt.org/)

# Getting Started

In order to begin utilizing Instnt Angular SDK, enter the following command to install Instnt's Angular components:

```sh
npm i @instnt/instnt-angular-js
```
This process should only take a few moments. Once complete, import Instnt's Angular Workflow component in your application module:

```jsx
import { InstntSignupModule } from '@instnt/instnt-angular-js';
```
InstntSignupModule imports a boilerplate Instnt workflow with the following fields:

* Email Address
* First Name
* Surname
* Mobile Number
* State
* Street Address
* Zip code
* City
* Country
* Submit My Workflow Button

# Rendering a Standard Signup Workflow with Instnt Angular SDK

Now that the components have been installed and imported, it's time to set up the html file using the [following line of code](https://github.com/instnt-inc/instnt-angular-js/blob/master/examples/standard-form/src/app/app.component.html#L307):

```jsx
<instnt-signup [sandbox]='true' [hideFormFields]='false' [formId]='v879876100000'></instnt-signup>
```
Note that a Workflow ID is required in order to properly execute this function. For more information concerning Workflow IDs, please visit
[Instnt's documentation library.](https://support.instnt.org/hc/en-us/articles/360055345112-Integration-Overview)

The `sandbox` parameter is added to connect the workflow components to Instnt's Sandbox environment. More information concerning the sandbox environment is available in this [quick start guide](https://github.com/instnt-inc/instnt-angular-js#instnts-sandbox).

With the above code complete, start the application by running the following command:

```jsx
npm start
```
Once the application has loaded, a fully rendered workflow will appear including a unique signature and expiring token.


# Rendering a Custom Signup Workflow with Instnt Angular SDK

If you'd like to integrate Instnt's back-end functionality with your company's UI, import the [InstntSignUpModule](https://github.com/instnt-inc/instnt-angular-js/blob/master/examples/standard-form/src/app/app.module.ts#L5) in your application's module using the following line of code:

```jsx
import { InstntSignupModule } from '@instnt/instnt-angular-js';
```

The import command imports Instnt's Custom Signup workflow, which hides all of the standard workflow fields and application functionality when rendered, allowing for the addition of new workflow fields a la carte.

After that, set the [data object parameters](https://github.com/instnt-inc/instnt-angular-js/blob/master/examples/standard-form/src/app/app.component.ts#L41) and call the instnt submit function using the following lines of code:

```jsx
public submitMyForm(): void {
  window.instnt.submitCustomForm(this.form.value);
};
```

These takes all of the data objects referenced throughout your sign-up process via your company's own UI and passes them through the InstntCustomSignUp function, allowing for your UI to integrate with Instnt without having to change a pixel.

To set up the html component, enter the [following line of code](https://github.com/instnt-inc/instnt-angular-js/blob/master/examples/standard-form/src/app/app.component.html#L312):

```jsx
<instnt-custom-signup [sandbox]='true' [formId]='v879876100000'></instnt-custom-signup>
```

## Submit Workflow to Instnt Using the JavaScript Helper Function

```jsx
public submitMyForm(): void {
  window.instnt.submitCustomForm(this.form.value);
};
```

## Submit Workflow to Instnt via API

This submission method can be utilized for submitting data from either the front end or the backend by collecting data from the applicant, using Instnt SDK's functionality `window.instnt.getToken()` to retrieve an `instnt_token` that encapsulates Instnt system data as well as the applicant's device and behavioral information, and then submitting all of the data to Instnt.

When submitting this data from the backend, the `instnt_token` should be collected on the web app and transferred to the backend.

### Sandbox

```jsx
  public onSubmitFormViaAPI(): void {
    // 'form.value' contains user data fields
    // Get system information using window.instnt.getToken() and send it along with data using 'instnt_token' key
    const token = window.instnt.getToken();

    this.httpClient
      .post<any>(`https://sandbox2-api.instnt.org/public/submitformdata/v1.0`, {
        ...this.form.value,
        'instnt_token': token
      }).pipe(map((response: any) => response))
      .subscribe((response: any) => {
        console.log(response.data);
      });
  };
```

# Instnt's Sandbox

Instnt's Sandbox is a static environment that assesses provisioned synthetic identities that we give you for onboarding and testing purposes. The provisioned identities contain:

* Email address
* First name
*	Last name
*	Phone number
*	Physical address (city, state, zip)
*	IP address

Please contact support@instnt.org for more information concerning access to the sandbox environment.

# FAQ

### What if I want to add some custom text fields onto my workflows?

After setting up the InstntCustomSignUp function, simply install the following Angular Material UI components using the following commands:

```jsx
npm i @angular/material
```

In your angular module component, import the following:

```jsx
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
```

Once the components have been installed and imported, collect data from the user. Example:

```jsx
  <mat-form-field class="example-full-width">
    <mat-label>Email Address</mat-label>
    <input matInput placeholder="Email Address" formControlName="email">
  </mat-form-field>
```

The 'email' text here is used as an example and can be anything you'd like to have appear on the workflow. Always include the value and onChange fields as written in the example above, as they mark the text field as data to be passed through the InstntCustomSignUp function.
