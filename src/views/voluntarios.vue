<template>
    <div class="voluntarios">
      <h1>Voluntários</h1>
      <div class="table-container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Data de Nascimento</th>
              <th>Telefone</th>
              <th>Bairro</th>
            </tr>
          </thead>
          <tbody>
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
    gap: 4rem;
    height: 100vh;
    background: rgb(177, 218, 241);
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
  }
  
  th,
  td {
    border: 1px solid black;
    padding: 8px;
    text-align: left;
  }
  
  th {
    background-color: #17a8eb;
    font-family: Arial, Helvetica, sans-serif;
    text-align: left;
  }
  
  .table-container {
    max-width: 100rem;
    width: 100%;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
    box-sizing: border-box;
    overflow: hidden;
    background: linear-gradient(to bottom, #cde6f9, #ffffff);
  }
  
  h1 {
    font-family: Arial, Helvetica, sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: rgb(35, 120, 160);
    font-size: 3em;
  }
  </style>
  