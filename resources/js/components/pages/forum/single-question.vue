<template>
    <v-card
    class="mx-auto"
    max-width="700"
  >
    <v-card-text>
      
    <v-card-title>
        <router-link :to="question.showLink"> {{question.title}}</router-link>
    </v-card-title>
      <p> {{question.user+' '+question.date}} </p>
     <div class="text--primary"> {{question.body}} </div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
    data()
    {
        return {
            question: {},
        }
    },

    created()
    {
        axios.get(`/api/question/${this.$route.params.slug}`)
        .then(res=> this.question = res.data.data)
    }
}
</script>