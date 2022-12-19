const { expect } = require("@jest/globals");
const FizzBuzz = require("../main")

/*
Feature para saber si un número es primo de 3 y 5
* CASO DE USO 1: Cuando el usuario digite un número divisible x 3, el programa devuelve Fizz, 
* CASO DE USO 2: Cuando el usuario digite un número divisible x 5, el programa devuelve Buzz,
* CASO DE USO 3: Cuando el usuario digite un número divisible x 3 y 5 el programa devuelve FizzBuzz,
* CASO DE USO 4: Cuando el usuario digite un número NO divisible x 3 o por el 5, el programa devuelve el número
*/

describe('Test que prueba una función que determina si un número es primo de 3 y 5, usando Assert Expect de Jest', () =>{
    const fizzBuzz = new FizzBuzz();
    
    test('test_devuelve_Fizz_cuando_sea_multiplo_de_3', () =>{
        /*
        GHERKING TEST (GIVEN (ARRAGE) - WHEN (ACT) - THEN (ASSERT))
        CASO DE USO 1:
        * Dado un número
        * Cuando sea multiplo (divisible) por 3
        * Entonces el sistema devolvera como respuesta la palabra Fizz
        */

        // ARRAGE: preparar el escenario:
        const numero = 6; // número que sea multiplo de 3
        const respuesta_esperada = "Fizz"; // Cadena de texto Fizz, lo que queremos
        
        // ACT: Ejecutar el escenario
        const resultado = fizzBuzz.responder_fizz_buzz(numero); // Función que vamos a ejecutar lo que queremos

        // ASSERT: Comprobar el escenario
        expect(resultado).toBe(respuesta_esperada); // toBe compara
    })

    test('test_devuelve_Buzz_cuando_sea_multiplo_de_5', () =>{
        /*
        GHERKING TEST (GIVEN (ARRAGE) - WHEN (ACT) - THEN (ASSERT))
        CASO DE USO 2:
        * Dado un número
        * Cuando sea multiplo (divisible) por 5
        * Entonces el sistema devolvera como respuesta la palabra Buzz
        */

        // ARRAGE: preparar el escenario:
        const numero = 10; 
        const respuesta_esperada = "Buzz"; 
        // ACT: Ejecutar el escenario
        const resultado = fizzBuzz.responder_fizz_buzz(numero); 

        // ASSERT: Comprobar el escenario
        expect(resultado).toBe(respuesta_esperada);
    })

    test('test_devuelve_FizzBuzz_cuando_sea_multiplo_de_3_y_5', () =>{
        /*
        GHERKING TEST (GIVEN (ARRAGE) - WHEN (ACT) - THEN (ASSERT))
        CASO DE USO 1:
        * Dado un número
        * Cuando sea multiplo (divisible) por 3 y 5
        * Entonces el sistema devolvera como respuesta la palabra FizzBuzz
        */

        // ARRAGE: preparar el escenario:
        const numero = 15;
        const respuesta_esperada = "FizzBuzz";
        
        // ACT: Ejecutar el escenario
        const resultado = fizzBuzz.responder_fizz_buzz(numero); 

        // ASSERT: Comprobar el escenario
        expect(resultado).toBe(respuesta_esperada); // toBe compara
    })

    test('test_devuelve_número_cuando_no_sea_multiplo_de_3_y_5', () =>{
        /*
        GHERKING TEST (GIVEN (ARRAGE) - WHEN (ACT) - THEN (ASSERT))
        CASO DE USO 1:
        * Dado un número
        * Cuando no sea multiplo (divisible) por 3 y 5
        * Entonces el sistema devolvera como respuesta el número
        */

        // ARRAGE: preparar el escenario:
        const numero = 8; 
        const respuesta_esperada = numero; 
        
        // ACT: Ejecutar el escenario
        const resultado = fizzBuzz.responder_fizz_buzz(numero); // Función que vamos a ejecutar lo que queremos

        // ASSERT: Comprobar el escenario
        expect(resultado).toBe(respuesta_esperada); // toBe compara
    })
})
