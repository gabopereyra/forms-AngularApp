import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmailValidatorService implements AsyncValidator{

  constructor(private httpClient : HttpClient) { }

  validate(control: AbstractControl<any, any>): Observable<ValidationErrors | null> {
    const email = control.value

    return this.httpClient.get<any[]>(`http://localhost:3000/usuarios?q=${email}`)
      .pipe(
        map(response => {
          return (response.length == 0 ) ? null : {emailExiste: true} 
        })
      );
  }
}
