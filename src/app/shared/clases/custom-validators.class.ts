import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export class CustomValidators {
    static dateMinimum(min: Date): ValidatorFn {
      return (control: AbstractControl): ValidationErrors | null => {
        if (control.value == null) {
          return null;
        }
    
        return new Date(control.value) >= min ? null : {
          'date-minimum': {
            'date-minimum': min,
            'actual': control.value
          }
        };
      };
    }
  }