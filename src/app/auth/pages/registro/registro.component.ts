import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  patternNombre : string= '([a-zA-A]+) ([a-zA-A]+)';
  emailPattern : string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
  
  adminNO(control : FormControl){
    let valor : string = control.value?.trim().toLowerCase();
    
    if(valor == "admin"){
      return {
        noAdmin: true
      }
    }

    return null;
  }

  miForm : FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.pattern(this.patternNombre)]],
    email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
    username: ['', [Validators.required, this.adminNO]]
  }) 


  constructor(
    private fb : FormBuilder,
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
