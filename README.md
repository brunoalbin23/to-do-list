# to-do-list
Web To-do list simple para practicar

## Prerequisitos para la ejecución
- Tener instalado node.js
- Tener instalado docker
  
## Comandos ejecutar el proyecto
```
git clone https://github.com/brunoalbin23/to-do-list
```
```
docker run --name mysql-container -e MYSQL_ROOT_PASSWORD=mi_contraseña_segura -e MYSQL_DATABASE=todolist -p 3306:3306 -d mysql:latest
```
```
cd back
```
```
node server.js
```
```
cd front
```
```
npm run dev
```
Este proyecto no tiene nada imporante así que no pasa nada al dejar las credenciales acá pero obviamente esto no se hace jeje

## Comandos creación proyecto

### Front
```
npm create vite@latest front -- --template react
cd front
npm install
npm run dev
```
### Back
```
mkdir back
cd back
npm init -y
npm install express mysql2 cors body-parser dotenv
```
- express: Para manejar las rutas y crear el servidor
- mysql2: Cliente para conectarse a MySQL
- cors: Para permitir solicitudes desde el frontend
- body-parser: Para procesar datos JSON
- dotenv: Para manejar variables de entorno (como credenciales de la base de datos)

### Base de datos
```
docker run --name mysql-container -e MYSQL_ROOT_PASSWORD=mi_contraseña_segura -e MYSQL_DATABASE=todolist -p 3306:3306 -d mysql:latest
```
- --name mysql-container: Nombre del contenedor (puedes cambiarlo)
- -e MYSQL_ROOT_PASSWORD=mi_contraseña_segura: Establece la contraseña para el usuario root
- -e MYSQL_DATABASE=todolist: Crea automáticamente la base de datos todolist
- -p 3306:3306: Mapea el puerto local 3306 al puerto 3306 del contenedor 
- -d mysql:latest: Usa la última versión de MySQL y lo ejecuta en modo "detached"

ACCEDER A LA BASE DE DATOS CORRIENDO EN EL CONTENEDOR
```
docker exec -it mysql-container mysql -u root -p
```
Verificar las bases de datos y si no esta la creamos (todolist)
```
SHOW DATABASES;
```
Creamos la tabla
```
USE todolist;

CREATE TABLE tasks (
    id INT AUTO_INCREMENT PRIMARY KEY,
    task VARCHAR(255) NOT NULL,
    completed BOOLEAN DEFAULT FALSE
);
```
### Otros comandos

Instalar axios para hacer solicitudes HTTP al backend
```
npm install axios 
```
## Ejecutar el proyecto nuevamente, una vez que ya lo tenemos
```
docker start mysql-container
```
```
cd back
```
```
node server.js
```
```
cd front
```
```
npm run dev
```

