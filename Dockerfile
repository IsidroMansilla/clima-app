# 1. Usamos una imagen ligera de Node.js
FROM node:20-slim

# 2. Creamos el directorio de trabajo dentro del contenedor
WORKDIR /app

# 3. Copiamos los archivos de dependencias primero (optimiza el tiempo de construcción)
COPY package*.json ./

# 4. Instalamos las dependencias
RUN npm install

# 5. Copiamos el resto del código de nuestra app
COPY . .

# 6. Como es una app de consola interactiva, necesitamos ejecutarla así:
CMD ["node", "index.js"]