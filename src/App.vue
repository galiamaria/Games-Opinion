<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <a class="navbar-brand" href="#">Game Opinion</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
             <router-link class="nav-link" to="/">Home<span class="sr-only">(current)</span></router-link>    
          </li>
          <li class="nav-item">
              <router-link class="nav-link" to="/opiniones">Opiniones</router-link>
          </li>
          <li class="nav-item dropdown">
              <router-link class="nav-link" to="/administracion">Administracion</router-link>
            
          </li>
        </ul>
      </div>
    </nav>

   
    <router-view/>
  </div>
</template>

<script>
  
  export default{
    methods:{
      
    },
    
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
