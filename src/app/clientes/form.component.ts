import { Component, OnInit } from '@angular/core';
import {ClienteService} from './cliente.service';
import {Router} from '@angular/router';
import { HttpErrorResponse} from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
})

export class FormComponent implements OnInit {

  private titulo:string = "Ingresar Cliente";
  private message:String;
  private className:String;
  constructor(private formBuilder: FormBuilder, private service: ClienteService, private router: Router) { }

  addForm: FormGroup;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
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
    this.service.create(this.addForm.value)
      .subscribe( data => {
        this.router.navigate(['clientes']);
      },
      (responses:HttpErrorResponse) =>{
        this.className="alert alert-danger"
        this.message=responses.error.respuesta;
      }
    );
    
  }
  
}
