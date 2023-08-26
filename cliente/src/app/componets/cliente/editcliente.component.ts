import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/Model/cliente.model';
import { ClienteService } from 'src/app/service/cliente.service';

@Component({
  selector: 'app-editcliente',
  templateUrl: './editcliente.component.html',
  styleUrls: ['./editcliente.component.css']
})
export class EditclienteComponent implements OnInit {
  clienteedit!: Cliente;

  constructor(private clientesService: ClienteService,
    private activatedRouter: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    // console.log("entro");
    this.clientesService.detail(id).subscribe(
      data => {
        this.clienteedit = data;
      }
    )
  }
 

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];

    this.clientesService.actualizar(id, this.clienteedit).subscribe(
      data => {
        console.log("vamos a ver");
        // this.clientesService = data;
        alert('Cliente Modificado');
        this.router.navigate(['home']);
      }
    )
  }
}
