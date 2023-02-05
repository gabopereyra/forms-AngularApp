import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent implements OnInit {
  miFormulario : FormGroup = new FormGroup({
    'nombre': new FormControl('Desde TS')
  })

  constructor() { }

  ngOnInit(): void {
  }

}
