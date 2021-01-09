<template>
   	<v-container>
 		 <v-form>
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
                @change="$v.select.$touch()"
                @blur="$v.select.$touch()"
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
                category_id:null,
            },
            categories:{}
        }
    },
    methods:{
        getCategory()
        { 
            axios.get("api/category").
            then(res=> this.categories= res.data)
        },
       
    },
    mounted()
    {
        this.getCategory();
    }
}
</script>