new Vue({
  el: "#desafio",
  data: {
    flagEfeito: false,
    efeito: "",

    ex3: "borges1",

    ex4: "false",
    ex4Classe: "borges3",

    tamanhoBloco: 0,
  },
  methods: {
    iniciarEfeito() {
      this.flagEfeito = !this.flagEfeito;
      this.flagEfeito ? (this.efeito = "encolher") : (this.efeito = "destaque");
    },

    iniciarProgresso() {
      setInterval(() => {
        if (this.tamanhoBloco != 100) {
          this.tamanhoBloco = this.tamanhoBloco + 10;
        }
      }, 500);
    },
  },
  computed: {
    classeEx4() {
      return this.ex4 === "true" ? this.ex4Classe : "";
    },

    blocosProgresso() {
      return {
        backgroundColor: "green",
        height: "100%",
        width: `${this.tamanhoBloco}%`,
      };
    },
  },
});
