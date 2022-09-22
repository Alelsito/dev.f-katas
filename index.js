// Ejercicio 1️⃣
/* Crea una función llamada sum que reciba dos parametros "a" y "b" y regrese la suma de ambos números. Recuerda que para devolver el valor de una función se utiliza la palabra reservada return */

// function sum (a, b) {
//   return a + b
// }

// console.log(`La suma de a y b es igual a: ${sum(1, 2)}`)

// Ejercicio 2️⃣
/* Crea una función llamada subs que reste dos parametros "a" y "b" y regrese su resultado. Recuerda que para devolver el valor de una función se utiliza la palabra reservada return */

// function subs (a, b) {
//   return a - b
// }

// console.log(`La resta de a y b es igual a: ${subs(50, 28.5)}`)

// Ejercicio 3️⃣
/* Crea una variable llamada cont que sea del tipo entero, después crea otra variable llamada bool que sea del tipo booleano y por último una variable llamada str que sea del tipo string. Recuerda utilizar la palabra reservada var para este ejercicio. */

// const cont = 8
// const bool = true
// const str = 'perro'

// console.log(`La variable cont es igual a: ${cont}`)
// console.log(`La variable bool es igual a: ${bool}`)
// console.log(`La variable str es igual a: ${str}`)

// Ejercicio 4️⃣
/* Crea una función que se llame mayorDeEdad, reciba una edad como parametro y regrese si el usuario es "Mayor de edad" o es "Menor de edad" */

// function mayorDeEdad (edad) {
//   if (edad >= 18) {
//     return 'Mayor de edad'
//   } else if (edad < 18 && edad >= 0) {
//     return 'Menor de edad'
//   }
// }

// console.log(`Pedro que tiene 19 años es: ${mayorDeEdad(19)}`)
// console.log(`Marco que tiene 15 años es: ${mayorDeEdad(15)}`)

// Ejercicio 5️⃣
/* Escribe una función llamada evaluate que reciba como parámetro un número retorne lo siguiente:
        - "Positivo" si el número es positivo.
        - "Negativo" si el número es negativo.
        - "Cero" si el número es cero.
*/

// function evaluate (number) {
//   if (number > 0) {
//     return 'Positivo'
//   } else if (number < 0) {
//     return 'Negativo'
//   } else if (number === 0) {
//     return 'Cero'
//   }
// }

// console.log(`El numero 20 es: ${evaluate(20)}`)
// console.log(`El numero -38 es: ${evaluate(-38)}`)
// console.log(`El numero 0 es: ${evaluate(0)}`)

// Ejercicio 6️⃣
/* Crear un ciclo for o while que almacene en un array llamado pares los numeros pares que hay entre el 0 y el 100, empezando desde 0 */

// V.1 (For)
// const pares = []

// for (let i = 0; i <= 100; i++) {
//   if (i % 2 === 0) {
//     pares.push(i)
//   }
// }

// console.log(pares)

// V.2 (While)
// const pares2 = []

// let number = 0

// while (number <= 100) {
//   if (number % 2 === 0) {
//     pares2.push(number)
//   }
//   number++
// }

// console.log(pares2)

// Ejercicio 7️⃣
/* Crea una función llamada letter ingresar cualquier letra del alfabeto y verifique si es vocal o consonante
    - "Vocal" si la letra es una vocal.
    - "Consonante" si la letra es una consonante
*/

// function letter (letra) {
//   if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
//     return 'Vocal'
//   } else {
//     return 'Consonante'
//   }
// }

// console.log(`La letra a es: ${letter('a')}`)
// console.log(`La letra h es: ${letter('h')}`)

// Ejercicio 8️⃣

/* Crea una función llamada multiple que reciba como parámetro un número para evaluar si un número es divisible entre 5 y 11 o no lo es. En caso de ser divisible entre 5 y 11, retornar true En caso de no ser divisible entre 5 y 11, retornar false */

// function multiple (numero) {
//   if (numero % 5 === 0 && numero % 11 === 0) {
//     return true
//   } else {
//     return false
//   }
// }

// console.log(`El numero 55 es multiplo de 5 y de 11? ${multiple(55)}`)
// console.log(`El numero 3 es multiplo de 5 y de 11? ${multiple(3)}`)

// Ejercicio 9️⃣

/* Crea una función llamada largest que reciba como parámetro un arreglo de números, esta función debe retornar el número más grande del arreglo. */

// Version corta

// const numeros = [4, 213, 78, 1, 5, 8]

// function largest (numeros) {
//   return Math.max(...numeros)
// }

// console.log(`El numero mas grande del array ${numeros} es: ${largest(numeros)}`)

// Version larga

// let mayor = 0

// function largest (numeros) {
//   for (let i = 0; i < numeros.length; i++) {
//     if (numeros[i] > mayor) {
//       mayor = numeros[i]
//     }
//   }
//   return mayor
// }

// console.log(`El numero mas grande del arreglo ${numeros} es: ${largest(numeros)}`)

// Ejercicio 🔟

// function game (jugador1, jugador2) {
//   if (jugador1 === 'Piedra' && jugador2 === 'Papel') {
//     return 'J2'
//   } else if (jugador1 === 'Piedra' && jugador2 === 'Tijeras') {
//     return 'J1'
//   } else if (jugador1 === 'Piedra' && jugador2 === 'Piedra') {
//     return 'Empate'
//   } else if (jugador1 === 'Papel' && jugador2 === 'Piedra') {
//     return 'J1'
//   } else if (jugador1 === 'Papel' && jugador2 === 'Tijeras') {
//     return 'J2'
//   } else if (jugador1 === 'Papel' && jugador2 === 'Papel') {
//     return 'Empate'
//   } else if (jugador1 === 'Tijeras' && jugador2 === 'Piedra') {
//     return 'J2'
//   } else if (jugador1 === 'Tijeras' && jugador2 === 'Papel') {
//     return 'J1'
//   } else if (jugador1 === 'Tijeras' && jugador2 === 'Tijeras') {
//     return 'Empate'
//   }
// }

// console.log(`Jugador1: Piedra vs Jugador 2: Papel quien gana? ${game('Piedra', 'Papel')}`)

// Ejercicio 1️⃣1️⃣

/*
  Crea una función llamada isEqual() que reciba dos parámetros y evalúe si estos son iguales.
  Retorna true. Si los dos parámetros son iguales retorna true.
  Retorna false. Si los dos parámetros son diferentes retorna false.
  Ten en cuenta que deben de ser iguales tanto en valor como tipo de dato.
*/

const letra1 = 1
const letra2 = 1
const letra3 = '1'

function isEqual (uno, dos) {
  if (uno === dos) {
    return true
  } else {
    return false
  }
}

console.log(`Los datos letra 1 y letra 2 son iguales? ${isEqual(letra1, letra2)}`)
console.log(`Los datos letra 1 y letra 3 son iguales? ${isEqual(letra1, letra3)}`)
