<template>

<footer>
        <div class="rodapé">
            <a href="#" target="_blank"><img src="img/logo.jpg" alt="logo"></a>
            <div class="contatos">
                <p>(75)98448302</p>
                <p>(75)93021346</p>
            </div><br>
            <p>  Não realizamos resgate </p>
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

.redes-sociais{
    display: flex;
    justify-content: space-around;
    cursor: pointer;
    transition: opacity 0.6s ease;
}

.redes-sociais img{
    height: 40px;
    width: 40px;
    filter: grayscale(70%);
}

.rodapé p{
    margin-top: 10px;
}

.redes-sociais img:hover{
    filter: grayscale(0%);
    transition: 1s all ease;
}
</style>