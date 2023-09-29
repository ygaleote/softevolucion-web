# Utiliza una imagen de Node.js como base
FROM node:14

# Establece el directorio de trabajo en /app
WORKDIR /app

# Copia el archivo package.json y package-lock.json a /app
COPY package*.json ./

# Instala las dependencias de la aplicación
RUN npm install

# Copia el contenido de la aplicación Angular al directorio de trabajo
COPY . .

# Compila la aplicación Angular
RUN npm run build

# Expone el puerto en el que se ejecutará la aplicación (puerto 80 en este caso)
EXPOSE 80

# Define el comando para iniciar la aplicación
CMD ["npm", "start"]
