<template>
    <div class="opiniones">
        <h1>Vista de opinones</h1>
        <div v-for="(laopinion,indice) in lasopiniones" v-bind:key="indice">
            <div class="accordion" id="accordionExample" >

                <div class="card">
                    <div class="card-header" id="headingTwo">
                        <h2 class="mb-0">
                            <button class="btn btn-link btn-block text-left collapsed" type="button" data-toggle="collapse" v-bind:data-target="`#collapseTwo${indice}`" aria-expanded="false" aria-controls="collapseTwo">
                            Opinion creada por : {{ laopinion.nombre }}, Para el juego: {{ laopinion.juego }} - {{ indice }}
                            </button>
                        </h2>
                    </div>
                    <div v-bind:id="`collapseTwo${indice}`" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                        <div class="card-body">
                            <h3>Opinion:</h3>
                            {{ laopinion.opinion }}
                        </div>
                    </div>
                </div>
            </div>

        </div>


    </div>
</template>

<script>
import { mapState } from 'vuex';

export default{
    name:'OpinionesView',
    methods:{

    },
    computed:{
        ...mapState(["lasopiniones"]),
    }
}
</script>