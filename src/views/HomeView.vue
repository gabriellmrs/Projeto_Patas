<template>
    <NavBar/>
    <section>

        <div :class="box1_style">
            <div class="slogan_texto">
            <h1>Conectando corações humanos e patinhas peludas</h1>
                <div class="saiba-mais"><a href="#ancora" @click.prevent="scrollToSection">Saiba mais</a></div>
            </div>
            <div class="slogan_img">
                <img src="img/inicio-cachorro.jpg" alt="Quatro Patas" title="Quatro Patas">
            </div>
        </div>

        <div :class="box2_style"  id="ancora">
            <div class="box_02_titulo">
                <h2>O QUE É O PROJETO <span class="efeitoPatas">QUATRO PATAS ?<br/></span></h2>
            </div>
            <div class="box_02_texto">
                <p>O Projeto Quatro Patas, criado há três anos para alimentar animais de rua, superou desafios como roubo e falta de voluntários. Além da alimentação, evoluiu para englobar atividades como campanhas de adoção e apoio a protetores. A equipe agradece a todos que contribuíram, destacando que, juntos, fazem a diferença.
                </p>
            </div>
            <div class="box_02_img">
                <img src="img/grupo_patas.jpeg" title="Grupo Quatro Patas">
            </div>

            <div :class="box3_style">
                <div class="box_03_conteudo">
                    <div class="box_03_texto">
                        <h3>Sucesso na Campanha de Adoção: 21 Animais Encontram Lares</h3>
                        <p>Em um comovente evento de adoção realizado no shopping, 21 animais ganharam novos lares amorosos. A iniciativa,  atraiu a comunidade, que se mostrou solidária e receptiva. Visitantes foram orientados sobre os cuidados necessários, resultando em histórias emocionantes de adoção. A campanha não apenas proporcionou lares felizes, mas também sensibilizou a importância da adoção responsável. Um sucesso que reforça o comprometimento da comunidade com o bem-estar animal.</p>
                    </div>
                    <div class="box_03_img">
                        <img src="img/doacao_patas.jpeg" alt="Doação de Animais" title="Doação de Animais">
                    </div>
                </div>
            </div>

            <div :class="box4_style">
                <div class="box_04_conteudo">
                    <div class="box_04_img">
                        <img src="img/mochilando.jpg" alt="Mochilando" title="Mochilando">
                    </div>
                    <div class="box_04_texto">
                        <h3>Mochilando Pelas Escolas</h3>
                        <p>Temos o objetivo de inserir os jovens na causa animal de forma dinâmica e lúdica através de um bate papo onde possamos mostrar que a diferença do futuro serão os jovens de hoje.</p>
                    </div>
                    
                </div>
            </div>

            <div :class="box5_style">
                <div class="box_05_conteudo">
                    <div class="box_05_texto">
                        <h3>Comedores pela Cidade</h3>
                        <p>É uma iniciativa vital que se destaca pela dedicação em oferecer alimento e cuidados nutricionais a animais desamparados. Fundada por voluntários comprometidos, a organização busca não apenas satisfazer a fome imediata, mas também criar uma rede de solidariedade e conscientização comunitária</p>
                    </div>
                    <div class="box_05_img">
                        <img src="img/comedores.jpg" alt="Comedor" title="Comedor">
                    </div>
                </div>
            </div>

            </div>





    </section>
    <router-view/>
    <Footer/>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue';


