import { Component, OnInit } from '@angular/core';
import { User } from '../../feature1-module/models/user';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-formulario-contacto',
  templateUrl: './formulario-contacto.component.html',
  styleUrls: ['./formulario-contacto.component.css']
})
export class FormularioContactoComponent implements OnInit {

  public usuario: User = new User();

  constructor() { }

  ngOnInit() {
  }

  onSubmit(formulario: NgForm) {
    console.log(formulario);
    console.log(this.usuario);
  }

}
