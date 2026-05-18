// PERFIL

let btnEditar = document.getElementById("btnEditar");

if (btnEditar) {

  btnEditar.addEventListener("click", function () {

    let novoNome = prompt("Digite seu nome:");

    let novoEmail = prompt("Digite seu email:");

    if (novoNome) {

      document.getElementById("nome").textContent = "Nome: " + novoNome;

      localStorage.setItem("nome", novoNome);

    }

    if (novoEmail) {

      document.getElementById("email").textContent = "Email: " + novoEmail;

      localStorage.setItem("email", novoEmail);

    }

  });

}

// CARREGAR DADOS

let nomeSalvo = localStorage.getItem("nome");

let emailSalvo = localStorage.getItem("email");

if (nomeSalvo && document.getElementById("nome")) {

  document.getElementById("nome").textContent = "Nome: " + nomeSalvo;

}

if (emailSalvo && document.getElementById("email")) {

  document.getElementById("email").textContent = "Email: " + emailSalvo;

}

// BOTÃO SAIR

let btnSair = document.getElementById("btnSair");

if(btnSair){

btnSair.addEventListener("click", function(){

localStorage.removeItem("usuarioLogado");

window.location.href = "login.html";

});

}

// FORM CONTATO

let formContato = document.getElementById("formContato");

if(formContato){

let nome=document.getElementById("nome");

let email=document.getElementById("email");

let mensagem=document.getElementById("mensagem");

let btnEnviar=document.querySelector(
'button[type="submit"]'
);

formContato.addEventListener(
"submit",
function(e){

e.preventDefault();

if(!usuarioLogado()){

mostrarLogin(
btnEnviar
);

return;

}

if(
nome.value==="" ||
email.value==="" ||
mensagem.value===""
){

alert(
"Preencha todos os campos!"
);

}else{

alert(
"Mensagem enviada com sucesso!"
);

formContato.reset();

}

});

}

// CONFIGURAÇÕES

let modoEscuro = document.getElementById("modoEscuro");

if (modoEscuro) {

  modoEscuro.addEventListener("change", function () {

    document.body.classList.toggle("dark");

    localStorage.setItem("dark", modoEscuro.checked);

  });

  if (localStorage.getItem("dark") === "true") {

    document.body.classList.add("dark");

    modoEscuro.checked = true;

  }

}

// AUMENTAR FONTE

let fonte = document.getElementById("aumentarFonte");

if (fonte) {

  fonte.addEventListener("change", function () {

    document.body.classList.toggle("big-text");

    localStorage.setItem("fonte", fonte.checked);

  });

  if (localStorage.getItem("fonte") === "true") {

    document.body.classList.add("big-text");

    fonte.checked = true;

  }

}

// RESETAR

let btnReset = document.getElementById("btnReset");

if (btnReset) {

  btnReset.addEventListener("click", function () {

    localStorage.clear();

    location.reload();

  });

}

// PROJETOS

let btn1 = document.getElementById("btnProjeto1");

let btn2 = document.getElementById("btnProjeto2");

let btn3 = document.getElementById("btnProjeto3");

function usuarioLogado(){

let usuario = localStorage.getItem("usuarioLogado");

return usuario !== null;

}

function mostrarLogin(btn){

let avisoExistente =
document.querySelector(".aviso-login");

let fundoExistente =
document.querySelector(".fundo-login");

if(avisoExistente){

return;

}

let fundo =
document.createElement("div");

fundo.className =
"fundo-login";

document.body.appendChild(
fundo
);

let aviso =
document.createElement("div");

aviso.className =
"aviso-login";

aviso.innerHTML=`

Você precisa fazer login primeiro.

<br><br>

<a href="login.html">
Fazer login
</a>

`;

document.body.appendChild(
aviso
);

let posicao =
btn.getBoundingClientRect();

aviso.style.top =
(posicao.top + window.scrollY - 10)
+ "px";

aviso.style.left =
(posicao.right + 15)
+ "px";


fundo.addEventListener(
"click",
function(){

fundo.remove();

aviso.remove();

}

);

}

function abrirDetalhe(id, botao){

if(usuarioLogado()){

let detalhe = document.getElementById(id);

detalhe.style.display =
detalhe.style.display === "none"
? "block"
: "none";

}else{

mostrarLogin(botao);

}

}

if(btn1){

btn1.addEventListener("click", function(){

abrirDetalhe(
"detalhe1",
this
);

});

}

if(btn2){

btn2.addEventListener("click", function(){

abrirDetalhe(
"detalhe2",
this
);

});

}

if(btn3){

btn3.addEventListener("click", function(){

abrirDetalhe(
"detalhe3",
this
);

});

}

// MENU ATIVO

let links = document.querySelectorAll("nav a");

links.forEach(function(link){

  link.addEventListener("click",function(){

    links.forEach(l=>l.classList.remove("active"));

    this.classList.add("active");

  });

});

