<template>
	<div id="AppCall">
		<main class="conteiner">
			<section class="dados">
				<h1 class="titulo">Cep</h1>
				<img class="lupa" src="../assets/busca.png">
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
		background-image: url(../assets/fundo2.png);
		height: 100vh;
	}
	.dados{
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		padding-top: 210px;
	}
	.titulo{
		font-size: 90px;
		color: #007399;
		margin: 10px;
	}
	.lupa{
		width: 120px;
		margin: 10px;	
	}
	.dados-input{
		margin: 10px;
		/*padding: 10px;*/
		border-radius: 50px;
		border: none;
		background: #007399;
		color: white;
		width:20em;
		height:2em;
		text-align: center;
		font-size: 20px;
	}
	.dados-input::placeholder{
		color: black;
	}
	.reiniciar{
		width: 10em;
		height: 4em;
		font-size: 1em;
		background-color: #004284;
		color: ;
		border-radius: 20px;
		border: none;
	}
</style>