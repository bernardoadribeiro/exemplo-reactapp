# Exemplo React App

## Sobre
Esse projeto implementa um simples app em ReactJS para atividade prática em sala de aula. Ele também serve como base para projetos simples e containerizados em ReactJS.

No arquivo [Step-By-Tep](Step-By-Step.md) há o passo a passo realizado para construção dessa aplicação de exemplo.

Desenvolvemos essa proposta de App como requisitado na matéria de Desenvolvimento Web do curso de Bacharelado em Sistemas de Informação (IFNMG Campus Januária), para que os demais alunos da turma possam usar este projeto como base para aprender o framework JavaScript, ReactJS.

### Especificação do projeto
- Construir uma interface simples usando o framework ReactJS.
- Realizar integração da interface com a API do **[Cataas](https://cataas.com/#/)** e exibir a imagem/gif no componente de imagem
- Utilizar o hook useEffect.

**Obs:** Essa é uma aplicação simples, pode ser que alguns tratamento de erros e/ou segurança não estejam disponíveis na versão atual.


## Tecnologias
O app está containerizado com Docker, e a interface foi desenvolvida usando React.

- JavaScript + framework ReactJS
- Docker + Docker-compose



## Setup do projeto

**Requirements:**
- Docker e Docker-compose devem estar instalados em sua máquina local.
- É recomendado que use um ambiente Linux para rodar o projeto (pode ser WSL)

**Como rodar o projeto**
- Clone o repositorio: `git clone https://github.com/bernardoadribeiro/agendahair-app.git`
- Acesse a pasta do projeto: `cd exemplo-reactapp`
- (Abra o Docker Desktop antes de continue se você estiver usando o WSL)
- Comando: `docker-compose up` and wait.
- Você verá uma mensagem de sucesso no terminal e o link para acessar o projeto no *localhost*

**Como acessar o App**
- Front-end URL: http://localhost:3000

**Comandos úteis**
- `docker-compose up`: Sobe todos os containers
- `docker-compose down`: Para todos os containers
- `docker-compose up --build`: Faz o build de todos os containers
- Cria o projeto em ReactJS: `npx create-react-app my-app` -> "my-app" substitua pelo nome do App
- Instala as dependencias do React localmente: `cd frontend && npm install` (caso for rodar o projeto localmente)
- Inicia o app localmente em modo de desenvolvimento `npm start`
