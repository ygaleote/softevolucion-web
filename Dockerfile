# Utiliza una imagen de Node.js como base
FROM node:16

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

# Define el comando para iniciar la aplicación
CMD ["sh", "entrypoint.sh"]