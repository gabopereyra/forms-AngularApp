import { FormControl } from "@angular/forms";

export const patternNombre : string = '([a-zA-A]+) ([a-zA-A]+)';
export const emailPattern  : string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";

export const adminNO = (control : FormControl) => {
    let valor : string = control.value?.trim().toLowerCase();
    
    if(valor == "admin"){
      return {
        noAdmin: true
      }
    }

    return null;
  }
  