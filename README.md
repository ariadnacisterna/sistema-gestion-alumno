# Sistema de Gestión de Alumnos

Aplicación web fullstack desarrollada para la materia Programación Web de la carrera Ingeniería en Sistemas de Información en la UTN-FRT. Esta app permite gestionar estudiantes mediante operaciones CRUD (Crear, Leer, Actualizar y Eliminar).

Este repositorio contiene el frontend y backend.

🎥 Vídeo demostrativo: [Ver vídeo](https://youtu.be/NBnNgpOqpzk)

---

## 🛠 Tecnologías utilizadas

- **Backend**: Node.js, Express.js, Sequelize (ORM), MySQL
- **Frontend**: React

---

## 🚀 Instrucciones de uso

1. **Clonar el repositorio**:

   ```bash
   git clone https://github.com/tu-usuario/nombre-repo.git
   cd nombre-repo
   
2. Instalar dependencias:

   ```bash
     npm install
   
3. Configurar variables de entorno:

    Crear un archivo .env en la raíz del proyecto con el siguiente contenido:
   ```bash
      DB_HOST=localhost
      DB_USER=root
      DB_PASSWORD=tu_password
      DB_NAME=nombre_base

4. Crear la base de datos y correr las migraciones (si aplica).

5. Ejecutar el backend:

  ```bash
   npm start
  ```

6. Ejecutar el frontend:
  
  ```bash
   npm install
   npm run dev
  ```

7. Consumir la API:
  
  ```bash
   Podés utilizar herramientas como Postman, Insomnia, curl o directamente desde la interfaz web (si está implementada).
 ```

---
>Proyecto desarrollado con fines educativos y de portfolio.
