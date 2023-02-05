import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent implements OnInit {
  // miFormulario : FormGroup = new FormGroup({
  //   'nombre': new FormControl('Desde TS'),
  //   'precio': new FormControl(0),
  //   'existencias': new FormControl(0)
  // })

  miFormulario : FormGroup = this.fb.group({
    'nombre': ['Desde TS'],
    'precio': [0],
    'existencias': [0]
  })

  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {
  }

}
