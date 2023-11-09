import { AbstractControl, ValidationErrors } from '@angular/forms';

export class CustomValidator {
  static checkDob(control: AbstractControl): ValidationErrors | null {
   
    const dob = new Date(control.value);
    const currentDate = new Date();
    
    if (dob > currentDate) {
      return { checkDob: true }; 
    }

    return null; 
  }

  static noNumbers(control: AbstractControl): ValidationErrors | null {
    if(control.value!=''){
        if (!isNaN(Number(control.value))) {
            return { noNumbers: true };
          }
    }
 
    return null;
  }
  
}
