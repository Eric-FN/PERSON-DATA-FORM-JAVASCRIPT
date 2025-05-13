const form = document.querySelector(".form");
const pessoas = [];
const adicionarP = document
  .querySelector(".adicionar")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const nome = form.querySelector(".nome");
    const sobrenome = form.querySelector(".sobrenome");
    const idade = form.querySelector(".idade");
    pessoas.push({
      nome: nome.value,
      sobrenome: sobrenome.value,
      idade: idade.value,
    });
    const exibirP = document
      .querySelector(".exibir")
      .addEventListener("click", function (event) {
        event.preventDefault();
        const exibirClass = document.querySelector(".resultado");

        exibirClass.innerHTML += `<p>Nome = ${nome.value}</p>
          <p>Sobrenome = ${sobrenome.value}</p>
          <p>idade = ${idade.value}</p>
          <br>
          `;
      });
  });
