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

// First way

// function evaluate (number) {
//   if (number > 0) {
//     return 'Positivo'
//   } else if (number < 0) {
//     return 'Negativo'
//   } else if (number === 0) {
//     return 'Cero'
//   }
// }

// Second way (with Math.sign +1, -1, 0)

// function evaluate (numero) {
//   const sign = Math.sign(numero)
//   if (sign === 1) {
//     return 'Positivo'
//   } else if (sign === -1) {
//     return 'Negativo'
//   } else if (sign === 0) {
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

// First way

// function letter (letra) {
//   if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {
//     return 'Vocal'
//   } else {
//     return 'Consonante'
//   }
// }

// Second way (with includes)

// function letter (character) {
//   if (character.includes('a') || character.includes('e') || character.includes('i') || character.includes('o') || character.includes('u')) {
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

// const letra1 = 1
// const letra2 = 1
// const letra3 = '1'

// function isEqual (uno, dos) {
//   if (uno === dos) {
//     return true
//   } else {
//     return false
//   }
// }

// console.log(`Los datos letra 1 y letra 2 son iguales? ${isEqual(letra1, letra2)}`)
// console.log(`Los datos letra 1 y letra 3 son iguales? ${isEqual(letra1, letra3)}`)

// Ejercicio 1️⃣2️⃣

/*
  Crea una función llamada isChristmas() que reciba como parámetro una fecha cualquiera (“dia-mes-año”), y verifica si dicha fecha corresponde a Navidad.
    Retorna true. En caso de que sea Navidad.
    Retorna false. En caso de no sea Navidad.
*/

// function isChristmas (fecha) {
//   // const newFecha = fecha
//   if (fecha.includes('25-12')) {
//     return true
//   } else {
//     return false
//   }
// }

// console.log(`La fecha 25-12-2022 es navidad? ${isChristmas('25-12-2022')}`)

// Ejercicio 1️⃣3️⃣

/*
  Crea una función llamada isMinor() que recibe tres parámetros numéricos y evalúe:
    En caso de que alguno de los números sea menor a 10 retorna true.
    En caso de que ninguno de los números sean menores a 10 retorna false.
*/

// Not convinced with the logic

// function isMinor (uno, dos, tres) {
//   if (uno <= 10 && dos <= 10 && tres <= 10) {
//     return false
//   } else if (uno >= 10 || dos >= 10 || tres >= 10) {
//     return true
//   }
// }

// console.log(`Los numeros 1, 5 y 9 retornan: ${isMinor(1, 5, 9)}`)
// console.log(`Los numeros 10, 3 y 4 retornan: ${isMinor(10, 3, 4)}`)
// console.log(`Los numeros 1, 30 y 4 retornan: ${isMinor(1, 30, 4)}`)
// console.log(`Los numeros 12, 39 y 48 retornan: ${isMinor(12, 39, 48)}`)

// Ejercicio 1️⃣4️⃣

/*
  Crea una función llamada whichQuadrant(x,y) que reciba la coordenada de un punto en el plano cartesiano; es decir, recibe dos valores enteros x e y. Evalúe en qué cuadrante se ubica dicho punto.
    Retorne Cuadrante I X > 0 , Y > 0
    Retorne Cuadrante II X < 0 , Y > 0
    Retorne Cuadrante III X < 0 , Y < 0
    Retorne Cuadrante IV X > 0 , Y < 0
*/

// function whichQuadrant (x, y) {
//   if (x > 0 && y > 0) {
//     return 'Cuadrante I'
//   } else if (x < 0 && y > 0) {
//     return 'Cuadrante II'
//   } else if (x < 0 && y < 0) {
//     return 'Cuadrante III'
//   } else if (x > 0 && y < 0) {
//     return 'Cuadrante IV'
//   }
// }

// console.log(`Las cordenadas 2, 3 se encuentran en el cuadrante: ${whichQuadrant(2, 3)}`)
// console.log(`Las cordenadas -2, 3 se encuentran en el cuadrante: ${whichQuadrant(-2, 3)}`)
// console.log(`Las cordenadas -2, -3 se encuentran en el cuadrante: ${whichQuadrant(-2, -3)}`)
// console.log(`Las cordenadas 2, -3 se encuentran en el cuadrante: ${whichQuadrant(2, -3)}`)

// Ejercicio 1️⃣5️⃣

/*
  Necesitamos saber si un empleado recibirá un aumento. Crea una función llamada payRise() que reciba como parámetros sueldo, años de antigüedad y nombre del empleado. Con esos datos evalúe si:
    Si el sueldo es menor a 500 y su antigüedad es igual o mayor a 10 años, retorna “El empleado ‘nombre’, recibirá un aumento del 20%”
    Si el sueldo es menor a 500 y su antigüedad es menor a 10 años, retorna “El empleado ‘nombre’, recibirá un aumento del 5%”
    Si el sueldo es mayor o igual a 500, retorna “El empleado ‘nombre’, no recibirá aumento”
*/

