/*Return true if the passed string looks like a valid US phone number.

The user may fill out the form field any way they choose as long as it has the format of a valid US number. The following are 
examples of valid formats for US numbers (refer to the tests below for other variants):

555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555
For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. Your job is to validate or reject 
the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, 
you must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise return false.*/

function telephoneCheck(str) {
  // Expresión regular para validar números de teléfono de EE. UU.
  const regex = /^(1\s?)?(\(\d{3}\)|\d{3})([-\s]?)(\d{3})([-\s]?)(\d{4})$/;

  // Utilizar el método test para verificar si la cadena coincide con la expresión regular
  return regex.test(str);
}

/* function telephoneCheck(str) {: Esto define una función llamada telephoneCheck que toma un solo argumento, str, que es la cadena que 
    deseas validar como un número de teléfono de EE. UU.

const regex = /^(1\s?)?(\(\d{3}\)|\d{3})([-\s]?)(\d{3})([-\s]?)(\d{4})$/;: Aquí se crea una expresión regular (regex) que se utiliza 

para validar el formato del número de teléfono. La expresión regular tiene varias partes:

^(1\s?)?: Esto permite que la cadena comience con "1" opcionalmente, seguido de un espacio opcional. El ? indica que esta parte es 
opcional debido al código de país "1".

(\(\d{3}\)|\d{3}): Esto coincide con tres dígitos entre paréntesis o simplemente tres dígitos sin paréntesis. Los paréntesis son 
opcionales.

([-\s]?): Esto permite un guión o un espacio en blanco opcional después del código de área.

(\d{3}): Esto coincide con tres dígitos para el número de teléfono.

([-\s]?): Esto permite un guión o un espacio en blanco opcional después de los primeros tres dígitos del número.

(\d{4}): Esto coincide con cuatro dígitos para los últimos dígitos del número.

En resumen, esta expresión regular verifica un número que puede comenzar con "1" opcionalmente, luego puede tener un código de 
área de tres dígitos, seguido por un guión o espacio en blanco opcional, seguido por siete dígitos más, también con un guión o espacio en 
blanco opcional.

return regex.test(str);: Utiliza el método test() de la expresión regular para verificar si la cadena str coincide con el patrón definido 
por la expresión regular. Si coincide, devuelve true; de lo contrario, devuelve false.

Entonces, cuando llamas a telephoneCheck() con una cadena, te devolverá true si esa cadena representa un número de teléfono válido en uno 
de los formatos especificados, y false si no lo hace.*/
