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

let imagem =
document.getElementById("previewFoto");

if(imagem){

imagem.src = "img/perfilpadrao.png";

}

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
let fonte = document.getElementById("aumentarFonte");

// =======================
// MODO ESCURO GLOBAL
// =======================

// carregar em todas páginas
if(localStorage.getItem("dark") === "true"){

document.body.classList.add("dark");

}

// checkbox
if(modoEscuro){

modoEscuro.checked =
localStorage.getItem("dark") === "true";

modoEscuro.addEventListener("change", function(){

if(modoEscuro.checked){

document.body.classList.add("dark");

localStorage.setItem("dark", "true");

}else{

document.body.classList.remove("dark");

localStorage.setItem("dark", "false");

}

});

}

// =======================
// FONTE GLOBAL
// =======================

// carregar fonte em todas páginas
if(localStorage.getItem("fonte") === "true"){

document.body.classList.add("big-text");

}

// checkbox
if(fonte){

fonte.checked =
localStorage.getItem("fonte") === "true";

fonte.addEventListener("change", function(){

if(fonte.checked){

document.body.classList.add("big-text");

localStorage.setItem("fonte", "true");

}else{

document.body.classList.remove("big-text");

localStorage.setItem("fonte", "false");

}

});

}

// =======================
// RESETAR
// =======================

let btnReset =
document.getElementById("btnReset");

if(btnReset){

btnReset.addEventListener("click", function(){

localStorage.removeItem("dark");

localStorage.removeItem("fonte");

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

// PESQUISA

let pesquisa = document.getElementById("pesquisa");

if(pesquisa){

pesquisa.addEventListener("keyup", function(){

let texto = pesquisa.value.toLowerCase();

let cards = document.querySelectorAll(".card");

cards.forEach(function(card){

let conteudo = card.innerText.toLowerCase();

if(conteudo.includes(texto)){

card.style.display = "block";

}else{

card.style.display = "none";

}

});

});

}

// FAVORITOS

let favoritos = document.querySelectorAll(".favorito");

favoritos.forEach(function(btn){

btn.addEventListener("click", function(){

if(btn.innerHTML === "🤍 Favoritar"){

btn.innerHTML = "❤️ Favoritado";

}else{

btn.innerHTML = "🤍 Favoritar";

}

});

});

let imagemContato =
document.getElementById("imagemContato");

if(imagemContato){

imagemContato.addEventListener("change", function(){

alert("Imagem anexada com sucesso!");

});

}

// FOTO DE PERFIL

let fotoPerfil =
document.getElementById("fotoPerfil");

if(fotoPerfil){

fotoPerfil.addEventListener("change", function(event){

let arquivo =
event.target.files[0];

if(arquivo){

let leitor =
new FileReader();

leitor.onload =
function(e){

let imagem =
document.getElementById("previewFoto");

imagem.src =
e.target.result;

let usuario =
JSON.parse(localStorage.getItem("usuarioLogado"));

if(usuario){

localStorage.setItem(
"foto_"+usuario.email,
e.target.result
);

}

};

leitor.readAsDataURL(
arquivo
);

}

});

}

// CARREGAR FOTO SALVA

let usuario =
JSON.parse(localStorage.getItem("usuarioLogado"));

let fotoSalva = null;

if(usuario){

fotoSalva =
localStorage.getItem(
"foto_"+usuario.email
);

}

if(fotoSalva){

let imagem =
document.getElementById("previewFoto");

if(imagem){

imagem.src = fotoSalva;

}

}

// IDIOMA

let idioma = document.getElementById("idioma");

// carregar idioma salvo
let idiomaSalvo = localStorage.getItem("idioma");

if(idiomaSalvo){

trocarIdioma(idiomaSalvo);

}

// mudar idioma
if(idioma){

idioma.value = idiomaSalvo || "pt";

idioma.addEventListener("change", function(){

localStorage.setItem("idioma", idioma.value);

trocarIdioma(idioma.value);

});

}

function trocarIdioma(lang){

// HOME
let tituloHome = document.getElementById("tituloHome");

if(tituloHome){

tituloHome.innerText =
lang === "en"
? "Welcome to Turismo 360°"
: "Bem-vindo ao Turismo 360°";

}

// SOBRE
let tituloSobre = document.getElementById("tituloSobre");

if(tituloSobre){

tituloSobre.innerText =
lang === "en"
? "About"
: "Sobre";

}

// PROJETOS
let tituloProjetos = document.getElementById("tituloProjetos");

if(tituloProjetos){

tituloProjetos.innerText =
lang === "en"
? "Projects"
: "Projetos";

}

// CONTATO
let tituloContato = document.getElementById("tituloContato");

if(tituloContato){

tituloContato.innerText =
lang === "en"
? "Contact"
: "Contato";

}

// CONFIG
let tituloConfig = document.getElementById("tituloConfig");

if(tituloConfig){

tituloConfig.innerText =
lang === "en"
? "Settings"
: "Configurações";

}

}
// =======================
// INTEGRAÇÃO BACKEND MYSQL
// =======================

const API_URL = 'http://localhost:3000';

if(cadastroForm){

cadastroForm.addEventListener('submit', async function(event){

event.preventDefault();

const nome = document.getElementById('nome').value;
const email = document.getElementById('email').value;
const senha = document.getElementById('senha').value;
const mensagem = document.getElementById('mensagem');

try{

const resposta = await fetch(`${API_URL}/cadastro`, {
method: 'POST',
headers: {
'Content-Type': 'application/json'
},
body: JSON.stringify({ nome, email, senha })
});

const dados = await resposta.json();

if(resposta.ok){
mensagem.innerHTML = dados.mensagem;
mensagem.className = 'sucesso';
cadastroForm.reset();
}else{
mensagem.innerHTML = dados.erro;
mensagem.className = 'erro';
}

}catch(error){
mensagem.innerHTML = 'Erro ao conectar com o servidor';
mensagem.className = 'erro';
}

});

}

async function login(){

let email = document.getElementById('email').value;
let senha = document.getElementById('senha').value;

try{

const resposta = await fetch(`${API_URL}/login`, {
method: 'POST',
headers: {
'Content-Type': 'application/json'
},
body: JSON.stringify({ email, senha })
});

const dados = await resposta.json();

if(resposta.ok){

localStorage.setItem(
'usuarioLogado',
JSON.stringify(dados.usuario)
);

mostrarMensagem('Login realizado', 'sucesso');

setTimeout(() => {
window.location.href = 'home.html';
}, 1000);

}else{
mostrarMensagem(dados.erro, 'erro');
}

}catch(error){
mostrarMensagem('Erro no servidor', 'erro');
}

}

if(formContato){

formContato.addEventListener('submit', async function(e){

e.preventDefault();

const nome = document.getElementById('nome').value;
const email = document.getElementById('email').value;
const mensagemTexto = document.getElementById('mensagem').value;

try{

const resposta = await fetch(`${API_URL}/contato`, {
method: 'POST',
headers: {
'Content-Type': 'application/json'
},
body: JSON.stringify({
nome,
email,
mensagem: mensagemTexto
})
});

const dados = await resposta.json();

if(resposta.ok){
alert(dados.mensagem);
formContato.reset();
}else{
alert(dados.erro);
}

}catch(error){
alert('Erro ao conectar com o backend');
}

});

}
