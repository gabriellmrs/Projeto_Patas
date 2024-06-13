<template>
    <header>
        <div class="administrador">
                <p>ADMINISTRADOR</p>
            </div>
        <nav class="menu-desktop">
            
            <ul>
                <!-- <a href="https://www.instagram.com/quatropatasfsa/" target="_blank"><img src="img/logo_patas.png" alt="logo" class="logo"></a> -->
                <div><li><router-link to="/Admin">EDITAR</router-link></li></div>
                <div><li><router-link to="">VOLUNTÁRIOS</router-link></li></div>
            </ul>
        </nav>
    </header>
  
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
// import axios from '@/utils/axios'
// import Volunteer from '@/models/voluntarios' 


export default {
  name: "CadastroVoluntarios",
  data() {
    return {
      Volunteer: [],
      form: {
        name: '',
        data: '',
        bairro: '',
        telefone: '',
      }
    }
  },
  mounted() {
    this.fetchVolunteers();
  },
  methods: {
    async fetchVolunteers() {
      try {
        const { data } = await axios.get('/volunteers');
        this.volunteers = data;
      } catch (error) {
        console.warn(error);
      }
    },
    async createVolunteer() {
      try {
        const { data } = await axios.post('/volunteers', this.form);
        this.volunteers.push(data);
        this.clearForm();
      } catch (error) {
        console.warn(error);
      }
    },
    async deleteVolunteer(id) {
      try {
        await axios.delete(`/volunteers/${id}`);
        this.volunteers = this.volunteers.filter(volunteer => volunteer.id !== id);
      } catch (error) {
        console.warn(error);
      }
    },
    clearForm() {
      this.form.name = '';
      this.form.data = '';
      this.form.bairro = '';
      this.form.telefone = '';
    }
  }
}
</script>
  
  <style scoped>

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
  