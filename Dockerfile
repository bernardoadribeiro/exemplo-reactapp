# Usa a imagem oficial do Node.js
FROM node:14

# Diretório de trabalho
WORKDIR /app

# Copiar arquivos necessários para o container
COPY package.json package-lock.json /app/

# Instalar as dependências
RUN npm install

# Copiar o código do projeto para o container
COPY . /app/

# Compilar o projeto
RUN npm run build

# Comando de execução do container
CMD [ "npm", "start" ]
