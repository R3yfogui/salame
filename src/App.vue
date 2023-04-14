<script setup>
import { ref } from 'vue'

const nome = ref('')
const email = ref('')
const senha = ref('')
const senhaConfirm = ref('')
const nascimento = ref()
const endereco = ref('')
const cidade = ref('')
const estado = ref([])
const hobbies = ref('')
const linguaProg = ref([])
const biografia = ref('')
const msgErro = ref("")

const mostrar = ref(false)

function valida() {
 if (senha.value === senhaConfirm.value) {
  msgErro.value = "";
  return true;
 }
 else {
  msgErro.value = "A confirmação da senha está incorreta.";
  return false;
 }
}


</script>

<template>
  <section class="tudo">
    <body>
      
    
  <form @submit.prevent="mostrar = valida()">
  
  <div class="mb-3">
  <label for="email" class="form-label">Email</label>
  <input type="email" class="form-control" v-model="email" style="border: 2px solid #4a8f11;"  placeholder="Nome@exemplo.com" required> 

  <label for="nome" class="form-label"></label>
  <input type="text" class="form-control" minlength="3" v-model="nome" style="border: 2px solid #4a8f11;" placeholder="Nome" required>

  <label for="senha" class="form-label"></label>
  <input type="password" class="form-control"  v-model="senha" style="border: 2px solid #4a8f11;" placeholder="Senha" required>

  <label for="senhaConfirm" class="form-label"></label>
  <input type="password" class="form-control" v-model="senhaConfirm" style="border: 2px solid #4a8f11;" placeholder="Confirmação de senha" required>

  <label for="nascimento" class="form-label"></label>
  <input type="date" class="form-control" v-model="nascimento" style="border: 2px solid #4a8f11;" placeholder="Data de nascimento" required>

  <label for="endereco" class="form-label"></label>
  <input type="text" class="form-control" v-model="endereco" style="border: 2px solid #4a8f11;" placeholder="Endereço" required>

  <label for="cidade" class="form-label"></label>
  <input type="text" class="form-control" v-model="cidade" style="border: 2px solid #4a8f11;" placeholder="Cidade" required>

  <label for="estado">Estado</label>
  <select class="form-select" style="border: 2px solid #4a8f11;" v-model="estado" required>
    <option value="AC">Acre</option>
    <option value="AL">Alagoas</option>
    <option value="AP">Amapá</option>
    <option value="AM">Amazonas</option>
    <option value="BA">Bahia</option>
    <option value="CE">Ceará</option>
    <option value="DF">Distrito Federal</option>
    <option value="ES">Espírito Santo</option>
    <option value="GO">Goiás</option>
    <option value="MA">Maranhão</option>
    <option value="MT">Mato Grosso</option>
    <option value="MS">Mato Grosso do Sul</option>
    <option value="MG">Minas Gerais</option>
    <option value="PA">Pará</option>
    <option value="RJ">Rio de Janeiro</option>
    <option value="RN">Rio Grande do Norte</option>
    <option value="RS">Rio Grande Sul</option>
    <option value="RO">Rondônia</option>
    <option value="RR">Roraima</option>
    <option value="SC">Santa Catarina</option>
    <option value="SP">São Paulo</option>
    <option value="SE">Sergipe</option>
    <option value="TO">Tocantins</option>

  </select>

  <label for="hobbies" class="form-label"></label>
  <input type="text" class="form-control" v-model="hobbies" style="border: 2px solid #4a8f11;" placeholder="Hobbies" required>

  <label for="biografia" class="form-label">Biografia</label>
  <textarea class="form-control" style="border: 2px solid #4a8f11;" v-model="biografia" rows="3"></textarea>
</div>

<div class="form-check form-check-inline">
  <label for="cores"></label>
  <input type="checkbox" v-model="linguaProg" value="Python" /> Python
  <input type="checkbox" v-model="linguaProg" value="Javascript" /> Javascript
  <input type="checkbox" v-model="linguaProg" value="CC" /> CC
  
</div>



<input type="submit" value="Confirmar" class="btn btn-primary">

</form>


<p>{{ msgErro }}</p>
<form  v-if="mostrar" class="formulario2">

<div class="mb-3"  >
  <p class="parafro">Nome: {{ nome }}</p>
  <p class="parafro">E-mail: {{ email }}</p>
  <p class="parafro">Senha: {{ senha }}</p>
  <p class="parafro">Confirmação da Senha: {{ senhaConfirm }}</p>
  <p class="parafro">Data de Nascimento: {{ nascimento }}</p>
  <p class="parafro">Endereço: {{ endereco }}</p>
  <p class="parafro">Cidade: {{ cidade }}</p>
  <p class="parafro">Estado: {{ estado }}</p>
  <p class="parafro">Hobbies: {{ hobbies }}</p>
  <p class="parafro">Linguagens de Programação: {{ linguaProg }}</p>
  <p class="parafro">Biografia: {{ biografia }}</p>
</div>
</form>
</body> 
</section>   
</template>

<style>
    form{
      border-radius: 30px;
      border-style: solid;
      border-image: linear-gradient(#63c513, #357005) 30;
      border-width: 4px;
      padding: 100px;
    } 
    
    #app {
      justify-content: space-between; 
      align-items: center;
    }

    button.btn btn-primary {
      margin: 5px;
    }

    .tudo {
      justify-content: space-between;
      align-items: center;
      margin: 40px;
    }

    .formulario2{
      margin: 30px;
    }

    .parafro {
      display: block;
    width: 100%;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border-radius: 0.375rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    
}
    
    
</style>