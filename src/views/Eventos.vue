<template>
  <NavBar/>
  <header>
    <div class="title">
        <h2>Eventos</h2>
        <p class="subTitle">Próximos Eventos</p>
    </div>
  </header>

<div class="container">
    <div>
        <p class="date">Previsão: <span class="red">09/09/2024</span></p>
        <div class="box">
            <img src="img/palestra.jpeg" alt="Imagem 1" class="imagem">
            <h3 class="titleImg">Palestra sobre conscientização</h3>
            <p class="frase">Você está convidado a participar de um evento extraordinário que promete abrir seus olhos para a realidade dos animais abandonados em nossas comunidades. Apresentamos a você uma palestra envolvente e informativa sobre conscientização de animais de rua, onde teremos palestras inspiradoras.</p>
        </div>
    </div>

    <div>
        <p class="date2">Previsão: <span class="red">12/09/2024</span></p>
        <div class="box">
            <img src="img/mochilando.jpg" alt="Imagem 2" class="imagem">
            <h3 class="titleImg">Mochilando pelas escolas</h3>
            <p class="frase">Você está convidado a participar de um evento extraordinário no colégio nobre, o qual temos o objetivo de inserir os jovens na causa animal de forma dinâmica e lúcida através de um bate-papo onde passamos a mostrar que a diferença do futuro serão os jovens de hoje.</p>
        </div>
    </div>
</div>

<header>
    <p class="subTitle1">Eventos passados</p>
</header>

<div class="container2">
  <div>
      <p class="date3">Previsão: <span class="red">09/09/2024</span></p>
         <div class="box">
           <img src="img/doacao_patas.jpeg" alt="imagem3" class="imagem">
              <h3 class="titleImg">Doação de animais no Shopping Boulevard</h3>
                <p class="frase">O evento de doação de animais foi um sucesso incrível, com um total de 21 animais encontrando lares amorosos graças ao apoio e generosidade da comunidade. Agradecimentos foram estendidos aos voluntários dedicados, doadores generosos e adotantes maravilhosos que tornaram isso possível.</p>
          </div>
  </div>

  <div>
    <p class="date4">Previsão: <span class="red4">09/09/2024</span></p>
    <div class="box">
      <img src="img/comedores.jpg" alt="imagem4" class="imagem">
      <h3 class="titleImg">Instalação de comedoros na Fraga Maia</h3>
      <p class="frase">A instalação de comedores nas ruas para animais é uma iniciativa que visa fornecer alimentos e água para animais de rua, melhorando sua qualidade de vida e promovendo a compaixão da comunidade,a equipe Quatro Patas realizou a reinstalação dos  comedouros ao longo da Av. Fraga Maia.</p>
    </div>
  </div>
</div>

  </template>

  <script>
import NavBar from '@/components/NavBar.vue';

export default{
  name: 'Eventos',
  components: {
    NavBar
  }
}


</script>
  

<style>

body{
    background-color: white;
}

.title{
    margin-left: 20px;
    margin-top: 5px;
}

.subTitle{
    font-weight: bold;
    margin-top: 10px;
}

  .subTitle1{
    margin-left: 20px;
    margin-top: 50px;
    margin-bottom: 25px;
    font-weight: bold;
  }


.container {
    display: flex;
    flex-wrap: wrap;
 /* justify-content: center; */
} 

.container2{
  display: flex;
  flex-wrap: wrap;
}

.date{
 /* display: inline; */
    margin-left: 50%;
    /* margin-bottom: 5px;  */
}

.red{
    color: red;
 /* margin-left: 30%; */
}

.date2{
/*display: inline; */
  margin-left: 50%;
  /* margin-top: 10px;  */
}

.date3{
  margin-left: 50%;
}

.date4{
  margin-left: 50%;
}

.red4{
  color: red;
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
    font-size: xx-large;
    margin: 10px;
}

.frase{
    text-align: left;
    font: 300;
    margin: 10px;
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

.date2{
/*display: inline; */
  margin-left: 50%;
  margin-bottom: 10px;
  margin-top:10; 
}

.box{
  width: 100%;
  height: 500px;
}

  }

@media screen and (max-width: 1350px){

.date2{
  /* margin-left: 50%; */
  margin-top: 10px; 
}

.container{
  margin-left: 30%;
}

.container2{
  margin-left: 30%;
}

}


</style>