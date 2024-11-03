async function iterateWithAsyncAwait(values) {
  for (let value of values) {
    console.log(value);
    await delay(1000); // Attente de 1 seconde
  }
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Exemple d'utilisation
const array = [1, 2, 3, 4, 5];
iterateWithAsyncAwait(array);