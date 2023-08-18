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

  // cliente: Cliente = new Cliente("","","");

  constructor(public clientesService: ClienteService) { }

  ngOnInit(): void {
    this.clientesService.traer().subscribe(data => {this.cliente = data});
  }

}
