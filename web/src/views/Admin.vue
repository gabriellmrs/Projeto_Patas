<template>

    <header>
        <div class="administrador">
                <p>ADMINISTRADOR</p>
            </div>
        <nav class="menu-desktop">
            
            <ul>
                <!-- <a href="https://www.instagram.com/quatropatasfsa/" target="_blank"><img src="img/logo_patas.png" alt="logo" class="logo"></a> -->
                <div><li><router-link to="">EDITAR</router-link></li></div>
                <div><li><router-link to="/AdminVoluntarios">VOLUNTÁRIOS</router-link></li></div>
            </ul>
        </nav>
    </header>

    <div :class="texto_style">
            <h2>ALTERAÇÕES DO FEED</h2>
    </div>

    <hr>

    <div :class="descricao_style">
        <p>Imagens e Textos</p>
    </div>

    <section :class="conteiner_style">

        <div :class="box_style">

            <label for="imagemInput" class="upload">
                <i>Box 01 Adicionar Imagem</i>
            </label>
            <input id="imagemInput" type="file" v-show="false">
            <input type="text" class="box_texto" placeholder="Box 01 Alterar texto">

        </div>

        <div :class="box_style">

            <label for="imagemInput" class="upload">
                <i>Box 02 Adicionar Imagem</i>
            </label>
            <input id="imagemInput" type="file" v-show="false">
            <input type="text" class="box_texto" placeholder="Box 02 Alterar texto">

        </div>

        <div :class="box_style">

            <label for="imagemInput" class="upload">
                <i>Box 03 Adicionar Imagem</i>
            </label>
            <input id="imagemInput" type="file" v-show="false">
            <input type="text" class="box_texto" placeholder="Box 03 Alterar texto">

        </div>
        
        <div :class="box_style">

            <label for="imagemInput" class="upload">
                <i>Box 04 Adicionar Imagem</i>
            </label>
            <input id="imagemInput" type="file" v-show="false">
            <input type="text" class="box_texto" placeholder="Box 04 Alterar texto">

        </div>

        <div :class="box_style">

            <label for="imagemInput" class="upload">
                <i>Box 05 Adicionar Imagem</i>
            </label>
            <input id="imagemInput" type="file" v-show="false">
            <input type="text" class="box_texto" placeholder="Box 05 Alterar texto">

        </div>

        <div :class="box_style">

            <label for="imagemInput" class="upload">
                <i>Box 06 Adicionar Imagem</i>
            </label>
            <input id="imagemInput" type="file" v-show="false">
            <input type="text" class="box_texto" placeholder="Box 06 Alterar texto">

        </div>
        
    </section>

    <hr>

    <div :class="descricao_style">
        Contatos
    </div>

    <section :class="conteiner_contato_style">
        <div>
            <div :class="contatos_inputs_style">
                <label for="#">WhatsApp</label>
                <input type="number">
            </div>

            <div :class="contatos_inputs_style">
                <label for="#">Telefone</label>
                <input type="number">
            </div>

            <div :class="contatos_inputs_style">
                <label for="#">URL WhatsApp</label>
                <input type="text">
            </div>
        </div>
        <div>
            <p class="insta_contato">INSTAGRAM</p>
            <div :class="contatos_inputs_style">
                <label for="#">Usuario</label>
                <input type="text">
            </div> 
            <div :class="contatos_inputs_style">
                <label for="#">URL Instagram</label>
                <input type="text">
            </div>          
        </div>
    </section>

    <hr>

    <div :class="descricao_style">
        <p>Doações</p>
    </div>

    <section :class="conteiner_contato_style">

    <div :class="box_style">

        <label for="imagemInput" :class="upload_style">
            <i>Alterar QR code</i>
        </label>
        <input id="imagemInput" type="file" v-show="false">
        <input type="text" :class="box_texto_qr_style" placeholder="Alterar Chave Pix">
    </div>

</section>

    
</template>

<script>
    export default {
        name: "Admin",
        mounted() {
    document.title = 'Administrador';
    },
        data() {
            return {
                texto_style:'texto',
                conteiner_style:'conteiner',
                box_style:'box',
                descricao_style:'descricao',
                conteiner_contato_style:'conteiner_contato',
                contatos_inputs_style:'contatos_inputs',
                box_texto_qr_style:'box_texto_qr',
                upload_style:'upload',
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
    box-shadow: 0 5px 6px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    justify-content: space-around;
}


nav.menu-desktop ul {
    display: flex;
    justify-content:flex-end;
    gap: 120px;
    align-items: center;
    list-style: none;
}

nav.menu-desktop a {
    color: black;
    text-decoration: none;
    font-family: "Almarai", sans-serif;
    font-weight: bold;
    font-style: normal;
    font-size: 25px;
    
}

nav.menu-desktop a:hover {
    color: rgb(255, 255, 255);
}

.administrador {
    color: black;
    text-decoration: none;
    font-family: "Almarai", sans-serif;
    font-weight: bold;
    font-style: normal;
    font-size: 25px;
}

.texto {
    display: flex;
    justify-content: center;
    margin-top: 60px;
    color: #050d10;
    font-size: 20px;
}

.descricao {
    margin-left: 6%;
    font-size: 25px;
    margin-top: 30px;    
}

.conteiner {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 10px;
    margin-bottom: 50px;
   
}

.box {
    display: flex;
    align-items: end;
    gap: 5px;
    margin-left: 25px;
    margin-top: 30px;
}

.box_texto { 
    width: 250px;
    height: 100px;
    border: 2px solid #ccc;
    padding: 6px 12px;
    cursor: pointer;
    border-radius: 4px;
    background-color: #f9f9f9;
}

.box_texto:hover {
    background-color: #e9e9e9;
}

.upload {
    width: 300px;
    height: 300px;
    border: 2px solid #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 6px 12px;
    cursor: pointer;
    border-radius: 4px;
    background-color: #f9f9f9;
    color: #6f7070;
}

.upload:hover {
    background-color: #e9e9e9;
    transform: scale(1.1);
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    transition: .2s;
}

.upload i {
    margin-right: 5px;
}
/* Estilos para o contêiner principal */
.conteiner_contato {
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    margin-top: 40px;
    margin-bottom: 50px;
    margin-left: 6%;
}

/* Estilos para os inputs */
.contatos_inputs {
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
}

/* Estilos para os labels */
.contatos_inputs label {
    font-size: 18px;
}

/* Estilos para os inputs */
.contatos_inputs input[type="text"],
.contatos_inputs input[type="number"] {
    padding: 10px; /* Espaçamento interno */
    border: 1px solid #ccc; /* Borda cinza */
    border-radius: 5px; /* Cantos arredondados */
    font-size: 16px; /* Tamanho da fonte */
}

/* Estilizando os inputs do tipo número */
.contatos_inputs input[type="number"] {
    /* Adicionei um width fixo para garantir uma largura consistente */
    width: 150px;
}
.contatos_inputs input[type="text"] {
    /* Adicionei um width fixo para garantir uma largura consistente */
    width: 250px;
}

/* Estilos para o parágrafo "Instagram" */
.insta_contato {
    font-weight: bold;
    font-size: 20px;
    margin-bottom: 5px;
}

.box_texto_qr {
    width: 250px;
    height: 50px;
    border: 2px solid #ccc;
    padding: 6px 12px;
    cursor: pointer;
    border-radius: 4px;
    background-color: #f9f9f9;
}



/*-----------------------------------------------------------------------------------*/
</style>