# Biblioteca 📚

Uma estante virtual para você manter um registro dos livros que já leu ou que deseja ler.

Esse site foi constuído inicialmente durante uma lição do [The Odin Project](https://www.theodinproject.com/).

Você pode ver como ficou o resultado clicando [aqui](https://br-adriel.github.io/js-library/).

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![Firebase](https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase)

## Executando o projeto localmente

Para executar o projeto você precisará ter o [Node.js e o npm](https://nodejs.org/en/) instalados em sua máquina
e ter um projeto no [firebase](https://firebase.google.com/).

### Configurando o firebase

1. Configure a autenticação com o Google

2. Crie um banco de dados usando a firestore

3. Edite as regras da firestore para que fique assim:

``` javascript
service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if false;
    }
    match /biblioteca/{userId}/{document=**} {
    	allow read, write: if request.auth != null && request.auth.uid==userId;
    }
  }
}
```

4. Adiciona um app web no seu projeto

5. Copie o objeto de configuração dado pelo firebase

### Iniciando o projeto

1. Abra a pasta do projeto no terminal

2. Execute o comando `npm install` para instalar as dependências

3. Faça uma cópia do arquivo `.env.example` e o renomeie para `.env`

4. Coloque as configurações do seu projeto do firebase no arquivo `.env`

5. Inicie a aplicação com o comando `npm run dev`
