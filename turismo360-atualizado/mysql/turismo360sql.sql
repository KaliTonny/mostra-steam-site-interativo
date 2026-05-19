create database turismo360;

use turismo360;

create table usuarios(
id int primary key auto_increment,
nome varchar(100) not null,
email varchar(100) unique not null,
senha varchar(100) not null
);

create table contatos(
id int primary key auto_increment,
nome varchar(100) not null,
email varchar(100) not null,
mensagem text not null
);

