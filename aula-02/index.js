import { listaLivros } from "./array.js";
/**
 * @param { {titulo: string, preco: number}[] } array
 */
function mergeSort(array) {
  if (array.length <= 1) return array;

  const meio = Math.ceil(array.length / 2);
  const parte1 = mergeSort(array.slice(0, meio));
  const parte2 = mergeSort(array.slice(meio, array.length));

  return ordenaArrays(parte1, parte2);
}

/**
 * @param { {titulo: string, preco: number}[] } array1
 * @param { {titulo: string, preco: number}[] } array2
 */
function ordenaArrays(array1, array2) {
  let posicaoAtualParte1 = 0;
  let posicaoAtualParte2 = 0;
  const resultado = [];

  while (
    posicaoAtualParte1 < array1.length &&
    posicaoAtualParte2 < array2.length
  ) {
    const produtoAtualParte1 = array1[posicaoAtualParte1];
    const produtoAtualParte2 = array2[posicaoAtualParte2];

    if (produtoAtualParte1.preco < produtoAtualParte2.preco) {
      resultado.push(produtoAtualParte1);
      posicaoAtualParte1++;
    } else {
      resultado.push(produtoAtualParte2);
      posicaoAtualParte2++;
    }
  }

  return resultado.concat(
    posicaoAtualParte1 < array1.length
      ? array1.slice(posicaoAtualParte1)
      : array2.slice(posicaoAtualParte2)
  );
}

console.log(mergeSort(listaLivros));
