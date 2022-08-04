// @ts-check
import { listaLivros } from "./arrayOrdenado.js";

/**
 * @param { { titulo: string, preco: number }[] } array
 * @param { number } de
 * @param { number } ate
 * @param { number } valorBuscado
 */
function busca(array, de, ate, valorBuscado) {
  const indiceMeio = Math.floor((de + ate) / 2);
  const itemAtual = array[indiceMeio];

  if (de > ate) return -1;

  if (valorBuscado === itemAtual.preco) {
    return indiceMeio;
  }

  if (valorBuscado < itemAtual.preco) {
    return busca(array, de, indiceMeio - 1, valorBuscado);
  }

  if (valorBuscado > itemAtual.preco) {
    return busca(array, indiceMeio - 1, ate, valorBuscado);
  }
}

console.log(busca(listaLivros, 0, listaLivros.length - 1, 40));
