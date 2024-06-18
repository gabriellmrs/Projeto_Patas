<template>

    <header>
         <!-- Link para a página inicial com a logo -->
        <router-link to="/"><img src="img/logo_patas.png" class="logo" id="logo"></router-link>
        <nav>
            <div class="menu">
                <!-- Links de navegação com ícones e texto -->
            <ul>
                <li><router-link to="/"><img src="img/logo_patas.png" alt="logo" class="logo"></router-link></li>
                <li><router-link to="/FacaParte"><img src="img/pata.svg" :class="pata_style"> FAÇA PARTE</router-link></li>
                <li><router-link to="/ComoAjudar"><img src="img/pata.svg" :class="pata_style"> COMO AJUDAR</router-link></li>
                <li><router-link to="/Eventos"><img src="img/pata.svg" :class="pata_style"> EVENTOS</router-link></li>
                <li><router-link to="/"><img src="img/pata.svg" :class="pata_style"> CONTATOS</router-link></li>
            </ul>
            </div>
            <div class="mobile-menu-icon">
                <!-- Botão para abrir o menu móvel -->
                <button @click="toggleMenu"><img src="img/menu_mobile.png"></button>
            </div>
        </nav>

         <!-- Menu móvel que aparece em telas menores -->
        <div :class="['mobile-menu',{open: isMenuOpen}]">
            <ul>
                <!-- Botão para fechar o menu móvel -->
                <button class="close-icon"  @click="toggleMenu"><img src="img/close_menu.png"></button>
                <li class="nav-item" id="facaParte"><router-link to="/FacaParte"><img src="img/pata.svg" class="pata_header"> FAÇA PARTE</router-link></li>
                <li class="nav-item" id="comoAjudar"><router-link to="/ComoAjudar"><img src="img/pata.svg" class="pata_header"> COMO AJUDAR</router-link></li>
                <li class="nav-item" id="eventos"><router-link to="/Eventos"><img src="img/pata.svg" class="pata_header"> EVENTOS</router-link></li>
                <li class="nav-item" id="contatos"><router-link to="/"><img src="img/pata.svg" class="pata_header"> CONTATOS</router-link></li>
            </ul>
        </div>

        <!-- Sombreamento que aparece quando o menu móvel está aberto -->
        <div class="overlay-menu" :class="{ open: isMenuOpen }" @click="toggleMenu"></div>

    </header>
    
</template>

<script>
    export default {
        name: "NavBar", // Nome do componente
        data() {
            return {
                pata_style:'pata_header',  // Classe CSS para os ícones de pata
                isMenuOpen: false // Estado do menu móvel (aberto ou fechado)
            }
        },
        methods: {
             // Método para alternar o estado do menu móvel
            toggleMenu(){
                this.isMenuOpen = !this.isMenuOpen;
            }
        }
    }
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700;800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500; 0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700;800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

* {
    font-family: Arial, Helvetica, sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
/*---TUDO DO HEADER-----------------------------------------------*/
header {
 
    top: 0;
    width: 100%;
    left: 0;
    right: 0;
    background-color: #08bcff;
    padding: 15px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.pata_header{
    width: 25px;
    height: 25px;
}

.logo{
    border-radius: 30px;
    height: 60px;
    width: 60px;
    
}

nav ul { 
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style: none;
}

nav a {
    color: black;
    text-decoration: none;
    font-family: "Almarai", sans-serif;
    font-weight: bold;
    font-style: normal;
    font-size: 20px;
    
}

nav a:hover {
    color: rgb(255, 255, 255);
}

.mobile-menu-icon{
    display: none;
}

.mobile-menu{
    display: none;
}

.mobile-menu.open {
    right: 0; 
}

#logo{
    display: none;
}

/*-----------Responsivo-----------*/

@media screen and (max-width: 730px) {
    .menu {
        display: none;
    }

    #logo {
        display: block;
    }

    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    nav ul {
        display: flex;
        flex-direction: column;
    }

    .mobile-menu-icon {
        display: block;
        margin-right: auto;
    }

    .mobile-menu-icon {
        text-align: right;
    }

    .mobile-menu {
        background-color: #08bcff;
        height: 50vh; /* Ajustado para ocupar 50% da altura da tela */
        position: fixed;
        top: -50vh; /* Começa fora da tela, na parte superior */
        right: 0;
        z-index: 99999;
        width: 100%;
        overflow: hidden;
        transition: top 0.3s; /* Transição ajustada para movimentação vertical */
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .mobile-menu.open {
        top: 0; /* Quando aberto, alinha com a parte superior da tela */
    }

    .mobile-menu-icon button {
        margin-left: auto;
        padding: 5px;
        background-color: transparent;
        border: none;
        cursor: pointer;
    }

    .mobile-menu ul {
        list-style: none;
        padding: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .mobile-menu ul li {
        margin: 10px 0; 
        text-align: center;
        width: 100%;
    }

    .mobile-menu ul li a {
        color: #fff;
        text-decoration: none;
        font-size: 18px;
        font-weight: bold;
    }

    .mobile-menu ul li a:hover {
        color: black;
    }

    .close-icon {
        position: absolute;
        top: 20px;
        right: 7px;
        cursor: pointer;
        transition: right 0.3s;
        padding: 5px;
        background: none; 
        border: none;
    }

    .close-icon img {
        width: 50px; 
        height: 50px; 
    }

    .mobile-menu-icon img {
    width: 30px; 
    height: 30px; 
    }

    .overlay-menu {
        display: none; /* Inicialmente escondido */
        position: fixed;
        top: 50vh; /* Inicia no meio da tela */
        left: 0;
        width: 100%;
        height: 50vh; /* Ocupa a metade inferior da tela */
        background-color: rgba(0, 0, 0, 0.5); /* Cor de fundo semitransparente */
        z-index: 99998;
    }

    .overlay-menu.open {
        display: block; /* Mostra o sombreamento quando o menu está aberto */
    }

    #facaParte{
        margin-left: 10px;
    }

    #comoAjudar{
        margin-left: 32px;
    }

    #eventos{
        margin-right: 15px;
    }

    #contatos{
        margin-right: 3px;
    }
}





/*----------------------------------------------------------------------------------*/
</style>