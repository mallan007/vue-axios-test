<template>
    <HeaderView />
    <h1> Editar Restaurante</h1>
    <form class="addNew">
        <input type="text" name="name" v-model="restaurant.name" placeholder="Informe o nome: "/>
        <input type="text" name="address" v-model="restaurant.address" placeholder="Informe o enderço: "/>
        <input type="text" name="contact" v-model="restaurant.contact" placeholder="Informe o contato: "/>
        <button @click="addNewRestaurant"> Atualizar Restaurante </button>
    </form>    
</template>
<script>
import HeaderView from './HeaderView.vue';
import axios from 'axios';

    export default {
        name: 'UpdateView   ',
        components: {
            HeaderView
        },
        data() {    
            return {        
                restaurant: {
                    name: '',
                    address: '',   
                    contact: ''
                }
            }
        },
        async mounted() {
            let user = localStorage.getItem('user-info');
            if(!user){
                this.$router.push({name:'SignUp'});
            }
            const result = await axios.get("http://localhost:3000/restaurants/"+this.$route.params.id);
            console.log(result.data);
            this.restaurant = result.data;  
        },   
    }                    
        
</script>