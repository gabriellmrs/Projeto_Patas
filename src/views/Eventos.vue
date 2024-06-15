<template>
  <NavBar/>
  <header>
    <div class="inicio">
        <h2 class="title">Eventos</h2>  
    </div>
    <p class="subTitle">Próximos Eventos</p>
  </header>

<div class="container">
   <!-- Evento 1: Palestra sobre conscientização -->
    <div>
        <p class="date">Previsão: <span class="red">09/09/2024</span></p>
        <div class="box">
            <img src="img/palestra.jpeg" alt="Imagem 1" class="imagem">
            <h3 class="titleImg">Palestra sobre conscientização</h3>
            <p class="frase">Você está convidado a participar de um evento extraordinário que promete abrir seus olhos para a realidade dos animais abandonados em nossas comunidades. Apresentamos a você uma palestra envolvente e informativa sobre conscientização de animais de rua, onde teremos palestras inspiradoras.</p>
        </div>
    </div>

    <!-- Evento 2: Mochilando pelas escolas -->
    <div>
        <p class="date">Previsão: <span class="red">12/09/2024</span></p>
        <div class="box">
            <img src="img/mochilando.jpg" alt="Imagem 2" class="imagem">
            <h3 class="titleImg">Mochilando pelas escolas</h3>
            <p class="frase">Você está convidado a participar de um evento extraordinário no colégio nobre, o qual temos o objetivo de inserir os jovens na causa animal de forma dinâmica e lúcida através de um bate-papo onde passamos a mostrar que a diferença do futuro serão os jovens de hoje.</p>
        </div>
    </div>
</div>

    <p class="subTitle">Eventos passados</p>

<div class="container">
  <!-- Evento passado 1: Doação de animais no Shopping Boulevard -->
  <div>
      <p class="date">Data: <span class="red">27/01/2024</span></p>
         <div class="box">
           <img src="img/doacao_patas.jpeg" alt="imagem3" class="imagem">
              <h3 class="titleImg">Doação de animais no Shopping Boulevard</h3>
                <p class="frase">O evento de doação de animais foi um sucesso incrível, com um total de 21 animais encontrando lares amorosos graças ao apoio e generosidade da comunidade. Agradecimentos foram estendidos aos voluntários dedicados, doadores generosos e adotantes maravilhosos que tornaram isso possível.</p>
          </div>
  </div>

  <!-- Evento passado 2: Instalação de comedores na Fraga Maia -->
  <div >
    <p class="date">Data: <span class="red">12/02/2024</span></p>
    <div class="box">
      <img src="img/comedores.jpg" alt="imagem4" class="imagem">
      <h3 class="titleImg">Instalação de comedoros na Fraga Maia</h3>
      <p class="frase">A instalação de comedores nas ruas para animais é uma iniciativa que visa fornecer alimentos e água para animais de rua, melhorando sua qualidade de vida e promovendo a compaixão da comunidade,a equipe Quatro Patas realizou a reinstalação dos  comedouros ao longo da Av. Fraga Maia.</p>
    </div>
  </div>
</div>
<!-- Incluindo o componente Footer -->
<Footer/>
  </template>

  <script>
import Footer from '@/components/Footer.vue';
import NavBar from '@/components/NavBar.vue';

export default{
  name: 'Eventos',
  components: {
    NavBar,
    Footer
  },
  
}


</script>
  

<style>
@import url('https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700;800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500; 0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700;800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

body{
    background-color: white;
}
.inicio {
    margin-left: 20px;
    margin-top: 30px;
}

.title{
    margin-left: 20px;
    margin-top: 30px;
    font-family: "Roboto", sans-serif;
    font-size: 40px;
}

.subTitle{
    font-weight: bold;
    margin-top: 4%;
    font-family: "Roboto", sans-serif;
    font-size:30px;
    margin-left: 5%;
}

.container {
    display: flex;
    flex-wrap: wrap;
    margin-top: 1%;
    margin-left: 6%;
    margin-bottom: 20px;
 /* justify-content: center; */
} 

.date{
 /* display: inline; */
    margin-left: 40%;
    font-size: 23px;
    display: flex;
    /* margin-bottom: 5px;  */
}

.red{
    color: red;
 /* margin-left: 30%; */
}

  
.box {
    background-color: white;
    width: 350px;
    height: 500px;
    margin-right: 20px; 
    margin-left: 20px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.9);
    border-radius: 15px;
  }
  
.imagem {
    width: 100%;
    height: 50%;
    object-fit: cover;
    border-radius: 10px;
  }

.titleImg{
    font-size: 25px;
    margin: 10px;
    font-family: "Roboto", sans-serif;
}

.frase{
    text-align: left;
    font: 300;
    margin: 10px;
    font-family: "Roboto", sans-serif;
    color: #787171;
  }

@media only screen and(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait){

.container{
  flex-direction: column;
}

.date{
 /* display: inline; */
    margin-left: 50%;
    margin-bottom: 15px; 
}

.box{
  width: 100%;
  height: 500px;
}

  }

@media screen and (max-width: 1350px){

.date{

  margin-top: 10px; 
}

}

@media screen and (max-width: 730px){

  .box{
    margin-left: -3px;
    margin-bottom: 15px;
  }

}

.red{
  margin-bottom: 10px;
}


</style>