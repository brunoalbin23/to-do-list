# Usa una imagen base de Node.js
FROM node:18

# Define el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copia los archivos necesarios para instalar dependencias
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia todo el contenido del proyecto al contenedor
COPY . .

# Expone el puerto en el que Vite sirve el proyecto (por defecto 5173)
EXPOSE 5173

# Comando para iniciar la aplicación en modo desarrollo
CMD ["npm", "run", "dev", "--", "--host"]
