import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto';
import { Producto } from '../../models/producto';
import { FormsModule } from '@angular/forms'

import { FormAddProduct } from './form-add-product/form-add-product';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [FormsModule, FormAddProduct],
  templateUrl: './productos.html',
  styleUrl: './productos.scss',
})

export class ProductosComponent implements OnInit {

  productos: Producto[] = [];

  nuevoProducto: Producto = {
    sku: '',
    nombre: '',
    categoria: '',
    precio: 0,
    costo: 0,
    stock: 0,
  }

  editando: boolean = false;
  idEditando: number | null = null;

  mostrarFormulario: boolean = false;



  constructor(private productoService: ProductoService) { }

  ngOnInit() {
    this.obtenerProductos();
  }

  obtenerProductos() {
    this.productoService.getProductos().subscribe(data => {
      this.productos = data.map(p => ({ ...p }));
    });
  }

  eliminarProducto(id: number) {
    this.productoService.eliminarProducto(id).subscribe(() => {
      this.obtenerProductos();

    });
  }

  crearProducto() {

    if (this.editando && this.idEditando !== null) {
      this.productoService.actualizarProducto(this.idEditando, this.nuevoProducto)
        .subscribe(() => {
          this.obtenerProductos();
          this.resetForm();

        });
    } else {
      this.productoService.crearProducto(this.nuevoProducto)
        .subscribe(() => {
          this.obtenerProductos();
          this.resetForm();
          this.mostrarFormulario = false;
        });
    }


  }

  editarProducto(producto: any) {
    this.editando = true;
    this.idEditando = producto.id;

    this.nuevoProducto = { ...producto };
  }

  resetForm() {
    this.nuevoProducto = {
      sku: '',
      nombre: '',
      categoria: '',
      precio: 0,
      costo: 0,
      stock: 0,
    };
    this.editando = false;
    this.idEditando = null;
  }

  cancelarEdicion() {
    this.resetForm();
    this.mostrarFormulario = false;
  }


}
