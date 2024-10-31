  <script setup></script>

  <template>
    <div class="app-container">
      <div class="content">
        <div>Conteúdo Principal</div>
      </div>
      <div class="container-nav">
        <div class="conteudo">          
    <nav class="nav-links">
      <router-link to="/tabela" 
      
      :class="{'nav-item nav-item-select': $route.path === '/tabela','nav-item': $route.path !== '/tabela'}">

      <img src="https://i.ibb.co/BNTvDmn/Classificacao-Vector.png" alt="" class="icon">

      </router-link>

      <router-link to="/chaveamento"       
      
        :class="{'nav-item nav-item-select': $route.path === '/chaveamento','nav-item': $route.path !== '/chaveamento'}">
        
        <img src="https://i.ibb.co/MDkmH5j/Chavemante-Vector.png" alt="" class="icon">
      
      </router-link>
          
      <router-link to="/jogos" :class="{'nav-item nav-item-select': $route.path === '/jogos','nav-item': $route.path !== '/jogos'}"><img
          src="https://i.ibb.co/bNk0pxT/Vector.png" alt="" class="icon"></router-link>
    </nav>
        </div>
      </div>
    </div>
  </template>


  <style scoped>
  .app-container {
    display: flex;
    flex-direction: column;
    min-height: 88vh; 

  }

  .content {
    flex: 1; 
  }

  .conteudo{
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .container-nav {
    background-color: #333; 
    color: white;
    text-align: center;
    padding: 30px;
    bottom: 0px;
    width: 100%;
    position: fixed;
  
  }

.nav-links {
  display: flex;
  gap: 95px;
  
}

.nav-item {
  color: #757575;
  text-decoration: none;
  font-size: 12px;
  position: relative;
  display: flex;
  align-items: center;
  gap: 5px;
  transition: all .1s;
}
.nav-item-select{
  color: white;
}
.nav-item-select::after {
  content: '';
  position: absolute;
  bottom: -42px;
  left: 0;
  width: 100%;
  height: 4px;
  background-color: white;
  border-radius: 10px 10px 0px 0px;
  transition: all .2s;
}
  </style>
