<template>
    <div class="voluntarios">
      <!-- Título da página -->
      <h1>Voluntários</h1>
      <div class="table-container">
        <table>
          <thead>
            <tr>
              <th>ID</th> <!-- Cabeçalho da coluna ID -->
              <th>Nome</th> <!-- Cabeçalho da coluna Nome -->
              <th>Data de Nascimento</th>  <!-- Cabeçalho da coluna Data de Nascimento -->
              <th>Telefone</th> <!-- Cabeçalho da coluna Telefone -->
              <th>Bairro</th> <!-- Cabeçalho da coluna Bairro -->
            </tr>
          </thead>
          <tbody>
            <!-- Loop pelos voluntários para exibir cada um como uma linha na tabela -->
            <tr v-for="voluntario in voluntarios" :key="voluntario.id">
              <td>{{ voluntario.id }}</td>
              <td>{{ voluntario.nome }}</td>
              <td>{{ voluntario.dataNascimento }}</td>
              <td>{{ voluntario.telefone }}</td>
              <td>{{ voluntario.bairro }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        voluntarios: [
          { id: 1, nome: 'Nome 1', dataNascimento: '01/01/1990', telefone: '(00) 0000-0000', bairro: 'Bairro 1' },
          { id: 2, nome: 'Nome 2', dataNascimento: '02/02/1991', telefone: '(11) 1111-1111', bairro: 'Bairro 2' },
          { id: 3, nome: 'Nome 3', dataNascimento: '03/03/1992', telefone: '(22) 2222-2222', bairro: 'Bairro 3' },
          { id: 4, nome: 'Nome 4', dataNascimento: '04/04/1993', telefone: '(33) 3333-3333', bairro: 'Bairro 4' },
          { id: 5, nome: 'Nome 5', dataNascimento: '05/05/1994', telefone: '(44) 4444-4444', bairro: 'Bairro 5' }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
.voluntarios {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column; 
  gap: 4rem; /* Espaçamento entre elementos */
  height: 100vh; /* Altura igual à altura da viewport */
  background: rgb(177, 218, 241); /* Cor de fundo */
}

table {
  width: 100%; /* Tabela ocupa 100% da largura do seu contêiner */
  border-collapse: collapse; /* Borda da tabela colapsada */
}

th,
td {
  border: 1px solid black; /* Borda das células e cabeçalhos */
  padding: 8px; /* Espaçamento interno das células */
  text-align: left; /* Alinhamento do texto à esquerda */
}

th {
  background-color: #17a8eb; /* Cor de fundo do cabeçalho */
  font-family: Arial, Helvetica, sans-serif; /* Fonte do cabeçalho */
  text-align: left; /* Alinhamento do texto à esquerda */
}

.table-container {
  max-width: 100rem; /* Largura máxima do contêiner da tabela */
  width: 100%; /* Largura total */
  background-color: #fff; /* Cor de fundo do contêiner da tabela */
  border-radius: 10px; /* Raio do arredondamento das bordas */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Sombra */
  padding: 20px; /* Espaçamento interno */
  box-sizing: border-box; /* Caixa que inclui as bordas */
  overflow: hidden; /* Oculta conteúdo que ultrapassa as bordas */
  background: linear-gradient(to bottom, #cde6f9, #ffffff); /* Gradiente de fundo */
}

h1 {
  font-family: Arial, Helvetica, sans-serif; /* Fonte do título */
  margin: 0; /* Margem zero */
  padding: 0; /* Padding zero */
  box-sizing: border-box; /* Caixa que inclui as bordas */
  color: rgb(35, 120, 160); /* Cor do texto */
  font-size: 3em; /* Tamanho da fonte */
}
</style>

  