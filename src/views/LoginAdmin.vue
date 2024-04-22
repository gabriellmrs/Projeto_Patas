<template>
    <div class="login-container">
      <div id="app" class="login-box">
        <form @submit.prevent="login">
          <div class="texto">
            <h1>LOGIN ADMINISTRADOR</h1>
          </div>
          <div class="box">
            <label for="username">Usuário</label>
            <input type="text" id="username" v-model="username">
          </div>
          <div class="box">
            <label for="password">Senha</label>
            <div class="password-input-container">
              <input type="password" id="password" v-model="password">
              <svg @click="togglePasswordVisibility" xmlns="http://www.w3.org/2000/svg" class="icone" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5"/></svg>
            </div>
          </div>
          <button type="submit">Login</button>
        </form>
        <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "LoginAdmin",
    data() {
      return {
        username: "",
        password: "",
        errorMessage: "",
        showPassword: false,
      };
    },
    methods: {
      login() {
        if (this.username === "" || this.password === "") {
          this.errorMessage = "Por favor, preencha todos os campos.";
        } else {
          alert("Login bem-sucedido!");
        }
      },
      togglePasswordVisibility() {
        this.showPassword = !this.showPassword;
        const passwordInput = document.getElementById("password");
        passwordInput.type = this.showPassword ? "text" : "password";
      },
    },
  };
  </script>
  
  <style scoped>
  .login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: #0056b3;
  }
  
  .login-box {
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: center;
  }
  
  .login-box form {
    display: flex;
    flex-direction: column;
    width: 100%; /* Garante que o formulário ocupe toda a largura da caixa de login */
  }
  
  .texto {
    color: #0056b3;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-weight: bold;
  }
  
  .box {
    display: flex;
    flex-direction: column;
    font-family: "Poppins-Medium", Helvetica, sans-serif;
    padding: 5px;
    margin: 10px;
  }
  
  .box label {
    margin-bottom: 5px;
  }
  
  .box input {
    margin: 0.6rem 0;
    box-shadow: 1px 1px 6px #0000001c;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 8px;
  }
  
  .password-input-container {
    display: flex;
    align-items: center;
  }
  
  .password-input-container input {
    flex: 1; /* Faz com que o input de senha ocupe todo o espaço disponível */
  }
  
  .icone {
    margin-left: 10px; /* Adiciona um espaçamento entre o input de senha e o ícone */
    cursor: pointer; /* Adiciona cursor de ponteiro para indicar que é clicável */
  }
  
  .box input:hover {
    background-color: #eeeeee75;
  }
  
  .box input:focus-visible {
    outline: 1px solid #08bcff;
  }
  
  .login-box form button {
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .login-box form button:hover {
    background-color: #0056b3;
  }
  
  .error-message {
    color: red;
  }
  </style>
  