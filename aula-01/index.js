// @ts-check

import { edFolha, edGalho } from "./arrays.js";

/**
 * @param {{ titulo:string, preco:number }[]} lista1
 * @param {{ titulo:string, preco:number }[]} lista2
 * @returns
 */
function juntaListas(lista1, lista2) {
  let listaFinal = [];
  let posicaoAtualLista1 = 0;
  let posicaoAtualLista2 = 0;

  while (
    posicaoAtualLista1 < lista1.length &&
    posicaoAtualLista2 < lista2.length
  ) {
    const produtoAtualLista1 = lista1[posicaoAtualLista1];
    const produtoAtualLista2 = lista2[posicaoAtualLista2];

    if (produtoAtualLista1.preco < produtoAtualLista2.preco) {
      listaFinal.push(produtoAtualLista1);
      posicaoAtualLista1++;
    } else {
      listaFinal.push(produtoAtualLista2);
      posicaoAtualLista2++;
    }
  }

  while (lista1[posicaoAtualLista1] !== undefined) {
    listaFinal.push(lista1[posicaoAtualLista1]);
    posicaoAtualLista1++;
  }

  while (lista2[posicaoAtualLista2] !== undefined) {
    listaFinal.push(lista1[posicaoAtualLista2]);
    posicaoAtualLista2++;
  }

  return listaFinal;
}

const listaFinal = juntaListas(edFolha, edGalho);
console.log("listaFinal", listaFinal);
