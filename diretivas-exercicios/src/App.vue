<template>
	<div id="app">
		<h1>Diretivas</h1>

		<p v-destaque="'blue'"> Diretiva personalizada</p>
		<p v-destaque:fundo.atrasar="'purple'"> Diretiva personalizada</p>



		<!-- <p v-teste:argumento.mod1.mod2.mod3=""> Diretiva personalizada</p> -->
		
	
	</div>
</template>

<script>
export default {};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 2.5rem;
}
</style>
