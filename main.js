class FizzBuzz{ // creamos la clase FizzBuzz que ya esta como valor en la constante fizz y se creo la función new FizzBuzz
    responder_fizz_buzz(numero){
        if((numero % 3 == 0) && (numero % 5 == 0)){
        return "FizzBuzz";
        }else if (numero % 3 == 0){
            return "Fizz";
        }else if(numero % 5 ==0){
            return "Buzz"
        }
        return numero  
    }                   
};

module.exports = FizzBuzz; // exportar una clase --- Cuando se exporta una clase, siempre va abajo. y cuando se importa va arriba 


