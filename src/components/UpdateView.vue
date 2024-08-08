<template>
    <HeaderView />
    <h1> Editar Restaurante</h1>
    <form class="addNew">
        <input type="text" name="name" v-model="restaurant.name" placeholder="Informe o nome: "/>
        <input type="text" name="address" v-model="restaurant.address" placeholder="Informe o enderço: "/>
        <input type="text" name="contact" v-model="restaurant.contact" placeholder="Informe o contato: "/>
        <button @click="updateRestaurant"> Atualizar Restaurante </button>
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
        methods: {  
            async updateRestaurant() {
                console.log(this.restaurant);
                const result = await axios.put("http://localhost:3000/restaurants/"+this.$route.params.id, {
                    name: this.restaurant.name,
                    address: this.restaurant.address,
                    contact: this.restaurant.contact    
                });

                if(result.status == 200){
                    alert('Restaurante atualizado com sucesso');
                    this.$router.push({name:'HomeView'});
                }
            },   
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