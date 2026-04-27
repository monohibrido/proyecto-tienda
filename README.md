# Sistema de Inventario (Angular + Node + MySQL)

Aplicación web en proceso para gestión de productos, desarrollada con frontend en Angular y backend en Node.js utilizando Express y Sequelize.

---

# Tecnologías utilizadas

* Frontend: Angular 21
* Backend: Node.js + Express
* ORM: Sequelize
* Base de datos: MySQL
* Estilos: Bootstrap

---

# Funcionalidades

* Crear productos
* Listar productos
* Editar productos
* Eliminar productos

---

# Instalación

1. Clonar repositorio

```bash
git clone https://github.com/monohibrido/proyecto-tienda.git
cd proyecto-tienda
```

---

2. Backend

```bash
cd back-tienda
npm install
node index.js
```

La base de datos se creará automáticamente mediante Sequelize

---

3. Frontend

```bash
cd front-tienda
npm install
ng serve
```

Abrir en navegador:

```
http://localhost:4200
```

---

#Base de datos

* Motor: MySQL
* ORM: Sequelize
* Las tablas se generan automáticamente con `sequelize.sync()`



