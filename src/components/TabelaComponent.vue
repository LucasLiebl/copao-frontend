  <script setup>
import { computed } from 'vue';

  const props = defineProps({
    times:{
      type: Object
    }
  })

  const sortedTimes = computed(() => {
  return [...props.times].sort((a, b) => b.pontos - a.pontos); // Ordena em ordem decrescente de pontos
});
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
            <th scope="col">E</th>
            <th scope="col">D</th>
            <th scope="col">GP</th>
            <th scope="col">GC</th>
            <th scope="col">%</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(time, index) in sortedTimes" :key="index">
            <th scope="row">{{ time.nome }}</th>
            <td>{{ time.pontos }}</td>
            <td>{{ time.vitoria + time.empate + time.derrota }}</td>
            <td>{{ time.vitoria }}</td>
            <td>{{ time.empate }}</td>
            <td>{{ time.derrota }}</td>
            <td>{{ time.gols_pro }}</td>
            <td>{{ time.gols_contra }}</td>
            <td>{{ (time.vitoria/(time.vitoria + time.empate + time.derrota) * 100).toFixed(0)  }} </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>

  <style>

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
    border: 5px solid #757575;
    border-radius: 15px;
  }


  th,
  td {
    border: 1px solid #757575;
    padding: 15px 15px;
    text-align: center;
    font-size: 32px;
    font-weight: 600;
  }
  .tabela-container{
    display: flex;
    justify-content: center;
    background-color: #1E1E1E;
    width: 1066px;
    height: 803px;
    align-items: center;
    border-radius: 10px;
    border-radius: 15px; 
    }
  </style>
