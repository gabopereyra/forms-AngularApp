import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailValidatorService } from 'src/app/shared/validators/email-validator.service';
import { ValidatorService } from 'src/app/shared/validators/validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

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

  submitFormulario(){
    this.miForm.markAllAsTouched();
  }

}
