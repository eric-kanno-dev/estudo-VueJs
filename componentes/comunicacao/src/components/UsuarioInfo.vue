<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome do usuário: <strong>{{inverterNome()}}</strong></p>
        <p>Idade: <strong>{{idade}}</strong></p>
        <button @click="reiniciarNome"> Reiniciar Nome</button>
        <button @click="reiniciarFn"> Reiniciar Nome (Callback)</button>
    </div>
</template>

<script>
import barramento from "@/barramento";
export default {
  props: {
    nome: { type: String, default: "Norges", required: false },
    reiniciarFn: Function,
    idade: { type: Number, default: 0 },
  },
  methods: {
    inverterNome() {
      return this.nome
        .split("")
        .reverse()
        .join("");
    },
    reiniciarNome() {
      const antigo = this.nome;
      // comunicação entre filho para o pai
      this.$emit("nomeMudou", { novo: "Xorges", antigo: antigo });
    },
  },
  created() {
    barramento.quandoIdadeMudar((idade) => {
      this.idade = idade;
    });
  },
};
</script>

<style scoped>
.componente {
  flex: 1;
  background-color: #ec485f;
  color: #fff;
}
</style>