export default {
    name: "HomeView",
    mounted() {
    document.title = 'Quatro Patas';
    },
    components: {
        NavBar,
        Footer
    },
    data() {
        return {
            box1_style: 'box_01',
            box2_style: 'box_02',
            box3_style: 'box_03',
            box4_style: 'box_04',
            box5_style: 'box_05'
        }
    },
    methods: {
        scrollToSection() {
            setTimeout(() => {
                const section = document.getElementById('ancora');
                if (section) {
                    section.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        }
    }
}

</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700;800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500; 0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Almarai:wght@300;400;700;800&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');


/*---BOX 01--------------------------------------------------------------------------*/

.box_01 {
    display: flex;
    max-width: 1200px;
    margin: 0 auto;
    margin-top: 100px;
    
}

.slogan_texto {
    flex: 1;
    padding: 20px;
}

.slogan_texto h1 {
    font-family: "Roboto", sans-serif;
    font-weight: bold;
    font-style: normal;
    font-size: 70px;
    color: #0F1819;
    margin-top: 50px;
}

.slogan_texto a {
    text-decoration: none;
    text-align: center;
    color: #000;
    font-family: sans-serif;
    font-size: 25px;
    font-weight: bold;
    margin-top: 150px;
    background: linear-gradient(65deg, #004AAD, #05e9ff);
    padding: 10px 20px;
    border-radius: 50px;
    cursor: pointer;
    display: block;
    width: 200px;
    height: 70px;
    line-height: 49px;
    transition: background-color 0.3s ease, transform 0.3s ease;
}

.slogan_texto a:hover {
    background-image: linear-gradient(to right, #05e9ff, #004AAD);
    transform: scale(1.05);
    color: #fff;
}

.slogan_img {
    flex: 1;
    padding: 20px;
    text-align: right;
    margin-top: 50px;
}

.slogan_img img {
    max-width: 100%;
    height: auto;
    border-radius: 50px;    
    box-shadow: #45e8f7 -15px 20px 50px 15px;
    margin-left: 50px;
}
/*-----------------------------------------------------------------------------------*/

/*----BOX 02-------------------------------------------------------------------------*/

.box_02 {
    display: flex;
    max-width: auto;
    margin: 0 auto;
    margin-top: 140px;
    flex-direction: column;
    align-items: center;
    background-color: #101728;
}

.box_02_titulo {
    margin-top: 50px;
    align-items: center;
    font-family: "Roboto", sans-serif;
    color: #fff;
    font-size: 50px;
    
}

.efeitoPatas {
    color: #9340FF; 
}


.box_02_texto {
    width: 1000px;
    margin-top: 50px;
    text-align: center;
}
.box_02_texto p {
    color: #fff;
    font-family: "Roboto", sans-serif;
    font-weight: bold;
    line-height:2;
    font-size: 25px;
}

.box_02_img img {
    margin-top: 50px;
    border-radius: 50px;
}
/*-----------------------------------------------------------------------------------*/

/*----BOX 03-------------------------------------------------------------------------*/

.box_03 {
    display: flex;
    background-color: #101728;
}

.box_03_conteudo{
    display: flex;
    margin-top: 80px;
    margin-left: 100px;
    margin-right: 100px;
}

.box_03_texto {
    margin-top: 2px;
}

.box_03_texto h3 {
    font-size: 70px;
    color: #9340FF;
    padding: 30px;
    margin-left: -40px;
}

.box_03_texto p {
    margin-top: 50px;
    color: #fff;
    font-family: "Roboto", sans-serif;
    font-weight: bold;
    line-height:1.5;
    font-size: 22px;
    width: 900px;
}

.box_03_img img {
    width: 900px;
    height: 600px;
    border-radius: 50px;
}
/*-----------------------------------------------------------------------------------*/

/*----BOX 04-------------------------------------------------------------------------*/
.box_04 {
    display: flex;
    background-color: #101728;
}

.box_04_conteudo{
    display: flex;
    margin-top: 80px;
    margin-left: -140px;
    margin-right: 100px;
}

.box_04_texto {
    margin-top: 60px;
    margin-left: 110px;
    width: 700px;
}

.box_04_texto h3 {
    font-size: 70px;
    color: #9340FF;
    padding: 30px;
    margin-left: -40px;
}

.box_04_texto p {
    margin-top: 50px;
    color: #fff;
    font-family: "Roboto", sans-serif;
    font-weight: bold;
    line-height:1.5;
    font-size: 22px;
    width: 1000px;
}

.box_04_img img {
    width: 650px;
    height: 600px;
    border-radius: 50px;
}
/*-----------------------------------------------------------------------------------*/

/*----BOX 05-------------------------------------------------------------------------*/
.box_05 {
    max-width: auto;
    display: flex;
    background-color: #101728;
}

.box_05_conteudo{
    display: flex;
    margin-top: 80px;
    margin-left: 100px;
    margin-right: 100px;
}

.box_05_texto {
    margin-top: 100px;
    
}

.box_05_texto h3 {
    font-size: 70px;
    color: #9340FF;
    padding: 30px;
    margin-left: -40px;
}

.box_05_texto p {
    margin-top: 50px;
    color: #fff;
    font-family: "Roboto", sans-serif;
    font-weight: bold;
    line-height:1.5;
    font-size: 22px;
    width: 1000px;
}

.box_05_img img {
    width: 600px;
    height: 600px;
    border-radius: 50px;
    margin-left: 100px;
}
/*-----------Responsivo-----------*/
@media screen and (max-width: 730px ){
    /*-------------------box 1*-------------------*/
    .box_01{
        flex-direction: column-reverse;
    }

    .slogan_texto h1{
        font-size: 40px;
        text-align: center;
    }

    .saiba-mais{
        margin-top: -90px;
        display: flex;
        justify-content: center;
    }

    .slogan_img {
        text-align: center;
        margin-top: 50px;
        margin-left: -20px;
        padding: 10px;
    }

    .slogan_img img {
        max-width: 250px;
        border-radius: 25px;
    }

    /*------------------box 2---------------------*/
    .box_02{
        flex-direction: column;
    }

    .box_02_titulo{
        font-size: 25px;
        text-align: center;
    }

    .box_02_texto p{
        margin-top: 10px;
        font-size: 20px;
        padding: 15px;
        line-height:1.5;
        text-align: justify;
        text-indent: 20px;
    }

    .box_02_img{
        padding: 10px;
        margin-top: 10px;
    }

    /* ------------------box 3------------------- */

    .box_03_texto h3 {
        font-size: 40px;
        padding: 10px;
        margin-left: -94px;
    }

    .box_03_conteudo{
        flex-direction: column;
        padding: 5px;
    }

    .box_03_texto p {
        font-size: 20px;
        margin-left: -99px;
        padding: 15px;
        margin-top: 10px;
        text-align: justify;
        text-indent: 20px;
    }

    .box_03_img img {
        margin-top: 30px;
        width: 350px;
        height: 300px;
        border-radius: 20px;
        margin-left: -70px;
    }

    /* ------------------box 4------------------- */

    .box_04_conteudo{
        margin-top: 10px;
        flex-direction: column-reverse;
        margin-left: -97px;
    }
    .box_04_texto h3{
        font-size: 50px;
        padding: 10px;
        margin-left: -197px;
        text-align: center;
    }

    .box_04_texto p{
        font-size: 20px;
        margin-left: -197px;
        padding: 15px;
        margin-top: 10px;
        text-align: justify;
        text-indent: 20px;
    }

    .box_04_img{
        margin-top: 30px;
        margin-left: -92px;
        padding: 30px;
    }

    /*------------------- box 5------------------ */

    .box_05_conteudo{
        flex-direction: column;
        margin-top: -30px;
    }

    .box_05_texto h3{
        font-size: 50px;
        padding: 10px;
        margin-left: -27px;
        text-align: center;
    }

    .box_05_texto p{
        font-size: 20px;
        margin-left: -27px;
        padding: 15px;
        margin-top: 10px;
        text-align: justify;
        text-indent: 20px;
    }

    .box_05_img{
        margin-top: 30px;
        margin-left: -130px;
        padding: 30px;
    }
    
    /* rodapé */
    footer{
        display: block
    }
}


/* Tela de notebook  */
@media screen and (max-width: 1920px ){
    
    /* box 1  */

    .box_01 h1{
        font-size: 60px;
    }
    /* box 2 */

    .box_02 h2{
        font-size: 65px;
    }

    /* box 3 */

    /* box 4 */
    .box_04_conteudo{
        margin-left: 90px;
    }
    /* box 5 */

    .box_05_conteudo{
        margin-left: 30px;
    }

    .box_05_img{
        padding: 20px;
    }

}

</style>
