# compiladores
repositório para o desenvolvimento da linguagem de programação pool

#codigo com todos os recursos da linguagem

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

