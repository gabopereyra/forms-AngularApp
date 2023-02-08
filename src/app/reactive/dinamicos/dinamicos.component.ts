import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css']
})
export class DinamicosComponent implements OnInit {

  miFormulario : FormGroup = this.fb.group({
    'nombre': [, [Validators.required, Validators.minLength(3)]],
    'favoritos': this.fb.array([
      ['Juego uno'],
      ['Juego dos']
    ], Validators.required)
  })

  nuevoFavorito = this.fb.control('', Validators.required);

  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {
  }

  get favoritosArray(){
    return this.miFormulario.get('favoritos') as FormArray;
  }

  campoNoValido( campo : string ){
    return this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched;
  }

  agregarJuego(){
    if(this.nuevoFavorito.invalid) return;

    let control = this.fb.control(this.nuevoFavorito.value);

    this.favoritosArray.push(control);

    this.nuevoFavorito.reset();
  }

  eliminar(id : any){

  }

  guardar(){
    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();
      return;
    }

    console.log(this.miFormulario.value);
    
    this.miFormulario.reset();
  }

  borrarFavorito(indice: number){
    this.favoritosArray.removeAt(indice);
  }
}
