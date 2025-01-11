FROM node:18

# Define el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copia los archivos de configuración del backend
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del código fuente
COPY . .

# Expone el puerto en el que se ejecutará el backend
EXPOSE 5000

# Comando para iniciar la aplicación
CMD ["node", "server.js"]
