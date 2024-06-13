<template>

  <div class="conteiner">

<div class="form-image"> <!--Bloco da direita (azul)-->
    <img src="img/logo_patas.png" alt="Logo">
    <h2>NOS AJUDE A AJUDAR!!</h2>
    <p>Unidos por um mundo mais humano. Ajude a cuidar dos nossos amigos de quatro patas. Junte-se a nós para dar amor e cuidado aos animais de rua</p>
</div>

<div class="form"><!--Formulario-->
    <form action="#">

        <div class="form-header"><!--TitUlo do formulario-->
            
            <div class="title">
                <h1>FORMULARIO DE INSCRIÇÃO</h1>
            </div>

        </div>

        <!--inputs-->
        <div class="input-box">
        <label for="Nome">Nome</label>
        <input id="nome" type="text" name="nome" placeholder=" Digite seu Nome" required v-model.trim="nome" >
        </div>

        <div class="input-box">
            <label for="data-nascimento">Data de Nascimento</label>
            <input id="data-nascimento" type="date" name="data-nascimento" placeholder="Data de Nascimento" required v-model.trim="data" >
        </div>

        <div class="input-box">
            <label for="bairro">Bairro</label>
            <input id="bairro" type="text" name="bairro" placeholder="Bairro onde Reside" required v-model.trim="bairro" >
        </div>

        <div class="input-box">
            <label for="telefone">Telefone</label>
            <input id="telefone" type="number" name="telefone" placeholder="Digite seu Telefone" required v-model.trim="telefone" >
        </div>

        <div class="ButtonRadio">
            <div class="ButtonFixo">
                <input type="radio" id="Fixo" name="Voluntario" value="Voluntario Fixo" v-model="participacao">
                <label for="Voluntario Fixo">Voluntario Fixo</label>
            </div>
            
            <div class="ButtonUmDia">
                <input type="radio" id="UmDia" name="Voluntario" value="Voluntario Por Um Dia" v-model="participacao">
                <label for="Voluntario Por Um Dia">Voluntario Por Um Dia</label>
            </div>
        </div>

        <!--Botão cadastrar-->
        <div class="continue-button">
            <button><a href="#">CADASTRAR</a></button>
        </div>
    </form>
        
</div>

</div>
</template>

<script>
import HomeView from './HomeView.vue';
export default {
    name: "FacaParte",
    mounted() {
    document.title = 'Formulario de Inscrição';

    },
  data() {
    return {
      nome: null,
      data: null,
      bairro: null,
      telefone: null,
      participacao: "Por Um Dia"  

    }
  },
  components: {
        HomeView
    },

}
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');


* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;

}

body {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #E9E9E9;
}


.conteiner {
    width: 60%;
    height: 70vh;
    display: flex;
    margin-left: auto;
    margin-right: auto;  
    
}

/*Bloco azul da esquerda*/
.form-image {
    width: 30%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    background-color: #08BCFF;
    padding: 1rem;
    border-radius: 20px 0px 0px 20px;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, .212);
    color: #fff;
}
.form-image h2 {
    font-weight: 700;
    font-family: 'Poppins-Black', Helvetica, sans-serif;
}

/*Bloco do Formulario*/
.form {
    width: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #fff;
    padding: 3rem;
    border-radius: 0px 20px 20px 0px;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, .212);
}
/*Titulo do Formulario*/
.form-header {
    margin-bottom: 3rem;
    display: flex;
    justify-content: space-between;
}
.title {
    font-size: 19px;
    font-weight: 700;
    color: #08BCFF;
}

/*Bloco onde os inputs estão*/
.input-box {
    display: flex;
    flex-direction: column;
    margin-bottom: 1.1rem;
    font-family: 'Poppins-Medium', Helvetica, sans-serif;
}
/*Caixa de inputs*/
.input-box input { 
    margin: 0.6rem 0;
    padding: 0.8rem 1.2rem;
    border: none;
    box-shadow: 1px 1px 6px #0000001c;
}
.input-box input:hover { 
    background-color: #eeeeee75;
}
.input-box input:focus-visible {
    outline: 1px solid #08BCFF;
}

/*Botão cadastrar*/
.continue-button button {
    width: 100%;
    margin-top: 2.5rem;
    border: none;
    background-color: #08BCFF;
    padding: 0.62rem;
    border-radius: 26px;
    cursor: pointer;
}
.continue-button button:hover {
    background-color: #4ac7f5;
}
.continue-button button a {
    text-decoration: none;
    font-size: 0.93rem;
    font-weight: 700;
    color: #fff;
    font-family:'Poppins-ExtraBold', Helvetica, sans-serif;
}

.ButtonRadio {
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.ButtonFixo input {
    margin-right: 10px;
}
.ButtonUmDia input {
    margin-right: 10px;
}



@media screen and (max-width: 1650px) {
    .form-image img{
        width: 200px;
        
    }
    .conteiner{
        width: 80%;
        height: 80vh;
    }
    .form{
        width: 100%;
    }
}

@media screen and (max-width: 1350px){
    .conteiner{
        width: 90%;
        height: auto;
    }
    
}

@media screen and (max-width: 1200px){
    .form-image{
        display: none;
    }
    .conteiner{
        width: auto;
        height: auto;
    }

    .form{
      border-radius: 20px 20px 20px 20px;
    }
}

@media screen and (max-width: 730px) {
    .conteiner {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 20px;
}

.form-image, .form {
    width: 48%;
    box-sizing: border-box;
}

.form-image {
    background-color: #08bcff;
    color: #fff;
    text-align: center;
    padding: 20px;
    box-sizing: border-box;
}

.form-image img {
    max-width: 100%;
    height: auto;
}

.form-image h2 {
    margin-top: 20px;
    font-size: 24px;
}

.form-image p {
    font-size: 18px;
    margin-top: 10px;
}

.form {
    background-color: #f2f2f2;
    padding: 20px;
    box-sizing: border-box;
}

.form-header {
    text-align: center;
}

.input-box, .ButtonRadio, .continue-button {
    margin-bottom: 15px;
}

.input-box label, .ButtonRadio label {
    display: block;
    margin-bottom: 5px;
}

.input-box input, .ButtonRadio input {
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
}

.continue-button {
    text-align: center;
}

.continue-button button {
    background-color: #08bcff;
    color: #fff;
    padding: 10px 20px;
    border: none;
    cursor: pointer;
}

.continue-button button a {
    color: #fff;
    text-decoration: none;
}
}

@media screen and (max-width:600px){
    .form{
        width: auto;
    }
    .title {
        font-size: 12px;
        font-weight: 400;
    }
}

@media screen and (max-width:350px){
    .conteiner{
        width: 10%;
        height: auto;
    }
    .form{
        width: auto;
    }
}

@media screen and (max-width: 1920px ){
    
    .conteiner{
        margin-bottom: 10px;
    }

    .conteiner {
        margin-top: -50px;
    }

    .form-image{
        height: 700px;
    }

    .form{
        height: 700px;
    }
        
}




</style>
