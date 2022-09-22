// Ejercicio 1
/* Crea una función llamada sum que reciba dos parametros "a" y "b" y regrese la suma de ambos números. Recuerda que para devolver el valor de una función se utiliza la palabra reservada return */

// function sum (a, b) {
//   return a + b
// }

// console.log(`La suma de a y b es igual a: ${sum(1, 2)}`)

// Ejercicio 2
/* Crea una función llamada subs que reste dos parametros "a" y "b" y regrese su resultado. Recuerda que para devolver el valor de una función se utiliza la palabra reservada return */

// function subs (a, b) {
//   return a - b
// }

// console.log(`La resta de a y b es igual a: ${subs(50, 28.5)}`)

// Ejercicio 3
/* Crea una variable llamada cont que sea del tipo entero, después crea otra variable llamada bool que sea del tipo booleano y por último una variable llamada str que sea del tipo string. Recuerda utilizar la palabra reservada var para este ejercicio. */

// const cont = 8
// const bool = true
// const str = 'perro'

// console.log(`La variable cont es igual a: ${cont}`)
// console.log(`La variable bool es igual a: ${bool}`)
// console.log(`La variable str es igual a: ${str}`)

// Ejercicio 4
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

// Ejercicio 5
/* Escribe una función llamada evaluate que reciba como parámetro un número retorne lo siguiente:
        - "Positivo" si el número es positivo.
        - "Negativo" si el número es negativo.
        - "Cero" si el número es cero.
*/

function evaluate (number) {
  if (number > 0) {
    return 'Positivo'
  } else if (number < 0) {
    return 'Negativo'
  } else if (number === 0) {
    return 'Cero'
  }
}

console.log(`El numero 20 es: ${evaluate(20)}`)
console.log(`El numero -38 es: ${evaluate(-38)}`)
console.log(`El numero 0 es: ${evaluate(0)}`)
