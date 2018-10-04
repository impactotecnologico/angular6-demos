import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioContactoComponent } from './formulario-contacto/formulario-contacto.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FormularioReactivoComponent } from './formulario-reactivo/formulario-reactivo.component';
import { FormularioReactivo2Component } from './formulario-reactivo2/formulario-reactivo2.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [FormularioContactoComponent, FormularioReactivoComponent, FormularioReactivo2Component],
  declarations: [FormularioContactoComponent, FormularioReactivoComponent, FormularioReactivo2Component]
})
export class FormulariosModule { }
