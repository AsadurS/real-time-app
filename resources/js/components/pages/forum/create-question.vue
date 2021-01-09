<template>
   	<v-container>
 		 <v-form @submit.prevent="createCategory()">
			    <v-text-field
			      v-model="form.title"
			      label="E-mail"
			      type="text"
			      required
			    ></v-text-field>
			<!-- <v-select
                v-model="form.category_id"
                :items="category()"
                label="Category"
                required
            ></v-select> -->
			   <v-btn type="submit">Submit</v-btn>
        </v-form>
 	</v-container>
</template>
<script>
export default {
    data(){
        return {
            form:{
                title:null,
                category_id:1,
                body:"lorem Ipsul",
            },
            categories:{}
        }
    },
    methods:{
        getCategory()
        { 
            axios.get("api/category").
            then(res=> this.categories= res.data.category)
        },
        category()
        { 
          let arr = []
          for(let key in this.categories)
          {   
            
              let {id, name} = this.categories[key]
        
              arr[id] = name
          }
         console.log(arr);
          return arr;
        }, 
        createCategory()
        {
           axios.post("/api/question", this.form).
           then(res=> console.log(res))
        }
    },
    mounted()
    {  

        this.getCategory();
       
    }
}
</script>