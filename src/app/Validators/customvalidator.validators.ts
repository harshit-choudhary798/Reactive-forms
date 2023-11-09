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

  static UniqueId(control: AbstractControl): Promise<ValidationErrors | null> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === "123") {
          resolve({ UniqueId: true });
        } else {
          resolve(null);
        }
      }, 3000); // Simulating a delay of 1 second
    });
  }
  
}
