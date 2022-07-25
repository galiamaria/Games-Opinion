<template>
  <div class="home">
    
    <DatosJuegos msg="Los juegos"/>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions } from 'vuex'
import DatosJuegos from '@/components/DatosJuegos.vue'

export default {
  name: 'HomeView',
  components: {
    DatosJuegos
  }, 
  methods: {
    ...mapActions(["getJuegos"]),
  },
  created(){
    this.getJuegos();
  }
}
</script>