// BANNER

const slides = [

{
imagem:"img/museu.jpg",
titulo:"História e natureza em um só lugar",
texto:"Conheça pontos marcantes de Candeias com uma experiência moderna e interativa."
},

{
imagem:"img/igreja.jpg",
titulo:"Fé, cultura e tradição",
texto:"Explore igrejas, monumentos e lugares que fazem parte da identidade da cidade."
},

{
imagem:"img/fonte.jpg",
titulo:"Lazer para descobrir e viver",
texto:"Encontre espaços para visitar, registrar momentos e aproveitar Candeias de outro jeito."
}

];

let index = 0;

let tempoBanner;

const bannerImg = document.getElementById("banner-img");

const bannerTitle = document.getElementById("banner-title");

const bannerText = document.getElementById("banner-text");

const prev = document.getElementById("prev");

const next = document.getElementById("next");

function mostrarSlide(){

if(!bannerImg) return;

bannerImg.src=slides[index].imagem;

bannerTitle.textContent=slides[index].titulo;

bannerText.textContent=slides[index].texto;

}

function proximoSlide(){

index=(index+1)%slides.length;

mostrarSlide();

}

function slideAnterior(){

index=(index-1+slides.length)%slides.length;

mostrarSlide();

}

function reiniciarTempo(){

clearInterval(tempoBanner);

tempoBanner=setInterval(proximoSlide,5000);

}

if(next && prev){

next.addEventListener("click",()=>{

proximoSlide();

reiniciarTempo();

});

prev.addEventListener("click",()=>{

slideAnterior();

reiniciarTempo();

});

mostrarSlide();

tempoBanner=setInterval(proximoSlide,5000);

}

// CADASTRO

const cadastroForm=document.getElementById("cadastroForm");

if(cadastroForm){

cadastroForm.addEventListener("submit",function(event){

event.preventDefault();

const nome=document.getElementById("nome").value;

const email=document.getElementById("email").value;

const senha=document.getElementById("senha").value;

const mensagem=document.getElementById("mensagem");

if(nome==="" || email==="" || senha===""){

mensagem.innerHTML="Preencha todos os campos!";
mensagem.className="erro";

}
else if(senha.length<6){

mensagem.innerHTML="A senha precisa ter no mínimo 6 caracteres.";
mensagem.className="erro";

}
else{

let emailExistente =
localStorage.getItem("email");

if(email === emailExistente){

mensagem.innerHTML="Esse e-mail já está cadastrado!";
mensagem.className="erro";

}
else{

localStorage.setItem("nome",nome);

localStorage.setItem("email",email);

localStorage.setItem("senha",senha);

mensagem.innerHTML="Cadastro realizado com sucesso!";
mensagem.className="sucesso";

cadastroForm.reset();

}

}

});

}

// LOGIN

const btnLogin=document.getElementById("btnLogin");

if(btnLogin){

btnLogin.addEventListener("click",login);

}

function login(){

let email=document.getElementById("email").value;

let senha=document.getElementById("senha").value;

let usuario={

nome:localStorage.getItem("nome"),
email:localStorage.getItem("email"),
senha:localStorage.getItem("senha")

};

if(!usuario.email){

mostrarMensagem(
"Nenhum usuário cadastrado",
"erro"
);

return;

}

if(email===usuario.email &&
senha===usuario.senha){

localStorage.setItem(
"usuarioLogado",
JSON.stringify(usuario)
);

mostrarMensagem(
"Login realizado",
"sucesso"
);

setTimeout(()=>{

window.location.href="home.html";

},1000);

}else{

mostrarMensagem(
"E-mail ou senha incorretos",
"erro"
);

}

}

function mostrarMensagem(texto,tipo){

let mensagem=
document.getElementById("mensagem");

if(mensagem){

mensagem.innerText=texto;

mensagem.className=tipo;

}

}

// USUÁRIO LOGADO

function verificarUsuario(){

let usuario=JSON.parse(
localStorage.getItem("usuarioLogado")
);

if(usuario){

let usuarioNome=
document.getElementById("usuarioNome");

if(usuarioNome){

usuarioNome.innerText=
"Olá, "+usuario.nome;

}

}

}

verificarUsuario();

// BOTÃO EXPLORE

let btnExplore = document.getElementById("btnExplore");

if(btnExplore){

btnExplore.addEventListener("click", function(){

if(usuarioLogado()){

window.location.href="explorar.html";

}else{

mostrarLogin(this);

}

});

}

// MOSTRAR ÁREA DE SAIR SOMENTE SE ESTIVER LOGADO

let usuarioAtual = localStorage.getItem("usuarioLogado");

if(btnSair){

let caixaSair = btnSair.parentElement;

if(usuarioAtual){

caixaSair.style.display = "block";

}else{

caixaSair.style.display = "none";

}

}