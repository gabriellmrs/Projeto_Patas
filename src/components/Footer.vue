<template>

<footer>
        <div class="rodapé">
            <a href="#" target="_blank"><img src="img/logo.jpg" alt="logo"></a>
            <div class="contatos">
                <p class="frase">(75) 9844-8302</p>
                <p class="frase">(75) 9302-1346</p>
            </div><br>
            <p class="frase">  Não realizamos resgate </p>
            <div class="redes-sociais">
                <a href="https://www.instagram.com/quatropatasfsa/" target="_blank"><img src="img/instagram.png" alt="icone-instagram"></a>
                <a href="https://wa.me/+5575998448302" target="_blank"><img src="img/whatsapp.png" alt="icone-whatsapp"></a>
            </div>
        </div>
    </footer>
    
</template>

<script>
export default {
    name: "Footer" 
}
</script>

<style scoped>
    footer{
    background-color: #08bcff;
    padding: 40px;
}

footer img{
    height: 100px;
    width: 100px;
    border-radius: 100%;
}

.rodapé{
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.frase {
    color: #fff;
    font-size: 30px;
    font-weight: bold;
}

.redes-sociais{
    display: flex;
    justify-content: space-around;
    cursor: pointer;
    transition: opacity 0.6s ease;
}

.redes-sociais img{
    height: 60px;
    width: 60px;
}

.rodapé p{
    margin-top: 10px;
}

.redes-sociais img:hover{
    transform: scale(1.1);
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    transition: .2s;
}
</style>