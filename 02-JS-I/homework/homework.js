// En estas primeras 6 preguntas, reemplaza `null` por la respuesta

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = "hola";

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 1234;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40 ;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1; //inexacto por 0.05


// En los próximos 22 problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  // "Return" la string provista: str
  // Tu código:
  console.log("Ingrese el texto requerido");
  var str;
  return str;
}

function suma(x, y) {
  // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
  // Tu código:
  console.log("Ingrese 2 numeros a sumar");
  var x, y;
  return x+y;  
}

function resta(x, y) {
  // Resta "y" de "x" y devuelve el valor
  // Tu código:
  console.log("Ingrese 2 numeros a restar");
  var x, y;
  return x-y;
}

function multiplica(x, y) {
  // Multiplica "x" por "y" y devuelve el valor
  // Tu código:
  console.log("Ingrese 2 numeros a multiplicar");
  var x, y;
  return x*y;
}

function divide(x, y) {
  // Divide "x" entre "y" y devuelve el valor
  // Tu código:
  console.log("Ingrese 2 numeros a dividir");
  var x, y;
  return x/y;
}

function sonIguales(x, y) {
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  // Tu código:
  console.log("Ingrese 2 numeros a comparar");
  var x, y;
  if(x===y){
    return true;
  }
    return false;
}

function tienenMismaLongitud(str1, str2) {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  // Tu código:
  console.log("Ingrese una palabra");
  var str1;
  console.log("Ingrese otra palabra para comparar su longitud");
  var str2;

  if(str1.length===str2.length){
    return true;
  }
  return false;
}

function menosQueNoventa(num) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  // De lo contrario, devuelve "false"
  // Tu código:
  console.log("Ingrese un numero");
  var num;
  if(num<90){
    return true;
  }
  return false;
}

function mayorQueCincuenta(num) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
  console.log("Ingrese un numero");
  var num;
  if(num>50){
    return true;
  }
  return false;
}

function obtenerResto(x, y) {
  // Obten el resto de la división de "x" entre "y"
  // Tu código:
  console.log("Ingrese 2 numeros");
  var x, y;
  return x%y;
}

function esPar(num) {
  // Devuelve "true" si "num" es par
  // De lo contrario, devuelve "false"
  // Tu código:
  console.log("Ingrese un numero para saber si es par");
  var num;
  if(num%2===0){
    return true;
  }
  return false;
}

function esImpar(num) {
  // Devuelve "true" si "num" es impar
  // De lo contrario, devuelve "false"
  // Tu código:
  console.log("Ingrese un numero para saber si es par");
  var num;
  if(num%2!==0){
    return true;
  }
  return false;
}

function elevarAlCuadrado(num) {
  // Devuelve el valor de "num" elevado al cuadrado
  // ojo: No es raiz cuadrada!
  // Tu código:
  console.log("ingrese un numero para elevar al cuadrado");
  var num;
  return Math.pow(num, 2);
}

function elevarAlCubo(num) {
  // Devuelve el valor de "num" elevado al cubo
  // Tu código:
  console.log("ingrese un numero para elevar al cubo");
  var num;
  return Math.pow(num, 3);
}

function elevar(num, exponent) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  // Tu código:
  console.log("ingrese la base y el exponente en numeros para elevacion");
  var num, exponent;
  return Math.pow(num, exponent);
}

function redondearNumero(num) {
  // Redondea "num" al entero más próximo y devuélvelo
  // Tu código:
  console.log("ingrese el numero decimal para redondearlo y retornar el entero mas cercano");
  var num;
  return Math.round(num);
}

function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba (al próximo entero) y devuélvelo
  // Tu código:
  console.log("ingrese el numero decimal para redondearlo y retornar el entero mas cercano a la alta");
  var num;
  return Math.ceil(num);
}

function numeroRandom() {
  //Generar un número al azar entre 0 y 1 y devolverlo
  //Pista: investigá qué hace el método Math.random()
  return Math.random()
}

function esPositivo(numero) {
  //La función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo. 
  //Si el número es positivo, devolver ---> "Es positivo"
  //Si el número es negativo, devolver ---> "Es negativo"
  //Si el número es 0, devuelve false
  console.log("ingrese numero para verificar si es positivo o negativo");
  var numero;
  if(numero==0){
    return false;
  }
  else if(numero>0){
    return "Es positivo";
  }
  else return "Es negativo";
}

function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str" y devuelve una nueva string
  // Ejemplo: "hello world" pasaría a ser "hello world!"
  // Tu código:
  console.log("Ingrese el texto deseado");
  var str;
  return str + "!";
}

function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados en una string y separados por un espacio.
  // Ejemplo: "Soy", "Henry" -> "Soy Henry"
  // Tu código:
  console.log("Ingrese nombre");
  var nombre;
  console.log("Ingrese apellido");
  var apellido;
  return nombre+" "+apellido;
}

function obtenerSaludo(nombre) {
  // Toma la string "nombre" y concatena otras string en la cadena para que tome la siguiente forma:
  // "Martin" -> "Hola Martin!"
  // Tu código:
  console.log("Ingrese nombre");
  var nombre;
  var saludo="Hola "+nombre+"!";
  return saludo;
}

function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un rectángulo teniendo su altura y ancho
  // Tu código:
  console.log("Ingrese por favor el alto del rectangulo");
  var alto;
  console.log("Ingrese por favor el ancho del rectangulo");
  var ancho;
  var area=alto*ancho;
  return area;
}


function retornarPerimetro(lado){
  //Escibe una función a la cual reciba el valor del lado de un cuadrado y retorne su perímetro.
  //Escribe tu código aquí
  console.log("Ingrese el tamaño de uno de sus lados");
  var lado;
  return lado*4;
}


function areaDelTriangulo(base, altura){
  //Desarrolle una función que calcule el área de un triángulo.
  //Escribe tu código aquí
  console.log("Ingrese por favor la base del triangulo");
  var base;
  console.log("Ingrese por favor la altura del triangulo");
  var altura;
  var area=(base*altura)/2;
  return area;
}


function deEuroAdolar(euro){
  //Supongamos que 1 euro equivale a 1.20 dólares. Escribe un programa que reciba
  //como parámetro un número de euros y calcule el cambio en dólares.
  //Escribe tu código aquí
  console.log("ingrese la cantidad de euros a convertir");
  var euro;
  return euro*1.20;
}


function esVocal(letra){
  //Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”. 
  //Verificar si el usuario ingresó un string de más de un carácter, en ese caso, informarle 
  //que no se puede procesar el dato mediante el mensaje "Dato incorrecto".
  // Si no es vocal, tambien debe devolver "Dato incorrecto".
  //Escribe tu código aquí
  console.log("Ingrese una letra para determinar si es vocal");
  var letra;
  if(letra==="a"){
    return "Es vocal";
  }if(letra==="e"){
    return "Es vocal";
  }if(letra==="i"){
    return "Es vocal";
  }if(letra==="o"){
    return "Es vocal";
  }if(letra==="u"){
    return "Es vocal";
  }else return "Dato incorrecto";
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  numeroRandom,
  esPositivo,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  retornarPerimetro,
  areaDelTriangulo,
  deEuroAdolar,
  esVocal,
};
