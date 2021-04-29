import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Cliente } from '../Cliente';
import { ClienteService } from '../cliente.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  cliente: Cliente;
  private message:"String";
  private className:String;


  constructor(private formBuilder: FormBuilder, private service: ClienteService, private router: Router) { }

  editForm: FormGroup;
  ngOnInit() {
    this.editForm = this.formBuilder.group({
      cedula: [ 0 , Validators.required],
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      celular: ['', Validators.required],
      tipo_sangre: ['', Validators.required],
      peso: [0, Validators.required],
      altura: [0, Validators.required],
      mensualidad: [ 0 , Validators.required],
      modalidad: ['', Validators.required],
      dia_vigencia: [0, Validators.required],
      eps: ['' , Validators.required]
    });
  }

  onSubmit() {
    this.service.update(this.editForm.value)
      .subscribe( data => {
        //this.router.navigate(['clientes']);
      },
      /*(responses:HttpErrorResponse) =>{
        this.className="alert alert-danger"
        this.message=responses.error;
      }*/
    );
  }

}
