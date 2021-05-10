let nome = document.querySelector('#nome');
let email = document.querySelector('#email');
let cpf_cnpj = document.querySelector('#cpf_cnpj');
let telefone = document.querySelector('#telefone');
let endereco = document.querySelectorAll('.endereco');
let btn = document.querySelector('#submitBtn');
let tableElement = document.querySelector('.table');
let tbodyElement = document.querySelector('tbody');

enderecos = Array.from(endereco);
pessoas = JSON.parse(localStorage.getItem('pessoas_cadastradas')) || [];

function validarCPF_CNPJ(cpf){
  return cpf.match(/([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/);
}

function validar(){
  if (nome.value == ''){
    return false;
  }
  if (email.value == ''){
    return false;
  }
  if (cpf_cnpj.value == '' || !validarCPF_CNPJ(cpf_cnpj.value)){
    alert("CPF ou CNPJ inválido!");
    cpf_cnpj.focus();
    return false;
  }
  if (telefone.value == ''){
    return false;
  }
  for(endereco of enderecos){
    if (endereco.value == ''){
      return false;
    }
  }
  return true;
}

function renderPessoas(){
  tbodyElement.innerHTML = '';
  for(pessoa of pessoas){
    let trElement = document.createElement('tr');
    let td1Element = document.createElement('td');
    let td2Element = document.createElement('td');
    let td3Element = document.createElement('td');
    let td4Element = document.createElement('td');
    let td5Element = document.createElement('td');
    let td6Element = document.createElement('td');
    let nomePessoa = document.createTextNode(pessoa.nome);
    let emailPessoa = document.createTextNode(pessoa.email);
    let cpf_cnpjPessoa = document.createTextNode(pessoa.cpf_cnpj);
    let telefonePessoa = document.createTextNode(pessoa.telefone);
    let enderecoPessoa = document.createTextNode(`${pessoa.endereco.logradouro}, ${pessoa.endereco.numero} -
     ${pessoa.endereco.bairro} - ${pessoa.endereco.cidade}/${pessoa.endereco.estado}`); //Rua exemplo, 123, bairro . Campos/RJ.
    let pos = pessoas.indexOf(pessoa);
    let excluirElement = document.createElement('button');
    let textElement = document.createTextNode('Excluir');

    excluirElement.appendChild(textElement);
    excluirElement.setAttribute('class', 'btn btn-outline-danger');
    excluirElement.setAttribute('onclick', `excluirPessoa(${pos})`);

    td1Element.appendChild(nomePessoa);
    td2Element.appendChild(emailPessoa);
    td3Element.appendChild(cpf_cnpjPessoa);
    td4Element.appendChild(telefonePessoa);
    td5Element.appendChild(enderecoPessoa);
    td6Element.appendChild(excluirElement);
    
    trElement.appendChild(td1Element);
    trElement.appendChild(td2Element);
    trElement.appendChild(td3Element);
    trElement.appendChild(td4Element);
    trElement.appendChild(td5Element);
    trElement.appendChild(td6Element);
    
    tbodyElement.appendChild(trElement);
    tableElement.appendChild(tbodyElement);
  }
}

renderPessoas();

function excluirPessoa(pos){
  pessoas.splice(pos, 1);
  renderPessoas();
  saveToStorage();
}

function cadastrar(){
  if(!validar()){
    return; 
  }
  let pessoa = {
    nome: nome.value,
    email: email.value,
    cpf_cnpj: cpf_cnpj.value,
    telefone: telefone.value,
    endereco: {
      logradouro: enderecos[0].value,
      numero: enderecos[1].value,
      bairro: enderecos[2].value,
      cidade: enderecos[3].value,
      estado: enderecos[4].value
    }
  } 
  limparInputs();
  pessoas.push(pessoa);
  console.log(pessoas);
  renderPessoas();
  saveToStorage();
}

function limparInputs(){
  nome.value = '';
  email.value = '';
  cpf_cnpj.value = '';
  telefone.value = '';
  enderecos.forEach((e) => e.value = '');
}


btn.addEventListener('click', cadastrar);

function saveToStorage(){
  localStorage.setItem('pessoas_cadastradas',JSON.stringify(pessoas));
}