<template>
    <div>
        <p id="resultado">{{elresultado}}</p>
        <h1>Editando Opinion para: </h1>

        <form>
            <div class="form-group">
                <input type="text" v-model="eljuego" class="form-control" id="exampleFormControlInput1" disabled>
            </div>
            <div class="form-group">
                <label for="exampleFormControlInput1">Nombre</label>
                <input type="text" v-model="elnombre" class="form-control" id="exampleFormControlInput1" placeholder="Tu nombre aqui">
            </div>
            <div class="form-group">
                <label for="exampleFormControlTextarea1">Opiniones</label>
                <textarea class="form-control" v-model="laopinion"  id="exampleFormControlTextarea1" rows="3" placeholder="Tu opinion aqui"></textarea>
            </div>
            <div>
                <router-link class="btn btn-primary" to="/administracion">Regresar</router-link>
                <button type="button" class="btn btn-info" v-on:click="prepararNuevaOpinion">Guardar</button>
            </div>
        </form>

    </div>
</template>

<script>
    import { mapState, mapActions } from "vuex"
    export default{
        name:'EdicionView',
        methods:{
            ...mapActions(["actualizarOpinion"]),
            prepararNuevaOpinion(){
                let elindice = this.$route.params.id;
                let lanuevaopinion = {
                    id: elindice,
                    opinion:{
                    juego: this.eljuego,
                    nombre: this.elnombre,
                    opinion: this.laopinion,
                    },
                };
                this.actualizarOpinion(lanuevaopinion);
                this.eljuego='';
                this.elnombre='';
                this.laopinion='';
                this.elresultado='DATOS ACTUALIZADOS CORRECTAMENTE';
            },
        },
        data(){
            return{
                eljuego:'',
                elnombre:'',
                laopinion:'',
                elresultado:'',
            }
        },
        computed:{
            ...mapState(["lasopiniones"]),
        },
        created(){
            let elindice = this.$route.params.id;
            let estaopinion = this.lasopiniones[elindice];
            console.log("created, estaopinion=>");
            console.log(estaopinion);

            this.elnombre = estaopinion.nombre;
            this.laopinion = estaopinion.opinion;
            this.eljuego = estaopinion.juego;
        }
    }
</script>

<style scoped>
#resultado{
    color: green;
    font-size: 30px;
}
</style>