import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/Model/cliente.model';
import { ClienteService } from 'src/app/service/cliente.service';


@Component({
  selector: 'app-nuevocliente',
  templateUrl: './nuevocliente.component.html',
  styleUrls: ['./nuevocliente.component.css']
})
export class NuevoclienteComponent implements OnInit {
  nombre: string = "";
  cif: string = "";
  direccion: string = "";

  constructor(private clientesService: ClienteService,
    private activatedRouter: ActivatedRoute,
    private router: Router) {

  }

  ngOnInit(): void {
  }

  // onCreate(): void {
  //   const VClilente = new Cliente(this.nombre, this.cif, this.direccion);
  //   this.clientesService.create(VClilente).subscribe((response) => {
  //     alert('Cliente añadido correctamente');
  //     this.clientesService.traer()
  //     this.router.navigate(['home']);
  //   });
  // }

  onCreate(): void {
    const VCliente = new Cliente(this.nombre, this.cif, this.direccion);
    this.clientesService.create(VCliente).subscribe((res) =>
      console.log(res)
    )
    this.router.navigate(['home']);
  }


}






