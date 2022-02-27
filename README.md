## Teste seletivo D1 bACK

<h1>OBJETO</h2>
  <p>Este pequeno projeto se destina a elaborar a tarefa enviada pela recrutadora Amanda Ruiz.</p>  

  <p>O teste, resumidamente, se destina a criação de uma aplicação web, no formato de serviços com a utilização do NodeJs, React e Axios.</p> 

  <p>Foram utilizadas mais de uma tecnica de formatação, incluindo o styled-components e formatação convencional CSS e HTML, para demonstrar habilidade nas duas formas.</p>

  <p>A arquitetura utilizadas de micro-serviços e front foi uma escolha do recrutador.</p>


<h1>LAYOUT</h1>

  <p>O modelo gráfico mesclou elementos de plataformas de vídeo como o Netflix e a elemntos de criação própria.</p>
  <p>Foram criadas apenas três telas básicas, sendo uma (MovieLists) utilizando a leitura de variável para dar a impressão de páginas distintas.</p>

  <h2>LAYOUT</h2>
    <p>Os prints das tela podem ser acessadas na pasta "prints", na raiz do projeto de front.</p>


  <h2>DOWNLOAD E EXECUÇÃO</h2>


    - Downaload Front:
      Github: https://github.com/fabiostenio/d1testfront.git

    - Downaload Back:
      Github: https://github.com/fabiostenio/d1testback.git

    - Deploy da Aplicação
      http://45.80.152.210:3000/


<h1>INSTALAÇÃO</h1>
  <h2>Dependências</h2>
    - NodeJs 10+

    - Yarn

  <h2>Configure as seguintes variáveis.</h2>

      - Importe o banco de dados localizado na pasta /src/database/fabio_movies.sql

      - Altere as variáveis abaixo, em .env 

        API_KEY="Sua chave de API". Para a chave siga o tutorial em: https://www.youtube.com/watch?v=mbImkkJFxBs

        API_URL="https://api.themoviedb.org/3"
        
        API_IMAGE_URL="https://image.tmdb.org/t/p/original"
        
        DATABASE_NAME="fabio_movies"
        
        DATABASE_USER="Usuário do banco de dados"
        
        DATABASE_PASSWORD="Senha do banco de dados"
        
        DATABASE_HOST="host ou url do servidor mysql"
        
        DATABASE_PORT="porta utilizada pelo servidor de mysql. Padrão: 3306"

  <h2>Siga os passos</h2>

      - Execute, na pasta do projeto: yarn install
            
      - Para rodar em implantação, Execute: yarn start 
  
  
<h1>EXEMPLO EM EXECUÇÃO</h1>

    http://45.80.152.210:3000/
  
