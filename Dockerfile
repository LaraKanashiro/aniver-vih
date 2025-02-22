# Usar uma imagem base do Node.js
FROM node:16

# Definir o diretório de trabalho dentro do contêiner
WORKDIR /usr/src/app

# Copiar o arquivo package.json e package-lock.json (se existir)
COPY package*.json ./

# Instalar as dependências do projeto
RUN npm install

# Copiar o restante do código do projeto para o contêiner
COPY . .

# Expor a porta que o aplicativo está escutando
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["node", "app.js"]