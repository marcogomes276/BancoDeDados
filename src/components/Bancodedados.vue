<template>
	<div id="AppCall">
		<main class="conteiner">
			<section class="inicio">
				<img class="logo" src="../assets/Logo-sol.png">
				<h1>Bem vindo!</h1>
				<p>insira seu cep e os outros dados carregam automaticamente</p>
				<img class="seta" src="../assets/seta.png">
			</section>
			<section class="dados">
				<p class="texto">Escreva seu Cep:</p>
				<input type="text" v-model="cep" v-on:keyup.enter="getData()" class="dados-input">
				<p class="texto">Rua:</p>
				<input type="text" v-model="rua" class="dados-input">
				<p class="texto">Bairro</p>
				<input type="text" v-model="bairro" class="dados-input">
				<p class="texto">Cidade:</p>
				<input type="text" v-model="cidade" class="dados-input">
				<p class="texto">UF:</p>
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
#AppCall{
	width: 100%;
	height: 100vh;
	background-color: #eee;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
}
.conteiner{
	width: 90%;
	min-height: 90vh;
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-start;
	align-items: stretch;
	background-color: #fff;
}
.inicio{
	width: 30%;
	min-width: 350px;
	background-color: #ffcc02;
	font-size: 1.5em;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
}
.logo{
	width: 60%;
}
.seta{
	width: 60%;
}
.dados{
	/*max-width: 70%;*/
	min-width: 350px;
	margin: 0 auto;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;	
}
.texto{
	color: black;
	font-size: 2em;
}
.dados-input{
	width: ;
	height: ;
	background-color: #03352c;
	color: #fff;
	border:none;	
}
</style>