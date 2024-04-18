<template>

    <header>
        <nav>
            <ul>
                <a href="https://www.instagram.com/quatropatasfsa/" target="_blank"><img src="img/logo_patas.png" alt="logo" class="logo"></a>
                <li><router-link to="/FacaParte"><img src="img/pata.svg" class="pata_header"> FAÇA PARTE</router-link></li>
                <li><router-link to="/ComoAjudar"><img src="img/pata.svg" class="pata_header"> COMO AJUDAR</router-link></li>
                <li><router-link to="/Eventos"><img src="img/pata.svg" class="pata_header"> EVENTOS</router-link></li>
                <li><router-link to="/"><img src="img/pata.svg" class="pata_header"> CONTATOS</router-link></li>
            </ul>
        </nav>
    </header>
    
</template>

<script>
    export default {
        name: "NavBar" 
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
    font-size: 25px;
    
}

nav a:hover {
    color: rgb(255, 255, 255);
}

/*-----------------------------------------------------------------------------------*/
</style>