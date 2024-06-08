<template>

    <header>
        <nav class="menu-desktop">
            <ul>
                <li><router-link to="/"><img src="img/logo_patas.png" alt="logo" class="logo"></router-link></li>
                <li><router-link to="/FacaParte"><img src="img/pata.svg" :class="pata_style"> FAÇA PARTE</router-link></li>
                <li><router-link to="/ComoAjudar"><img src="img/pata.svg" :class="pata_style"> COMO AJUDAR</router-link></li>
                <li><router-link to="/Eventos"><img src="img/pata.svg" :class="pata_style"> EVENTOS</router-link></li>
                <li><router-link to="/"><img src="img/pata.svg" :class="pata_style"> CONTATOS</router-link></li>
            </ul>
        </nav>


        <div class="menu-mobile">

            <div class="btn-abrir-menu">
                <button><img src="img/menu_mobile.png"></button>
            </div>

            <div class="btn-fechar">
                <button><img src="img/close_menu.png"></button>
            </div>

            <nav>
            <ul>
                <a href="https://www.instagram.com/quatropatasfsa/" target="_blank"><img src="img/logo_patas.png" alt="logo" class="logo"></a>
                <li><router-link to="/FacaParte"><img src="img/pata.svg" class="pata_header"> FAÇA PARTE</router-link></li>
                <li><router-link to="/ComoAjudar"><img src="img/pata.svg" class="pata_header"> COMO AJUDAR</router-link></li>
                <li><router-link to="/Eventos"><img src="img/pata.svg" class="pata_header"> EVENTOS</router-link></li>
                <li><router-link to="/"><img src="img/pata.svg" class="pata_header"> CONTATOS</router-link></li>
            </ul>
        </nav>
        </div>

        <div class="overlay-menu"></div>

    </header>
    
</template>

<script>
    export default {
        name: "NavBar",
        data() {
            return {
                pata_style:'pata_header'
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

nav.menu-desktop ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
    list-style: none;
}

nav.menu-desktop a {
    color: black;
    text-decoration: none;
    font-family: "Almarai", sans-serif;
    font-weight: bold;
    font-style: normal;
    font-size: 20px;
    
}

nav.menu-desktop a:hover {
    color: rgb(255, 255, 255);
}

/*--------- MENU MOBILE---------- */

.menu-mobile{
    background-color: #08bcff;
    height: 100vh;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 99999;
    width: 0%;
    overflow: hidden;
}

.menu-mobile nav ul{
    text-align: right;
    list-style: none;
}

.menu-mobile nav ul li a{
    text-decoration: none;
    color: #fff;
    font-size: 20px;
    font-weight: 300;
}

ul li{
    padding: 15px 5%;
}


.menu-mobile nav ul li a:hover{
    color: #101728;
}

.menu-mobile .btn-fechar{
    padding: 20px 8%;
}

.menu-mobile .btn-fechar{
    color: #101728;
    font-size: 20px;
}

.btn-abrir-menu {
    color: #101728;
    font-size: 40px;
}

/* .overlay-menu{
    background-color: #0000006c;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 88888;
    display: none;
} */

/*-----------Responsivo-----------*/

@media screen and (max-width: 730px ){
    /*Cabeçalho*/

    header{
        padding: 10px;
    }

    header .logo-mobile{
        text-align: left;
        width: 70px;
        height: 60px;
    }

    .menu-desktop{
        display: none;
    }

    .menu-mobile{
        display: flex;
        justify-content: space-around;
    }

}



/*-----------------------------------------------------------------------------------*/
</style>