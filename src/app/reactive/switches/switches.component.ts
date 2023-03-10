import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styleUrls: ['./switches.component.css']
})
export class SwitchesComponent implements OnInit {

  miFormulario : FormGroup = this.fb.group({
    genero: ['', Validators.required],
    notificaciones: [],
    condiciones: [, Validators.requiredTrue]
  })

  persona = {
    genero: "F",
    notificaciones: true
  }

  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {
    this.miFormulario.reset(this.persona);

    this.miFormulario.valueChanges.subscribe( ({condiciones, ...rest}) =>{
      this.persona = rest;
    })
  }

  guardar(){
    const form = {...this.miFormulario.value}

    delete form.condiciones;

    this.persona = form;

  }

}
