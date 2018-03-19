<template>
	<div id="AppCall">
		<div class="container">
			<p>Escreva seu Cep:</p>
			<input type="text" v-model="cep" v-on:keyup.enter="getData" class="A">
			<p>Rua:</p>
			<input type="text" v-model="rua" class="A" >
			<p>Bairro</p>
			<input type="text" v-model="bairro" class="A" >
			<p>Cidade:</p>
			<input type="text" v-model="cidade" class="A" >
			<p>UF:</p>
			<input type="text" v-model="uf" class="A" >
			<h1 class="titulo">Sua localização</h1>
		</div>
	</div>
</template>
<script>
import axios from 'axios';

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
	background-color: #FFD500;
}	
#AppCall{
	height: 65.5vh;
	background-color: #FFD500;

}
.container{
width: 100%;
background-color: #FFD500;

}
.A{
	background-color: #FFA701;
	color: #6CE5C7;
	border: none;
}
.titulo{
	padding-top: 100px;
	font-size: 100px;
	color: #635D4D;
}
</style>