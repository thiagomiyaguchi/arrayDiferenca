const { differenceArray } = require('./differenceArray');

exports.handler = async (event) => {
  try {
    if (!event.array1 || !event.array2) {
      throw new Error('Os parâmetros array1 e array2 são obrigatórios.');
    }

    // Separa as entradas de acordo com o espaço
    const array1 = event.array1.split(/\s+/).map((item) => item.trim());
    const array2 = event.array2.split(/\s+/).map((item) => item.trim());

    const resultado = differenceArray(array1, array2);

    return {
      resultado: resultado.length > 0 ? resultado.join(' ') : '', // Resultado separado por espaços
    };
  } catch (error) {
    console.error('Erro:', error.message);
    return { erro: error.message };
  }
};
