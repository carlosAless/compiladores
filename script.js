input = document.getElementsByClassName("input")


function avaliarFuncao(expressao, x) {
    // Substitui "x" pela variável real x na expressão
    const expressaoComX = input[0].value.trim()

    // Tenta avaliar a expressão usando a função "eval()"
    try {
        const resultado = eval(expressaoComX);
        return resultado;
    } catch (error) {
        // Se ocorrer um erro na avaliação da expressão, retorne NaN
        return NaN;
    }
}

function funcaoObjetivo(x){
const expressao = "x * x"; 

const resultado = avaliarFuncao(expressao, x);
if(!isNaN){
    alert("invalido!")
    return null
}

return resultado
}


  const tamanhoPopulacao = 50;
  const numGeracoes = 100;
  const taxaMutacao = 0.1;
  
  function criarPopulacao(tamanho, numBits) {
    const populacao = [];
    for (let i = 0; i < tamanho; i++) {
      const individuo = [];
      for (let j = 0; j < numBits; j++) {
        individuo.push(Math.random() < 0.5 ? 0 : 1);
      }
      populacao.push(individuo);
    }
    return populacao;
  }
  
  function avaliarPopulacao(populacao) {
    return populacao.map(individuo => {
      const x = decodificarIndividuo(individuo);
      return funcaoObjetivo(x);
    });
  }
  
  function decodificarIndividuo(individuo) {
    const min = -2;
    const max = 2;
    const numBits = individuo.length;
    const range = max - min;
    const valor = min + individuo.reduce((acc, bit, index) => {
      return acc + bit * Math.pow(2, index);
    }, 0) / (Math.pow(2, numBits) - 1) * range;
    return valor;
  }
  
  function selecionarPais(populacao, pontuacoes) {
    const totalPontuacoes = pontuacoes.reduce((acc, pontuacao) => acc + pontuacao, 0);
    const probabilidades = pontuacoes.map(pontuacao => pontuacao / totalPontuacoes);
    const pais = [];
    while (pais.length < 2) {
      const r = Math.random();
      let acumulado = 0;
      for (let i = 0; i < probabilidades.length; i++) {
        acumulado += probabilidades[i];
        if (r <= acumulado) {
          pais.push(populacao[i]);
          break;
        }
      }
    }
    return pais;
  }
  

  function realizarCruzamento(pai1, pai2) {
    const pontoCruzamento = Math.floor(Math.random() * pai1.length);
    const filho1 = pai1.slice(0, pontoCruzamento).concat(pai2.slice(pontoCruzamento));
    const filho2 = pai2.slice(0, pontoCruzamento).concat(pai1.slice(pontoCruzamento));
    return [filho1, filho2];
  }
  

  function realizarMutacao(individuo, taxaMutacao) {
    return individuo.map(bit => Math.random() < taxaMutacao ? 1 - bit : bit);
  }
  
  function algoritmoGenetico() {
    let populacao = criarPopulacao(tamanhoPopulacao, 10); // 10 bits para representação binária.
    for (let geracao = 0; geracao < numGeracoes; geracao++) {
      const pontuacoes = avaliarPopulacao(populacao);
      const melhorPontuacao = Math.min(...pontuacoes);
      const melhorIndividuo = populacao[pontuacoes.indexOf(melhorPontuacao)];
      console.log(`Geração ${geracao + 1}: Melhor pontuação = ${melhorPontuacao}, Melhor indivíduo = ${melhorIndividuo}`);
      const novaPopulacao = [];
      while (novaPopulacao.length < tamanhoPopulacao) {
        const [pai1, pai2] = selecionarPais(populacao, pontuacoes);
        const [filho1, filho2] = realizarCruzamento(pai1, pai2);
        const mutacao1 = realizarMutacao(filho1, taxaMutacao);
        const mutacao2 = realizarMutacao(filho2, taxaMutacao);
        novaPopulacao.push(mutacao1, mutacao2);
      }
      populacao = novaPopulacao;
    }
  }
  
  algoritmoGenetico();
  