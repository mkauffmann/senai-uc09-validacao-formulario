//função para totalizar valor de assinatura mensal
function totaliza()
{
    total = 0.00;
    //plano mensal
    if(document.form.planos[0].checked)
        total = total + 85.00;
    //plano quadrimestral
    if(document.form.planos[1].checked)
        total = total + 300.00 / 4;
    //plano anual
    if(document.form.planos[2].checked)
        total = total + 600.00 / 12;
    //Premiere econômico
    if(document.form.premiere[0].checked)
        total = total + 60.00;
    //Premiere controle
    if(document.form.premiere[1].checked)
        total = total + 80.00;
    document.form.total.value = total.toFixed(2);
}

// valida_regex_json.js

//Validação com REGEX
function validar_texto() {
    let value = document.getElementById("nome").value;
    let re = /^[a-zA-ZéúíóáÉÚÍÓÁèùìòàçÇÈÙÌÒÀõãñÕÃÑêûîôâÊÛÎÔÂëÿüïöäËYÜÏÖÄ\-\ \s]+$/;
    if (!re.test(value)) {
      // campo inválido, retorna false para o formulário não ser submetido
      alert('Somente caracteres alfabéticos Inválido');
      document.form.nome.focus();
      return false;
    }
    return true;
  }
  //Validação com REGEX
  function validar_numero() {
    let value = document.getElementById("salario").value;
    let re = /^\d+$/;
    if (!re.test(value)) {
      // campo inválido, retorna false para o formulário não ser submetido
      alert('Somente caracteres numéricos Inválido');
      document.form.salario.focus();
      return false;
    }
    return true;
  }

  function validar_total() {
    let value = document.getElementById("total").value;
    let re = /\d{1,4}\.\d{2}$/;
    if (!re.test(value)) {
      // campo inválido, retorna false para o formulário não ser submetido
      alert('Somente caracteres numéricos Inválido');
      document.form.total.focus();
      return false;
    }
    return true;
  }

  function validar_celular() {
    let value = document.getElementById("cel").value;
    let re = /^\(?\d{0,2}\)?\d{4,5}\s?\-?\d{4}$/;
    if (!re.test(value)) {
      // campo inválido, retorna false para o formulário não ser submetido
      alert('Somente caracteres numéricos Inválido');
      document.form.cel.focus();
      return false;
    }
    return true;
  }
  //Validação com REGEX
  function validar_cpf() {
    let value = document.getElementById("cpf").value;
    let re = /^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2})|([0-9]{11}))$/;
    if (!re.test(value)) {
      // campo inválido, retorna false para o formulário não ser submetido
      alert('Conteúdo de CPF Inválido');
      document.form.cpf.focus();
      return false;
    }
    return true;
  }
  
  function validarSelect(){
    let select = document.querySelector('select');
    if(select.value == ""){
      alert('Escolha um time');
      document.form.select.focus();
      return false;
    } 
    return true;
  }
 
  function validarEmail(){
    let email = document.getElementById('email');
    let regex = /^[a-z]+@[a-z]+\.[a-z]{2,3}(\.[a-z]{2,3})?/;
    if(!regex.test(email.value)){
      alert('Campo de email inválido!')
      document.form.email.focus();
      return false;
    }
    return true;
  }

function validarNascimento(){
  let nasc = document.getElementById('nascimento');
  if(nasc.value == ""){
    alert('Preencha uma data de nascimento');
    document.form.nasc.focus();
    return false;
  }
  return true;
}

    // valida_framework.js
function confere_usuario()
{
   let login = document.getElementById("login");
   let senha = document.getElementById("senha"); 
  let usuario_json = '{"login": "Usuario", "senha":"Abc$123"}';
  let usuario = JSON.parse(usuario_json);
  if (usuario.login == login.value && usuario.senha == senha.value)
    return true;
  else if (usuario.login != login.value)
    {
        alert("Login não confere com JSON!");
        document.form.login.focus();
        return false;
    } else if (usuario.senha != senha.value){
        alert("Senha não confere com JSON!");
        document.form.login.focus();
        return false;
    }
}



   //valida todos os campos
   function validar_tudo() {
    // se um deles for inválido, retorna false e o form não é submetido
    if (validar_texto() && validar_cpf() && validarEmail() && validar_celular() 
    && validarNascimento() && validar_numero() 
    && validarSelect() && validar_total() 
    && confere_usuario()){
        let btnAssinar = document.getElementById('butassin');
        btnAssinar.removeAttribute('disabled');
        alert('Tudo certo com os dados inseridos! Clique no botão Assinar para concluir o processo');
    } 
  }
  
  function alertaAssinatura(){
    alert('Parabéns! Assinatura Realizada');
  }

  //temporizador
var d = new Date();
document.getElementById("datahoje").value = d.toDateString();



setInterval(contartempo, 1000);


var contador=1;
function contartempo(){ 
	document.getElementById("tempo").innerHTML = contador + 's';
	contador++;
}
    