// function payRise (sueldo, antiguedad, nombre) {
//   if (sueldo < 500 && antiguedad >= 10) {
//     return `El empleado ${nombre}, recibirá un aumento del 20%`
//   } else if (sueldo < 500 && antiguedad < 10) {
//     return `El empleado ${nombre}, recibirá un aumento del 5%`
//   } else if (sueldo >= 500) {
//     return `El empleado ${nombre}, no recibirá aumento`
//   }
// }

// console.log(`Sueldo de 400, 11 años de antigüedad, Juan:  ${payRise(400, 11, 'Juan')}`)
// console.log(`Sueldo de 300, 9 años de antigüedad, Roberto:  ${payRise(300, 9, 'Roberto')}`)
// console.log(`Sueldo de 900, 11 años de antigüedad, Maria:  ${payRise(900, 11, 'Maria')}`)

// Ejercicio 1️⃣6️⃣

/*
  Crea una función llamada evaluateGrade() que reciba como parámetro una nota (número) y evalúe la calificación según la nota, retornando:
    Si la nota se encuentra entre 0-3: Retorna Muy deficiente
    Si la nota se encuentra entre 4-5: Retorna Insuficiente
    Si la nota se encuentra entre 6-7: Retorna Bien
    Si la nota se encuentra entre 8-9: Retorna Notable
    Si la nota se encuentra entre 10: Retorna Sobresaliente
*/

// function evaluateGrade (nota) {
//   if (nota >= 0 && nota <= 3) {
//     return 'Muy deficiente'
//   } else if (nota >= 4 && nota <= 5) {
//     return 'Insuficiente'
//   } else if (nota >= 6 && nota <= 7) {
//     return 'Bien'
//   } else if (nota >= 8 && nota <= 9) {
//     return 'Notable'
//   } else if (nota === 10) {
//     return 'Sobresaliente'
//   }
// }

// console.log(`Probar la nota 0: ${evaluateGrade(0)}`)
// console.log(`Probar la nota 6: ${evaluateGrade(6)}`)
// console.log(`Probar la nota 9: ${evaluateGrade(9)}`)

// Ejercicio 1️⃣7️⃣

/*
  Crea una función llamada digits() que recibe como parámetro un número positivo de uno o dos dígitos decimales (3.45), evalúe si el número tiene uno o dos dígitos decimales.
    Retorne Dos dígitos, en caso de que tenga dos dígitos decimales.
    Retorna Un dígito, en caso de que tenga un dígito decimal.
*/

// function digits (numero) {
//   if (typeof numero !== 'number') {
//     return null
//   } else {
//     numero = String(numero).split('.')[1]
//     if (numero.length === 1) {
//       return 'Un dígito'
//     } else if (numero.length === 2) {
//       return 'Dos dígitos'
//     }
//   }
// }

// console.log(`El numero 1.24: ${digits(1.24)}`)
// console.log(`El numero 404.4: ${digits(404.4)}`)
// console.log(`El numero 98.02: ${digits(98.02)}`)

// Ejercicio 1️⃣8️⃣

/*
  Crea una variable llamada idioma, que contenga un array con tres elementos, ‘Español’, ’Inglés’, ’Francés’. Posteriormente crea una función llamada saludo(), que reciba como parámetros un idioma ‘Español’, ’Inglés’, ’Francés’. Y que retorne:
    Retorne Hola hacker, en caso de elegir Español
    Retorne Hello hacker, en caso de elegir Inglés
    Retorne Bonjour hacker, en caso de elegir Francés
*/

// const idioma = ['Español', 'Inglés', 'Francés']

// function saludo (seleccion) {
//   if (typeof (seleccion) !== 'string') {
//     return null
//   }

//   if (seleccion === idioma[0]) {
//     return 'Hola hacker'
//   } else if (seleccion === idioma[1]) {
//     return 'Hello hacker'
//   } else if (seleccion === idioma[2]) {
//     return 'Bonjour hacker'
//   }
// }

// console.log(`Probar Español: ${saludo(idioma[0])}`)
// console.log(`Probar Inglés: ${saludo(idioma[1])}`)
// console.log(`Probar Francés: ${saludo(idioma[2])}`)

// Ejercicio 1️⃣9️⃣

/*
  Crea una función llamada numbersBackwards() que reciba un array de números y retorne los números en orden inverso. Ejemplo:
    [1,2,3,4,5,6,7,8,9,10] →[10,9,8,7,6,5,4,3,2,1]
*/

// const array1 = [2, 5, 6, 8, 3, 4, 9]
// const array2 = [20, 56, 89, 3, 4, 789]
// const array3 = [34, 56, 72, 12, 678, 234]

// function numbersBackwards (array) {
//   return array.reverse()
// }

// console.log(`El siguiente arrat ${array1}, en forma invertida es: ${numbersBackwards(array1)}`)
// console.log(`El siguiente arrat ${array2}, en forma invertida es: ${numbersBackwards(array2)}`)
// console.log(`El siguiente arrat ${array3}, en forma invertida es: ${numbersBackwards(array3)}`)

