import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioContactoComponent } from './formulario-contacto/formulario-contacto.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FormularioReactivoComponent } from './formulario-reactivo/formulario-reactivo.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [FormularioContactoComponent, FormularioReactivoComponent],
  declarations: [FormularioContactoComponent, FormularioReactivoComponent]
})
export class FormulariosModule { }
