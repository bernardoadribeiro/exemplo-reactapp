# **Exemplo React App Step-By-Step**

## **Setup**

**Requisitos:**
- Ter instalado o `npx` ou `npm` e o `nodejs`. 
- Ter instalado o Docker e Docker-compose:

**Instalando o NodeJS e NPM**: [tutorial](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-20-04#option-2-installing-node-js-with-apt-using-a-nodesource-ppa)

### **Instalando o Docker e Docker-compose**
- `sudo apt-get update`
- `sudo apt-get install docker.io`
- `sudo systemctl start docker`
- `sudo systemctl status docker`
- `sudo curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose`
- `sudo chmod +x /usr/local/bin/docker-compose`
- `docker-compose --version`


### **Criando um novo projeto**
Para criar um novo projeto em ReactJS, use o comando:
```bash
npx create-react-app my-app
```

### **Containerizando o projeto com Docker**
Criamos esses dois arquivos para configuração dos containers:
- [Dockerfile](Dockerfile)
- [docker-compose.yml](docker-compose.yml)

**Agora, faça o build dos containers**
Comando: `docker-compose up --build`
> *Até finalizar irá levar cerca de ~3min. Quando finalizar você verá no terminal o container rodando e uma mensagem de sucesso.*

## **Protótipo da aplicação**
![protipo](prototipo.png)


## **Mão no código**