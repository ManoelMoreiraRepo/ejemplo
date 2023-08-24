export class Cliente{
    subscribe(arg0: (data: any) => void, arg1: (err: any) => void): any {
      throw new Error('Method not implemented.');
    }
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
  
  