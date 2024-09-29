<script setup>
const times = [
  { classificacao: 'Vermelho', P: '1', J: '2', V: '2' },
  { classificacao: 'Preto', P: '12', J: '4', V: '5' },
  { classificacao: 'Branco', P: '3', J: '9', V: '7' },
  { classificacao: 'Rosa', P: '7', J: '6', V: '4' },
  { classificacao: 'Verde', P: '1', J: '2', V: '3' },
  { classificacao: 'Rosa', P: '7', J: '6', V: '4' },
  { classificacao: 'Verde', P: '1', J: '2', V: '3' },
];
</script>

<template>
  <div class="tabela-container">
    <table class="tabela">
      <thead>
        <tr>
          <th scope="col">Classificação</th>
          <th scope="col">P</th>
          <th scope="col">J</th>
          <th scope="col">V</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(time, index) in times" :key="index">
          <th scope="row">{{ time.classificacao }}</th>
          <td>{{ time.P }}</td>
          <td>{{ time.J }}</td>
          <td>{{ time.V }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style>
.tabela-container {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

table {
  border-collapse: separate;
  border-spacing: 0;
  width: 971px;
  height: 683px;
  font-family: sans-serif;
  font-size: 1rem;
  letter-spacing: 1px;
  background-color: #1E1E1E;
  color: #FFFFFF;
  border: 2px solid rgb(160, 160, 160);
  border-radius: 15px;
}


th,
td {
  border: 1px solid #757575;
  padding: 15px 15px;
  text-align: center;
  font-size: 32px;
}

.tabela-container{
  background-color: black;
  width: 1066px;
  height: 803px;
  align-items: center;
  border-radius: 10px;
  margin-left: 700px;
  border-radius: 15px; 
  }
</style>
