import { Injectable } from '@angular/core';
import { FormControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {
  patternNombre : string = '([a-zA-A]+) ([a-zA-A]+)';
  emailPattern  : string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

  adminNO(control : FormControl) : ValidationErrors | null{
    let valor : string = control.value?.trim().toLowerCase();
    
    if(valor == "admin"){
      return {
        noAdmin: true
      }
    }

    return null;
  }
  

  constructor() { }
}
