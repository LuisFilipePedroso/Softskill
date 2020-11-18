import React from 'react';

import ErrorImg from '../../assets/error.png';

import { Container, Header, Content, ImageContainer, TextContainer } from './styles';

const Home = () => {
  return (
    <Container>
      <Header>
        <h3>Comunicação<span><br /><br />A <i>soft skill</i> que irá mudar sua vida pós pandemia</span></h3>
      </Header>

      <Content>
        <ImageContainer>
          <img src="https://cdn.dribbble.com/users/1787323/screenshots/14209315/media/94f32c2dd831043ead97b320dc4b63d4.png" />
        </ImageContainer>
        <TextContainer>
          <p>
            Num mundo globalizado, a busca por informação se faz cada vez mais presente. Vivenciamos no ano de 2020,
            algo que talvez a maioria da população mundial ainda não havia presenciado, uma pandemia, um problema muito
            grave que trouxe muitos prejuízos e também que ocasionou a morte de muitas pessoas.
            Apesar dos problemas causados por ela, um novo mundo surgiu.
          </p>
        </TextContainer>
      </Content>

      <p>
      Grandes empresas e líderes do mercado tomaram decisões jamais imaginadas anteriormente, empresas como Brex,
      Twitter e Facebook anunciaram que as pessoas não irão mais precisar ir para seus escritórios para trabalhar,
      nasce então, a nova era pós pandemia, a era do trabalho remoto, a era do remote-first.
      Trabalhar de forma remota para empresas tem vários benefícios, para ambos os lados, tais como não existir
      fronteira de contração e fronteira para candidatura de vagas. Porém, assim como a pandemia que trouxe prejuízos,
      trabalhar remoto também tem seus problemas.
      </p>

      <Content>
        <TextContainer>
          <p>
          Trabalhar de forma remota, diferente do presencial exige da pessoa uma soft skill que é fundamental para ajudá-la
          no seu dia a dia, está soft skill tem vários nomes e eu gosto de chamá-la de comunicação.
          Para exemplificá-la, irei fazer uma breve introdução do porquê julgo ser fundamental possuir esta soft skill.
          Em março de 2020, iniciei a trabalhar de forma remota para uma empresa. Nesta empresa percebi que eu não possuia
          está soft skill, a comunicação. Ao perguntar as coisas, as pessoas me pediam contexto, e eu não sabia o que era
          contexto, após um certo tempo trabalhando para esta organização, eu descobri o que contexto significa e o porque
          ele é tão importante.
          </p>
        </TextContainer>
        <ImageContainer>
          <img style={{ borderTopLeftRadius: 16, borderBottomLeftRadius: 16, borderTopRightRadius: 0, borderBottomRightRadius: 0 }} src="https://cdn.dribbble.com/users/508588/screenshots/11263375/media/dce4e2c09206cbd471fb7ff22a3aab57.jpg" />
        </ImageContainer>
      </Content>
      
      <p>
      Muita das vezes, quando estamos iniciando como programadores, é rotineiro a gente comer as palavras e falar apenas
      o problema, pensando que a pessoa na qual estamos perguntando e que julgamos ser experiente irá entender o que
      queremos perguntar, e com isso, irá poder nos ajudar, coisa que não acontece, e não acontece por causa do contexto.
      Iremos então ver dois exemplos, um sem contexto e outro com um contexto.
      </p>

      <Content>
        <TextContainer>
          <p>
          "Galera, não está funcionando, está dando o seguinte erro: "
          </p>
          <ImageContainer>
            <img src={ErrorImg} style={{ borderRadius: 4 }}/>
          </ImageContainer>
        </TextContainer>
        <TextContainer>
          <p style={{ maxWidth: 550 }}>
          "Galera, estou com este problema, ele aconteceu ao entrar no meu app que 
          fiz em React, na tela de consulta, fiz uma requisição em uma rota do tipo 
          GET e pelo que entendi é um erro de conexão, eu não tenho muita 
          experiência ainda, porém, lendo o erro e pesquisando, pude encontrar 
          que é um erro de conexão, eu já verifiquei meu endereço e está correto, 
          a minha porta também está correta, alguém que já passou por isso, 
          consegue me ajudar?"
          </p>
          <ImageContainer>
          <img src={ErrorImg} style={{ borderRadius: 4 }}/>
          </ImageContainer>
        </TextContainer>
      </Content>
        <p>
        No exemplo da esquerda, a pessoa está com um problema de conexão 
        net::ERR_CONNECTION_REFUSED. Neste exemplo, a pessoa não explicou o 
        contexto do problema e não apresentou o porque que esse erro aconteceu e 
        nem como aconteceu. A partir disso, a pessoa na qual ela está pedindo ajuda 
        irá ter que fazer perguntas como "o endereço da api está correto?".
        </p>
        <br />
        <p>
        Enquanto que no exemplo da direita, a pessoa expões tudo que é necessário para 
        alguém poder ajudá-la, ela apresentou um contexto, como que o problema 
        aconteceu, e ainda comentou que já tentou fazer algumas coisas para 
        tentar resolver o problema, porém, não obteve êxito. 
        </p>

      <Content>
        <ImageContainer>
          <img src="https://cdn.dribbble.com/users/59947/screenshots/13928521/media/908a5d5eb43a4c52f1408df020237a1f.jpg" />
        </ImageContainer>
        <TextContainer>
          <p>
          Em um mundo pós pandemia, onde as empresas estão optando pela modalidade 
          remote-first, esse segundo exemplo é fundamental para uma pessoa que 
          desejam trabalhar de forma remota. Pode-se perceber neste segundo exemplo,
          que temos um fundamento, um lugar onde podemos talvez começar a explorar
          e encontrar a raiz do problema. Este segundo exemplo também nos ensina
          que o contexto nos traz rapidez, algo muito importante, principalmente
          em projetos com prazos curtos. 
          Este segundo exemplo também nos instrui a forma que talvez podemos usar 
          para pesquisar em sites como StackOverFlow. Trazendo para um exemplo real,
          poderiamos buscar no StackOverFlow algo 
          como "React ERR_CONNECTION_REFUSED on get data". 
          </p>
        </TextContainer>
      </Content>

      <Content>
        <TextContainer>
          <p>
          Com este dois exemplos, podemos aprender o porque o contexto é tão 
          importante, e ele não vale apenas para a pessoa que está com o problema, 
          ele vale também para a pessoa que está tentando ajudar. 
          Quanto mais contexto a pessoa que está ajudando fornecer, mais rápido e 
          melhor o problema irá ser solucionado.<br />
          Neste novo mundo, o contexto passa a ser o nosso aliado. Finalizo este 
          artigo com a certeza que pude apresentar algo que julgo ser muito 
          importante, e quando usado com consciência, pode nos trazer muitos 
          benefícios e destaques profissionais.  
          </p>
        </TextContainer>
        <ImageContainer>
          <img style={{ borderTopLeftRadius: 16, borderBottomLeftRadius: 16, borderTopRightRadius: 0, borderBottomRightRadius: 0 }} src="https://cdn.dribbble.com/users/2893989/screenshots/14113447/media/0e7f1e1af0b9354f272dee113bef150e.png" />
        </ImageContainer>
      </Content>
    </Container>
  )
}

export default Home;