<template>
	<div id="AppCall">
		<main class="conteiner">
			<section class="inicio">
				<img class="logo" src="../assets/Logo-sol.png">
				<h1 class="titulo">Bem vindo!</h1>
				<p class="instrucion">insira seu cep e os outros dados carregam automaticamente</p>
				<img class="seta" src="../assets/seta.png">
			</section>
			<section class="dados">
				<p class="texto">Cep:</p>
				<input type="text" v-model="cep" v-on:keyup.enter="getData()" class="dados-input" placeholder="escreva seu CEP">
				<p class="texto">Rua:</p>
				<input type="text" v-model="rua" class="dados-input">
				<p class="texto">Bairro:</p>
				<input type="text" v-model="bairro" class="dados-input">
				<p class="texto">Cidade:</p>
				<input type="text" v-model="cidade" class="dados-input">
				<p class="texto">UF:</p>
				<input type="text" v-model="uf" class="dados-input">
				<button class="botao">cancel</button>
				<button class="botao salvar">save</button>
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
	border-radius: 30px;
	background-color: #b2b2b2;
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
	border-radius: 30px 0 0 30px; 
}
.logo{
	width: 30%;
}
.titulo{
	margin: 30px;
}
.instrucion{
	padding-left: 50px;
}
.seta{
	width: 30%;
}
.dados{
	/*max-width: 70%;*/
	min-width: 350px;
	max-width: 350px;
	padding: 10px;
	padding-top: 100px;
	margin: 0 auto;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: flex-start;
	align-items: flex-start;
	align-content: flex-start;
	background-color: #b2b2b2;	
}
.texto{
	width: 80px;
	color: #686767;
	font-size: 1.5em;
	display: inline;
	margin-top: 40px;
}
.dados-input{
	width: 250px;
	height: 5% ;
	padding: 10px;
	margin: 5px 0;
	border-radius: 5px;	
	display: inline;
	background-color: white;
	color: #737373;
	border:none;
	margin-top: 40px;
}
.botao{
	width: 90px;
	height: 40px;
	border-radius: 10%;
	border: none;
	margin: 10px;
	margin-left: 100px;
}
.salvar{
	background-color: #52dee5;
	margin: 10px 0 0 15px;
}
</style>