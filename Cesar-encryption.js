// Uno de los cifrados más simples y conocidos es el cifrado César, también conocido como cifrado por desplazamiento. En un cifrado por desplazamiento los significados de las letras se desplazan por una cantidad determinada.
//
// Un uso moderno común es el cifrado ROT13, donde los valores de las letras son desplazados por 13 lugares. Así que A ↔ N, B ↔ O y así sucesivamente.
//
// Escribe una función que reciba una cadena codificada en ROT13 como entrada y devuelva una cadena decodificada.
//
// Todas las letras estarán en mayúsculas. No transformes ningún carácter no alfabético (espacios, puntuación, por ejemplo), pero si transmítelos.

function rot13(str) {
  const upperCase = str.toUpperCase();

  const arr = upperCase.split('');
  const reg = /[A-Z]/;

  for (let i = 0; i < arr.length; i++) {
    if (reg.test(arr[i])) {
      let code = arr[i].charCodeAt() - 65; // Resta 65 para mapear A a 0, B a 1, ..., Z a 25
      code = (code + 13) % 26; // Aplica ROT13
      arr[i] = String.fromCharCode(code + 65); // Suma 65 para volver a mapear a caracteres en mayúsculas
    }
  }

  return arr.join('');
}

console.log(rot13('SERr PBQR PNZC'));

/*65 (Restar para mapear a 0): En el conjunto de caracteres ASCII y Unicode, las letras mayúsculas del alfabeto inglés (A-Z) están representadas de 
manera consecutiva comenzando desde el código 65 para 'A', 66 para 'B', 67 para 'C' y así sucesivamente. Al restar 65 del código Unicode de una letra mayúscula, 
se "mapea" el carácter 'A' a 0, 'B' a 1, 'C' a 2 y así sucesivamente. Esto simplifica la implementación del cifrado ROT13, ya que permite realizar la rotación en 
un rango de 0 a 25.

26 (Módulo para mantener en el rango): El alfabeto inglés tiene 26 letras mayúsculas. Cuando aplicas ROT13, estás rotando las letras dentro de este conjunto de 26 
caracteres. Usar el operador % 26 asegura que, después de aplicar la rotación, el resultado siga estando dentro del rango de letras del alfabeto. Esto significa que 
si el resultado es mayor que 25 (por ejemplo, después de aplicar ROT13 a 'Z'), se volverá a empezar desde 'A'.

Entonces, en resumen, restar 65 a los códigos Unicode y aplicar el módulo 26 es una técnica común para implementar ROT13 en mayúsculas porque facilita la rotación 
y asegura que los caracteres cifrados permanezcan dentro del rango del alfabeto.*/
