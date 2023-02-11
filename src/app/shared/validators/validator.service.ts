import { Injectable } from '@angular/core';
import { AbstractControl, FormControl, ValidationErrors } from '@angular/forms';

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
  
  camposIguales(campo1 : string, campo2 : string){
    return (formGroup : AbstractControl) : ValidationErrors | null => {
      const campoUno = formGroup.get(campo1)?.value;
      const campoDos = formGroup.get(campo2)?.value;

      if(campoUno != campoDos){
        formGroup.get(campo2)?.setErrors({ noIguales: true})
        return {
          noIguales: true
        }
      }

      formGroup.get(campo2)?.setErrors(null)

      return null;
    }
  }

  constructor() { }
}
