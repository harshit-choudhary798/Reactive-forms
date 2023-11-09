import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Reactive-forms';

  // Create form with controls
  form = new FormGroup({
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    middlename: new FormControl('', [Validators.required]),
    dob: new FormControl('', [Validators.required]),
    studentId: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    country: new FormControl('', [Validators.required]),
    city: new FormControl('', [Validators.required]),
    branch: new FormControl('', [Validators.required]),
    courses: new FormControl('', [Validators.required]),
    terms: new FormControl('', [Validators.required]),

  });
}
