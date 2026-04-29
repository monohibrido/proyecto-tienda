import { Component, Input, Output, EventEmitter, ENVIRONMENT_INITIALIZER } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Producto } from '../../../models/producto';

@Component({
  selector: 'app-form-add-product',
  imports: [FormsModule],
  templateUrl: './form-add-product.html',
  styleUrl: './form-add-product.scss',
})
export class FormAddProduct {

  @Input() producto!: Producto;
  @Input() editando: boolean = false;

  @Output() guardar = new EventEmitter<Producto>();
  @Output() cancelar = new EventEmitter<void>();

  enviar() {
    this.guardar.emit(this.producto);
  }

  cancelarForm() {
    this.cancelar.emit();
  }
}


