# 🧪 Trabajo Práctico Complementario: Implementación de Búsqueda por Nombre

## 🎯 Objetivo

Agregar una funcionalidad de **búsqueda por nombre** de productos a una aplicación CRUD ya existente. Esta mejora simula una tarea cotidiana dentro de un entorno laboral real, aplicando buenas prácticas de desarrollo, separación por capas y uso de variables de entorno.

---

## 📌 Funcionalidad Agregada

- Se añadió un **input de búsqueda** en el frontend.
- La búsqueda es **parcial e insensible a mayúsculas/minúsculas**.
- Los resultados se muestran **en tiempo real** conforme el usuario escribe.
- La consulta es gestionada por el backend mediante una nueva ruta en el controlador de productos.
- Se mantiene intacto el funcionamiento del CRUD original.

---

## 🚀 Tecnologías utilizadas

### 🔧 Backend

- Node.js
- Express
- TypeScript
- MongoDB + Mongoose
- cors

### 💻 Frontend

- React
- Vite
- Fetch API
- Context API

---

## ⚙️ Instrucciones para ejecutar el proyecto

### 1. Clonar el repositorio

```bash
git clone https://github.com/DanielFernandez14/Tp-Complementario
```
2. Configurar y ejecutar el Backend
```bash
cd backend
npm install
```
Crear un archivo .env con el siguiente contenido:

PORT=1234
URI_DB=mongodb://localhost:27017/api-utn-products (o cual corresponda)
JWT_SECRET=claveSecretaUltraSegura123

Ejecutar el servidor:
```bash
npm run dev
```

El backend se ejecutará en: http://localhost:1234

3. Configurar y ejecutar el Frontend
```bash
cd frontend
npm install
```

Crear un archivo .env con el siguiente contenido:

VITE_BACKEND_URL=http://localhost:1234

Ejecutar la aplicación React:
```bash
npm run dev
```
El frontend se ejecutará en: http://localhost:5173

🔍 Ejemplo de uso de la funcionalidad
El usuario accede a la pantalla principal (/).

Escribe un término en el campo de búsqueda, por ejemplo:

lavanDina
Se muestran automáticamente los productos que coincidan parcial o completamente con ese término.

La búsqueda es insensible a mayúsculas/minúsculas.

Si se borra el contenido del input, se listan nuevamente todos los productos.

🗂 Variables de entorno necesarias
/backend/.env.example
env
PORT=1234
URI_DB=mongodb://localhost:27017/api-utn-products
JWT_SECRET=claveSecretaUltraSegura123

/frontend/.env.example
env
VITE_BACKEND_URL=http://localhost:1234
