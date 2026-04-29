import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Producto } from '../../../models/producto';

@Component({
  selector: 'app-products-table',
  imports: [],
  templateUrl: './products-table.html',
  styleUrl: './products-table.scss',
})
export class ProductsTable {

  @Input() productos: Producto[] = [];

  @Output() editarProducto = new EventEmitter<Producto>();
  @Output() eliminarProducto = new EventEmitter<number>();

  @Output() abrirFormulario = new EventEmitter<void>();

  editar(p: Producto) {
    this.editarProducto.emit(p);
  }

  eliminar(id: number) {
    this.eliminarProducto.emit(id);
  }

  abrir() {
    this.abrirFormulario.emit();
  }


}