// Ejercicio 2️⃣0️⃣

/*
  Crea una función llamada numbers() que retorne un array donde se visualicen los números del 1 al 10, y a la vez, una cuenta inversa de 10 a 1
*/

// function number () {
//   const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//   const arrayReverse = [...array]
//   arrayReverse.reverse()
//   arrayReverse.map((e) => array.push(e))
//   return array
// }

// console.log(number())

// Ejercicio 2️⃣1️⃣

/*
  Crea una función llamada teamName() que recibirá dos parámetros,
    El primero será el nombre de equipo (string) y
    El segundo será un array con el nombre de los integrantes.
  Retorna el siguiente mensaje con los parámetros. Hay “número de integrantes” personas en el equipo de “Nombre del equipo”. Ellos son: “Integrantes del equipo”
  Ejemplo:
  Datos de entrada:
    teamName: 'formación'
    people: [ 'Amalia', 'Karla', 'Silvana', 'Manu', 'Jonh', 'Mike'],
  Resultado: Hay 6 personas en el equipo de formación. Ellos son: Amalia,Karla,Silvana,Manu,Jonh,Mike.
*/

// function teamName (nombre, array) {
//   return `Hay ${array.length} personas en el equipo de ${nombre}. Ellos son: ${array.map((e) => e)}.`
// }

// console.log(`Probar América, [Orive Peralta, Memo Ochoa, Cabañas, Roberto Becerra]: ${teamName('América', ['Orive Peralta', 'Memo Ochoa', 'Cabañas', 'Roberto Becerra'])}`)

// Ejercicio 2️⃣2️⃣

/*
  Crea una función llamada square() que reciba como parámetro un arreglo de números positivos y que retorne los elementos elevados al cuadrado
  NOTA: puedes utilizar map()
*/

// function square (array) {
//   return array.map((e) => e * e)
// }

// console.log(`El array [1, 2, 3, 4] con cada elemento al cuadrado es: ${square([1, 2, 3, 4])}`)
// console.log(`El array [40, 78, 19] con cada elemento al cuadrado es: ${square([40, 78, 19])}`)
// console.log(`El array [4, 6, 9, 10] con cada elemento al cuadrado es: ${square([4, 6, 9, 10])}`)

// Ejercicio 2️⃣3️⃣

/*
  Crea una función llamada promedio() que reciba como parámetro un arreglo de números positivos, retorna el promedio de todos los elementos
  NOTA: puedes utilizar forOf()
*/

// function promedio (array) {
//   const initialValue = 0
//   const sum = array.reduce(
//     (previousValue, currentValue) => previousValue + currentValue,
//     initialValue
//   )
//   return sum / array.length
// }

// function promedio1 (array) {
//   let sum = 0
//   for (const num of array) {
//     sum += num
//   }
//   return sum / array.length
// }

// console.log(`${promedio([1, 2, 3, 4])}`)
// console.log(`${promedio1([1, 2, 3, 4])}`)

// Ejercicio 2️⃣4️⃣

/*
  Crea una función llamada farenheitToCelsius() que reciba como parametro los grados farenheit y los convierta a grados centígrados.
*/

// function farenheitToCelsius (grados) {
//   const centigrados = (grados - 32) * (5 / 9)
//   return centigrados
// }

// console.log(`25 grados Farenhei a Centigrados son: ${farenheitToCelsius(25)}`)
// console.log(`40 grados Farenhei a Centigrados son: ${farenheitToCelsius(40)}`)
// console.log(`36 grados Farenhei a Centigrados son: ${farenheitToCelsius(36)}`)

// Ejercicio 2️⃣5️⃣

/*
  Crea una función llamada evaluateLetter() que reciba como parámetro cualquier letra del alfabeto y verifique si es vocal o consonante.
    En caso de ser vocal, devolver "Vocal"
    En caso de ser consonante, devolver "Consonante
*/

// function evaluateLetter (letter) {
//   if (letter.includes('a') || letter.includes('e') || letter.includes('i') || letter.includes('o') || letter.includes('u')) {
//     return 'Vocal'
//   } else {
//     return 'Consonante'
//   }
// }

// console.log(`La letra i es: ${evaluateLetter('i')}`)
// console.log(`La letra u es: ${evaluateLetter('u')}`)
// console.log(`La letra h es: ${evaluateLetter('h')}`)
// console.log(`La letra p es: ${evaluateLetter('p')}`)

// Ejercicio 2️⃣6️⃣

/*
  Crea una función llamada decimalToBinary() que reciba como parámetro un número entero decimal y lo convierta en un número binario retornando su resultado.
*/

function decimalToBinary (num) {
  return num.toString(2)
}

console.log(`El numero 5 a binario es: ${decimalToBinary(5)}`)
console.log(`El numero 67 a binario es: ${decimalToBinary(67)}`)
console.log(`El numero 181 a binario es: ${decimalToBinary(181)}`)
