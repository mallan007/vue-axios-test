<template>
    <HeaderView />
    <h1> Adicionar Restaurante</h1>
    <form class="addNew">
        <input type="text" name="name" v-model="restaurant.name" placeholder="Informe o nome: "/>
        <input type="text" name="address" v-model="restaurant.address" placeholder="Informe o enderço: "/>
        <input type="text" name="contact" v-model="restaurant.contact" placeholder="Informe o contato: "/>
        <button @click="addNewRestaurant"> Cadastrar novo Restaurante </button>
    </form>    
</template>
<script>
import HeaderView from './HeaderView.vue';
import axios from 'axios';

    export default {
        name: 'AddPage',
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
            async addNewRestaurant() {
                const result = await axios.post("http://localhost:3000/restaurants", {
                    name: this.restaurant.name,
                    address: this.restaurant.address,
                    contact: this.restaurant.contact
                });
                console.log(result);
                if(result.status == 201){
                    alert('Restaurante criado com sucesso');
                    this.$router.push({name:'HomeView'});
                }
            },   
        },
    }                    
        
</script>