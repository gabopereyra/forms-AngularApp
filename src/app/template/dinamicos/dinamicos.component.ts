import { Component, OnInit } from '@angular/core';

interface Persona{
  nombre : string;
  favoritos : Favorito[]
}

interface Favorito{
  id : number;
  nombre : string;
  activo : boolean;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css']
})
export class DinamicosComponent implements OnInit {
  
  public persona : Persona = {
    nombre: "Gabo",
    favoritos: [
      {
        id: 1,
        nombre: "Metal Gear",
        activo: true
      },
      {
        id: 2,
        nombre: "PES",
        activo: true
      },
    ]
  };

  public listadoFavoritos : Favorito [] = [];

  public nuevoJuego : string = "";

  constructor() { }

  ngOnInit(): void {
  }

  guardar(){
    console.log('se ha hecho click en el guardar');
  }

  eliminar(id : number){
    this.persona.favoritos[id].activo = false;
    
    this.borrarListado(id)
  }

  borrarListado(id : number){
    setTimeout(()=>{
      this.persona.favoritos.splice(id, 1);
    }, 1000);
  }

  agregarJuego(){
    const nuevoFavorito : Favorito ={
      id: this.persona.favoritos.length+1,
      nombre: this.nuevoJuego,
      activo: true
    };

    this.persona.favoritos.push({...nuevoFavorito});
    this.nuevoJuego = "";
  }

}
