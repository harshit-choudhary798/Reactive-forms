import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidator } from './Validators/customvalidator.validators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Reactive-forms';


  form = new FormGroup({
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    middlename: new FormControl('', [Validators.required]),
    dob: new FormControl('', [Validators.required, CustomValidator.checkDob]),
    studentId: new FormControl('', [Validators.required],[CustomValidator.UniqueId]),
    address: new FormControl('', [Validators.required]),
    country: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required,CustomValidator.noNumbers]),
    branch: new FormControl('', [Validators.required]),
    course: new FormControl('', [Validators.required]),
    terms: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    termsCheckbox: new FormControl(false, [Validators.required, Validators.pattern('true')]),
  });
  onSubmit(form:any) {
    if (form.invalid) {
     form.markAllAsTouched();
      
    }

    
    
  }
}
