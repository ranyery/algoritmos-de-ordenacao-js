// @ts-check
import { listaLivros } from "./array.js";

/**
 * @param { {titulo: string, preco: number} } pivo
 * @param { pivo[] } array
 * returns
 */
function encontraMenor(pivo, array) {
  let menores = 0;

  for (let atual = 0; atual < array.length; atual++) {
    let produtoAtual = listaLivros[atual];
    if (produtoAtual.preco < pivo.preco) {
      menores++;
    }
  }

  trocaLugar(array, array.indexOf(pivo), menores);
  return array;
}

/**
 * @param { {titulo: string, preco: number}[] } array
 * @param { number } de
 * @param { number } para
 */
export function trocaLugar(array, de, para) {
  const elemento1 = array[de];
  const elemento2 = array[para];

  array[para] = elemento1;
  array[de] = elemento2;
}

/**
 * @param { {titulo: string, preco: number}[] } array
 */
function divideNoPivo(array) {
  let pivo = array[Math.floor(array.length / 2)];
  encontraMenor(pivo, array);
  let valoresMenores = 0;

  for (
    let indiceItemAnalise = 0;
    indiceItemAnalise < array.length;
    indiceItemAnalise++
  ) {
    const atual = array[indiceItemAnalise];
    if (atual.preco <= pivo.preco && atual !== pivo) {
      trocaLugar(array, indiceItemAnalise, valoresMenores);
      valoresMenores++;
    }
  }

  return array;
}

console.log(divideNoPivo(listaLivros));
// console.log(encontraMenor(listaLivros[2], listaLivros));
