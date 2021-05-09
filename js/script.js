let name = document.querySelector("#nome");
let email = document.querySelector("#email");
let cpf_cnpj = document.querySelector("#cpf_cnpj");
let telefone = document.querySelector("#telefone");
let endereco = document.querySelectorAll(".endereco");
let btn = document.querySelector("#submitBtn");
let pessoa;

endereco_array = Array.from(endereco);
pessoas = [];

function cadastrar(){
  let pessoa = {
    nome: nome.value,
    email: email.value,
    cpf_cnpj: cpf_cnpj.value,
    endereco: {
      logradouro: endereco_array[0].value,
      numero: endereco_array[1].value,
      cidade: endereco_array[2].value,
      bairro: endereco_array[3].value,
      estado: endereco_array[4].value
    }
  } 
  limparInputs();
  pessoas.push(pessoa);
}

function limparInputs(){
  nome.value = '';
  email.value = '';
  cpf_cnpj.value = '';
  telefone.value = '';
  endereco_array.forEach((e) => e.value = '');
}

btn.addEventListener("click", cadastrar);

console.log(pessoas)