let name = document.querySelector("#nome");
let email = document.querySelector("#email");
let cpf_cnpj = document.querySelector("#cpf_cnpj");
let telefone = document.querySelector("#telefone");
let endereco = document.querySelectorAll(".endereco");
let btn = document.querySelector("#submitBtn");

endereco_array = Array.from(endereco);
pessoas = [];

let tbodyElement = document.querySelector('tbody');
function renderPessoas(){
  tbodyElement.innerHTML = '';
  for(pessoa of pessoas){
    let trElement = document.createElement('tr');
    let td1Element = document.createElement('td');
    let td2Element = document.createElement('td');
    let td3Element = document.createElement('td');
    let td4Element = document.createElement('td');
    let td5Element = document.createElement('td');
    let nomePessoa = document.createTextNode(pessoa.nome);
    let emailPessoa = document.createTextNode(pessoa.email);
    let cpf_cnpjPessoa = document.createTextNode(pessoa.cpf_cnpj);
    let telefonePessoa = document.createTextNode(pessoa.telefone);
    let enderecoPessoa = document.createTextNode(`${pessoa.endereco.logradouro}, ${pessoa.endereco.numero},
     bairro ${pessoa.endereco.bairro}. ${pessoa.endereco.cidade}/${pessoa.endereco.estado}`); //Rua exemplo, 123, bairro joao maria. Campos/RJ.

    td1Element.appendChild(nomePessoa);
    td2Element.appendChild(emailPessoa);
    td3Element.appendChild(cpf_cnpjPessoa);
    td4Element.appendChild(telefonePessoa);
    td5Element.appendChild(enderecoPessoa);

    trElement.appendChild(td1Element);
    trElement.appendChild(td2Element);
    trElement.appendChild(td3Element);
    trElement.appendChild(td4Element);
    trElement.appendChild(td5Element);

    tbodyElement.appendChild(trElement);
    document.querySelector('#table').appendChild(tbodyElement);
  }
}

renderPessoas();

function cadastrar(){
  let pessoa = {
    nome: nome.value,
    email: email.value,
    cpf_cnpj: cpf_cnpj.value,
    telefone: telefone.value,
    endereco: {
      logradouro: endereco_array[0].value,
      numero: endereco_array[1].value,
      bairro: endereco_array[2].value,
      cidade: endereco_array[3].value,
      estado: endereco_array[4].value
    }
  } 
  limparInputs();
  pessoas.push(pessoa);
  console.log(pessoas);
  renderPessoas();
}

function limparInputs(){
  nome.value = '';
  email.value = '';
  cpf_cnpj.value = '';
  telefone.value = '';
  endereco_array.forEach((e) => e.value = '');
}


btn.addEventListener("click", cadastrar);
