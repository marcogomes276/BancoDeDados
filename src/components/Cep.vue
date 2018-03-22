<template>
	<div id="AppCall">
		<main class="conteiner">
			<section class="dados">
				<img class="lupa" src="../assets/busca.png">
				<input type="text" v-model="cep" v-on:keyup.enter="getData()" class="dados-input" placeholder="Escreva seu cep.">
				<input type="text" v-model="rua" class="dados-input">
				<input type="text" v-model="bairro" class="dados-input">
				<input type="text" v-model="cidade" class="dados-input">
				<input type="text" v-model="uf" class="dados-input">
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
	.lupa{
		width: 90px;
		margin: 10px;	
	}
	.dados-input{
		margin: 10px;
		padding: 10px;
		border-radius: 50px;
		border: none;
		background: #007399;
		color: white;
	}
	.dados-input::placeholder{
		color: black;
	}
</style>