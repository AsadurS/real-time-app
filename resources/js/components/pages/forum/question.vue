 <template>
 <v-card
    class="mx-auto"
    max-width="700"
  >
    <v-card-text v-for="question in questions" :key="question.path">
      
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
   props:["questions"]
}
</script>