import { Component, OnInit } from '@angular/core';
import { Cliente } from './Cliente';
import { ClienteService } from './cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html'
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[];
  public clienteModificar : any;

  constructor(private service: ClienteService, private router:Router) { }

  ngOnInit() {
    this.service.getClientes()
    .subscribe( data=> {
      this.clientes=data;
    })
  }

  eliminar(cedula: number) {
    this.service.delete(cedula).subscribe(data =>{
      this.ngOnInit();
    });
  }

  modificar(cedula: number){
    return this.service.getCliente(cedula).subscribe();
  }

}
