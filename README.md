# pool

## Descrição

Linguagem de programação simples, escrita em C e C++ de back-end com recursos básicos.

## Recursos Básicos

### 1. Sintaxe

[Descreva a sintaxe básica da linguagem, incluindo como declarar variáveis, estruturas de controle de fluxo (como loops e condicionais), e funções ou métodos.]

Exemplo de declaração de variável:
```int var;```

Exemplo de estrutura condicional:
```if(true == false){statements..}```

### 2. Tipos de Dados

[Liste e descreva os tipos de dados disponíveis na linguagem, como inteiros, strings, booleanos, etc.]

- Tipo de Dado int: tipo de dado int, representa números inteiros, sem ponto flutuante, como: 10, 20, 5, 125.
- Tipo de Dado float: tipo de dado float, representa números flutuantes, com ponto flutuante, como: 10.2, 5.6542, 3.14.
- Tipo de Dado char: tipo de dado char, representa um ou mais caracteres, como: "a", "hello world", "john due", "pool".


### 4. Ambiente de Desenvolvimento

[Descreva as ferramentas e ambientes de desenvolvimento mais comuns para a linguagem, incluindo IDEs, editores de texto, e compiladores/interpretadores.]

- IDE Recomendada: vscode.
- Compilador/Interpretador: [Nome do Compilador/Interpretador]

### 5. Comentários

Exemplo de comentário de uma linha:
```//hello world```

### 6. Exemplos de Código

[Inclua alguns exemplos de código simples que demonstrem os conceitos básicos da linguagem.]

Exemplo 1:
int idade;
float altura;
char nome;
bool Ehformado = true;
bool Jacasou = false;

function cadastrar(quantCadastros){
	int i;
	char nome;
	int idade;
	float altura;

	loop(i = 0;i<quantCadastros;i++){
		screen("digite o seu nome");
		input(nome);

		screen("digite sua idade");
		input(idade);
	
		screen("digite sua altura");
		input(altura);
	}

	if(idade >= 18){
		screen("maior de idade!");
	}else{
		if(idade <= 18){
			screen("menor de idade!");
		}
	
	}

	if(altura==1.4){
		screen("você é baixo!");
	}

	if(nome == "jose"){
		screen("seu nome é jose!");
	}else{
		if(nome != "jose"){
			screen("você não é o jose!");
		}
	}
}

function main(){

	int quantCadastros;

	screen("digite o seu nome");
	input(nome);

	screen("digite sua idade");
	input(idade);

	screen("cadastro feito com sucesso!");

	screen("Quantos cadastros você quer?");
	input(quantCadastros);

	cadastrar(quantCadastros);

	return;
}
