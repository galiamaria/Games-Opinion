<template>
    <div id="notfound">
        <h1>La pagina que buscas no existe</h1>
        <router-link to="/">REGRESAR</router-link>
    </div>
</template>

<script>
    export default{
        name: 'NotFound',
    }
</script>

<style scoped>
 #notfound{
    color: red;
 }
</style>