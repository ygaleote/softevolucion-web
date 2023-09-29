# Utiliza una imagen de Node.js como base
FROM node:16

# Establece el directorio de trabajo en /app
WORKDIR /app

# Copia el archivo package.json y package-lock.json a /app
COPY package*.json ./


# Copia el contenido de la aplicación Angular al directorio de trabajo
COPY . .


# Define el comando para iniciar la aplicación
CMD ["sh", "entrypoint.sh"]