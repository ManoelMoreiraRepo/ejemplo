import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/Model/cliente.model';
import { ClienteService } from 'src/app/service/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  cliente: Cliente[] = [];

  constructor(public clientesService: ClienteService) { }

  ngOnInit(): void {
    this.clientesService.traer().subscribe(data => {this.cliente = data});
  }

  cargarcliente(): void {
    this.clientesService.traer().subscribe((data: Cliente[]) => {
      this.cliente = data;
    });
  }

  borrar(id?: number) {
    if (id != undefined) {
      this.clientesService.borrar(id).subscribe({
        next: () => {
          alert('se eliminó correctamente');
          this.cargarcliente();
        },
        error: (err) => {
          console.log(err);
          alert('Error, No se pude eliminar el cliente');
        }
      });
    }
  }

}
