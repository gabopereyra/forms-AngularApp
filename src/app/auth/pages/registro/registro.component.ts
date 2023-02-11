import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorService } from 'src/app/shared/validators/validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  miForm : FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.pattern(this.vs.emailPattern)]],
    email: ['', [Validators.required, Validators.pattern(this.vs.emailPattern)]],
    username: ['', [Validators.required, this.vs.adminNO]]
  }) 


  constructor(
    private fb : FormBuilder,
    private vs: ValidatorService
  ) { }

  ngOnInit(): void {
  }

  campoNoValido(campo : string){
    return this.miForm.get(campo)?.invalid && this.miForm.get(campo)?.touched; 
  }

  submitFormulario(){
    this.miForm.markAllAsTouched();
  }

}
