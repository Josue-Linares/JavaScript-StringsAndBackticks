//En JavaScript, los strings (cadenas de texto) son una secuencia de caracteres encerrados entre comillas simples (''), comillas dobles ("") o backticks (``). Los strings se utilizan para representar y manipular texto en JavaScript.

//Aquí tienes ejemplos de strings utilizando diferentes tipos de comillas:

//para poder usar los backtiks podemos usar la estructura de ${}
var cadena1 = 'Hola'; // Comillas simples
var cadena2 = "mundo"; // Comillas dobles
var cadena3 = `¡Hola ${cadena2}!`; // Backticks


//En el ejemplo anterior, `cadena1` y `cadena2` son strings que utilizan comillas simples y comillas dobles, respectivamente. `cadena3` utiliza backticks, los cuales permiten una funcionalidad adicional llamada "template literals" o "plantillas de texto". 

//Las plantillas de texto (template literals) permiten la interpolación de expresiones dentro de strings utilizando la sintaxis `${expresion}`. Esto facilita la concatenación de variables y expresiones en una cadena de manera más legible y cómoda. Aquí tienes un ejemplo:


var nombre = "Alex";
var saludo = `¡Hola ${nombre}! ¿Cómo estás?`;
console.log(saludo); // Imprime: "¡Hola Alex! ¿Cómo estás?"


//En este caso, la expresión `${nombre}` dentro del string `saludo` se evalúa y se reemplaza por el valor de la variable `nombre`, resultando en la cadena final "¡Hola ALex! ¿Cómo estás?".

//Además de la interpolación de variables, las plantillas de texto también permiten el uso de expresiones y multilinea. Por ejemplo:


var numero = 10;
var resultado = `El doble de ${numero} es ${numero * 2}`;

var textoMultilinea = `
Línea 1
Línea 2
Línea 3
`;


//En resumen, los strings en JavaScript son utilizados para representar y manipular texto, y los backticks permiten la creación de plantillas de texto que facilitan la interpolación de variables y expresiones en cadenas de manera más legible y cómoda.