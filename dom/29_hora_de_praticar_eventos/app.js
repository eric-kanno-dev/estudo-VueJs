new Vue({
  el: "#desafio",
  data: {
    valor: "",
  },
  methods: {
    clickAlerta() {
      alert("alow");
    },
    armazenarValor(e) {
      this.valor = e.target.value;
    },
  },
});
