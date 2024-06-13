<template>
  <NavBar/>
  <div class="container">
    <h1>Como Ajudar</h1>
    <div class="opcoes">
      <div class="opcao" @click="selecionarOpcao">
        <span>Pix</span>
        <p>Sua contribuição será muito bem-vinda. Qualquer valor será útil e nos ajudará bastante.</p>
        <div class="detalhes-opcao">
          <h3>Pix</h3>
          <img v-if="mostrarQrCode" src="img/qrcode_projeto.jpg" alt="QR Code" class="qr-code">
          <p class="nomePix">Thaissa Luanne Alves Da Silva</p>
          <p class="numeorPix">(75) 99844-8302</p>
          <!-- <input id="pix-info" type="text" class="campo-adicional" placeholder="Informe seu Pix"> -->
        </div>
      </div>
      <div class="opcao" @click="selecionarOpcao">
        <span>Ração</span>
        <p>Alimentar um animal é algo muito importante para a saúde dele.</p>
        <div class="detalhes-opcao">
          <h3>Ração</h3>
          <input type="radio" name="tipo-embalagem" value="agranel"> A Granel
          <input type="radio" name="tipo-embalagem" value="pacote"> Pacote
        </div>
      </div>
      <div class="opcao" @click="selecionarOpcao">
        <span>Materiais</span>
        <p>Você está ajudando em uma causa maior.</p>
        <div class="detalhes-opcao">
          <h3>Materiais</h3>
          <select id="materiais-select" class="campo-adicional">
            <option value="">Selecione o material</option>
            <option value="cano-pvc">Cano PVC</option>
            <option value="materiais-fixacao">Materiais de Fixação</option>
          </select>
        </div>
      </div>
      <div class="opcao" @click="selecionarOpcao">
        <span>Outros</span>
        <p>Ajude de outras formas.</p>
        <div class="detalhes-opcao">
          <h3>Outros</h3>
          <input id="outros-info" type="text" class="campo-adicional" placeholder="Descreva sua doação">
        </div>
      </div>
    </div>
    <button class="botao-enviar" @click="enviarFormulario">Enviar</button>
  </div>
</template>

<script>
import Footer from '@/components/Footer.vue';
import NavBar from '@/components/NavBar.vue';

export default {
  name: "ComoAjudar",
  components: {
    NavBar,
    Footer
  },
  data() {
    return {
      mostrarQrCode: false
    };
  },
  methods: {
    selecionarOpcao(evento) {
      const opcao = evento.currentTarget;
      const todasOpcoes = document.querySelectorAll('.opcao');

      todasOpcoes.forEach((item) => {
        if (item !== opcao) {
          item.classList.remove('aberta');
          const detalhes = item.querySelector('.detalhes-opcao');
          if (detalhes) {
            detalhes.classList.remove('show');
          }
        }
      });

      opcao.classList.toggle('aberta');
      const detalhes = opcao.querySelector('.detalhes-opcao');
      if (detalhes) {
        detalhes.classList.toggle('show');
      }

      // Mostrar QR code apenas na opção Pix
      if (opcao.querySelector('span').textContent === 'Pix') {
        this.mostrarQrCode = detalhes.classList.contains('show');
      } else {
        this.mostrarQrCode = false;
      }

      document.querySelectorAll('.campo-adicional').forEach(item => {
        item.addEventListener('click', (event) => {
          event.stopPropagation();
        });
      });
    },

    enviarFormulario() {
      const pixInfo = document.getElementById('pix-info').value;
      const tipoRacao = document.querySelector('input[name="tipo-embalagem"]:checked');
      const tipoMateriais = document.getElementById('materiais-select').value;
      const outrosInfo = document.getElementById('outros-info').value;

      // Aqui você pode adicionar a lógica para enviar os dados para o servidor ou fazer o que desejar com eles
      console.log('Pix:', pixInfo);
      console.log('Tipo de ração:', tipoRacao ? tipoRacao.value : 'Nenhum selecionado');
      console.log('Tipo de materiais:', tipoMateriais);
      console.log('Outros:', outrosInfo);
    }
  }
}
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

h1 {
  text-align: center;
  color: #333;
  margin-bottom: 10px;
}

.opcoes {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
}

.opcao {
  border: 2px solid #ccc;
  padding: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  border-radius: 8px;
  position: relative;
}

.opcao:hover {
  background-color: #f0f0f0;
  border-color: #999;
}

.opcao span {
  font-size: 18px;
  font-weight: bold;
  color: #333;
}

.opcao p {
  font-size: 14px;
  color: #666;
  margin-top: 10px;
}

.detalhes-opcao {
  display: none;
  padding-top: 10px;
  border-top: 1px solid #ccc;
}

.detalhes-opcao.show {
  display: block;
}

.detalhes-opcao h3 {
  font-size: 20px;
  color: #333;
  margin-bottom: 10px;
}

.campo-adicional {
  display: block;
  margin-top: 10px;
  padding: 8px;
  width: calc(100% - 16px);
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  color: #666;
}

.botao-enviar {
  display: block;
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
}

.botao-enviar:hover {
  background-color: #0056b3;
}

.opcao.aberta {
  border-color: #999;
  background-color: #f0f0f0;
}

.qr-code {
  width: 100px;
  height: 100px;
  margin-top: 10px;
}

.nomePix{
  font-size: 5px;
}

.numeorPix{
  margin-bottom: 15px;
}

</style>
