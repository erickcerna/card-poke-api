console.log('dale like al video');



// Retorna un entero aleatorio entre min (incluido) y max (excluido)
// ¡Usando Math.round() te dará una distribución no-uniforme!

const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min;
  }

console.log(getRandomInt(1, 151));