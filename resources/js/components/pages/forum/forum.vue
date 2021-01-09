<template>
 <v-container class="grey lighten-5">
    <!-- Stack the columns on mobile by making one full-width and the other half-width -->
    <v-row>
      <v-col
        cols="12"
        md="8"
      >
        <question :questions="questions"></question>
      </v-col>
      <v-col
        cols="6"
        md="4"
      >
        <v-card
          class="pa-2"
          outlined
          tile
        >
          .col-6 .col-md-4
        </v-card>
      </v-col>
    </v-row>
</v-container>
</template>

<script>
import Question from './question.vue';
export default{
  components:{Question},
   data(){
        return {
            questions:{}
        }
    },
    methods:{
        fetchdata(){
            axios.get("api/question")
            .then(res=>{
               this.questions= res.data.data
            })
            .catch(error=>{
                console.log(error);
            });
        }
    },
    created()
    {
        this.fetchdata()
    }
}	
</script>