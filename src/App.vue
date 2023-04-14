<script setup>
import { ref } from 'vue'



</script>

<template>
  <form>
  
  <div class="mb-3">
  <label  class="form-label"></label>
  <input type="email" class="form-control" style="border: 2px solid #4a8f11;"  placeholder="nome@exemplo.com">

  <label for="a" class="form-label"></label>
  <input type="text" class="form-control" style="border: 2px solid #4a8f11;" placeholder="nome">

  <label for="b" class="form-label"></label>
  <input type="password" class="form-control"  style="border: 2px solid #4a8f11;" placeholder="senha">

  <label for="c" class="form-label"></label>
  <input type="text" class="form-control" style="border: 2px solid #4a8f11;" placeholder="Confirmação de senha">

  <label for="d" class="form-label"></label>
  <input type="text" class="form-control"  style="border: 2px solid #4a8f11;" placeholder="Data de nascimento">

  <label for="e" class="form-label"></label>
  <input type="text" class="form-control"  style="border: 2px solid #4a8f11;" placeholder="Endereço">

  <label for="f" class="form-label"></label>
  <input type="text" class="form-control"  style="border: 2px solid #4a8f11;" placeholder="Data de nascimento">

  <label for="g" class="form-label"></label>
  <input type="text" class="form-control"  style="border: 2px solid #4a8f11;" placeholder="Cidade">

  <label for="Estado">Estado</label>
  <select class="form-select" style="border: 2px solid #4a8f11;" v-model="Estado">
    <option value="AC">Acre</option>
    <option value="BH">Bahia</option>
  </select>

  <label for="g" class="form-label">Hobbies</label>
  <input type="text" class="form-control" id="exampleFormControlInput1" style="border: 2px solid #4a8f11;" placeholder="Hobbies">

</div>

<div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox"  value="option1">
  <label class="form-check-label" for="">Python</label> </div>
  <div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox"  value="option1">
  <label class="form-check-label" for="">Javascript</label> </div>
  <div class="form-check form-check-inline">
  <input class="form-check-input" type="checkbox"  value="option1">
  <label class="form-check-label" for="">CC</label>
</div>



<button type="submit" class="btn btn-primary">Confirmar</button>

</form>

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
      justify-content: center;
      align-items: center;
    }

    button.btn btn-primary {
      margin: 5px;
    }
    
</style>