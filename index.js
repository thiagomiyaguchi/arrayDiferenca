const { differenceArray } = require('./differenceArray');

// Captura os argumentos passados via linha de comando
const args = process.argv.slice(2); // Ignora os dois primeiros argumentos que são do Node.js

if (args.length !== 2) {
  console.error('Por favor, forneça dois arrays como argumentos.');
  process.exit(1);
}

try {
  // Converte os argumentos (strings) para arrays utilizando JSON.parse
  const array1 = JSON.parse(args[0]); // Transforma o primeiro argumento em um array
  const array2 = JSON.parse(args[1]); // Transforma o segundo argumento em um array

  // Verifica se os argumentos são arrays válidos
  if (!Array.isArray(array1) || !Array.isArray(array2)) {
    throw new Error('Ambos os argumentos devem ser arrays válidos.');
  }

  // Chama a função de diferença e exibe o resultado
  const resultado = differenceArray(array1, array2);
  console.log('Diferença entre os arrays:', resultado);
} catch (error) {
  console.error('Erro:', error.message);
}
