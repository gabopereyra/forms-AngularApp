import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { EmailValidatorService } from 'src/app/shared/validators/email-validator.service';
import { ValidatorService } from 'src/app/shared/validators/validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

 get errorEmail() : string {
    const errores = this.miForm.get('email')?.errors;
    const touched = this.miForm.get('email')?.touched; 

    if (errores?.['required'] && touched){
      return "El email es obligatorio.";
    } else if(errores?.['pattern'] && touched){
      return "El formato es invalido.";
    } else{
      return "El email ya esta en uso.";
    }
  }

  miForm : FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.pattern(this.vs.patternNombre)]],
    email: ['', [Validators.required, Validators.pattern(this.vs.emailPattern)], [ this.ev ]],
    username: ['', [Validators.required, this.vs.adminNO]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    password2: ['', [Validators.required]]
  },
  {
    validators: [this.vs.camposIguales('password', 'password2')] 
  }) 


  constructor(
    private fb : FormBuilder,
    private vs: ValidatorService,
    private ev : EmailValidatorService
  ) { }

  ngOnInit(): void {
    this.miForm.reset({
      nombre: "nombre apellido",
      email: "mail@mail.com",
      username: "username",
      }
    )
  }

  campoNoValido(campo : string){
    return this.miForm.get(campo)?.invalid && this.miForm.get(campo)?.touched; 
  }

  //Example of another way to resolve personalized msg for email input
  // emailRequired(){
  //   let errores : any = this.miForm.get('email')?.errors;

  //   let noExiste = (errores?.required) ? true : false;

  //   return noExiste && this.miForm.get('email')?.touched
  // }

  // emailPattern(){
  //   let errores : any = this.miForm.get('email')?.errors;

  //   let patternNoValid = (errores?.pattern) ? true : false;

  //   return patternNoValid && this.miForm.get('email')?.touched
  // }

  // emailExiste(){
  //   let errores : any = this.miForm.get('email')?.errors;

  //   let emailExiste = (errores?.emailExiste) ? true : false;

  //   return emailExiste && this.miForm.get('email')?.touched
  // }

  submitFormulario(){
    this.miForm.markAllAsTouched();
  }

}
