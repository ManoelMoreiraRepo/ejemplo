export class Cliente{
  
    id?: number;
    nombre: string;
    cif: string;
    direccion: string;
  
    constructor(nombre: string, cif:string, direccion:string)
    {
        this.nombre = nombre;
        this.cif = cif;
        this.direccion = direccion;
    }
  }
  
  