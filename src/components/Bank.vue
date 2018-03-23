<template>
	<div id="AppCall">
		<main class="conteiner">
			<section class="dados">
				<input type="text" v-model="cep" v-on:keyup.enter="getData()" class="dados-input" placeholder="Type your zip here and press Enter">
				<input type="text" v-model="rua" class="dados-input">
				<input type="text" v-model="bairro" class="dados-input">
				<input type="text" v-model="cidade" class="dados-input">
				<input type="text" v-model="uf" class="dados-input">
				<button class="reiniciar">restart</button>
			</section>
		</main>
	</div>
</template>
<script>
import axios from 'axios'

export default{
	name:'Bancodedados',
	data(){
		return{
			cep:'',
			cidade:'',
			bairro:'', 
			rua:'',
			uf:'',
			dados:[]
		}
	},
	methods:{
		getData(){
			axios.get('http://viacep.com.br/ws/'+this.cep+'/json/')
			.then(response =>{
				this.cidade = response.data.localidade
				this.bairro = response.data.bairro
				this.rua = response.data.logradouro
				this.uf = response.data.uf
				this.dados = response.data
			})
		}
	}
}
</script>
<style scoped>
	*{
		margin: 0;
		padding: 0;
	}
	#AppCall{
		background-image: url(../assets/background3.jpg);
		height: 100vh;
		width: 100%;
}
</style>