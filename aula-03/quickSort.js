// @ts-check
import { listaLivros } from "./array.js";
import { trocaLugar } from "./encontraMenores.js";

/**
 * @param { {titulo: string, preco: number}[] } array
 * @param {*} esquerda
 * @param {*} direita
 * @returns
 */
function quickSort(array, esquerda, direita) {
  if (array.length <= 1) return array;

  let indiceAtual = particiona(array, esquerda, direita);
  if (esquerda < indiceAtual - 1) {
    quickSort(array, esquerda, indiceAtual - 1);
  }
  if (indiceAtual < direita) {
    quickSort(array, indiceAtual, direita);
  }
  return array;
}

/**
 * @param { Array<{titulo: string, preco: number}> } array
 * @param { number } esquerda
 * @param { number } direita
 * @returns
 */
function particiona(array, esquerda, direita) {
  let pivo = array[Math.floor((esquerda + direita) / 2)];
  let atualEsquerda = esquerda;
  let atualDireita = direita;

  while (atualEsquerda <= atualDireita) {
    while (array[atualEsquerda].preco < pivo.preco) {
      atualEsquerda++;
    }
    while (array[atualDireita].preco > pivo.preco) {
      atualDireita--;
    }
    if (atualEsquerda <= atualDireita) {
      trocaLugar(array, atualEsquerda, atualDireita);
      atualEsquerda++;
      atualDireita--;
    }
  }
  return atualEsquerda;
}

console.log(quickSort(listaLivros, 0, listaLivros.length - 1));
