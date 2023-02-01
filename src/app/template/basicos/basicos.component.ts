import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css']
})
export class BasicosComponent implements OnInit {
  @ViewChild('miFormulario') miFormulario! : NgForm;

  constructor() { }

  ngOnInit(): void {
  }

  guardar(){
    console.log(this.miFormulario);
  }

  nombreValido():boolean {
    return this.miFormulario?.controls['producto']?.invalid && this.miFormulario?.controls['producto']?.touched;
  }

  precioValido():boolean {
    let touched : boolean = this.miFormulario?.controls['precio']?.touched;
    let price : boolean = this.miFormulario?.controls['precio']?.value < 0;
    let empty : boolean = this.miFormulario?.controls['precio']?.value == '' || this.miFormulario?.controls['precio']?.value == null
    return (touched && price) || (touched && empty);
  }

}
