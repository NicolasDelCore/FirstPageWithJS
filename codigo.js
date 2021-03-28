//llamamos a la función ejercicio1 con el botón del ejercicio 1
document.querySelector("#botonEj1").addEventListener("click",ejercicio1); // tomamos el elemento con ID botonEj1, le añadimos un listener para "clicks" y cada vez que haya un click, ejecutamos la función "ejercicio1"

//llamamos a la función ejercicio2 con el botón del ejercicio 2
document.querySelector("#botonEj2").addEventListener("click",ejercicio2);

//llamamos a la función ejercicio3 con el botón del ejercicio 3
document.querySelector("#botonEj3").addEventListener("click",ejercicio3);

//llamamos a la función ejercicio4 con el botón del ejercicio 4
document.querySelector("#botonEj4").addEventListener("click",ejercicio4);

//llamamos a la función ejercicio5 con el botón del ejercicio 5
document.querySelector("#botonEj5").addEventListener("click",ejercicio5);

//llamamos a la función ejercicio6 con el botón del ejercicio 6
document.querySelector("#botonEj6").addEventListener("click",ejercicio6);

//llamamos a la función ejercicio7 con el botón del ejercicio 7
document.querySelector("#botonEj7").addEventListener("click",ejercicio7);

//llamamos a la función ejercicio8 con el botón del ejercicio 8
document.querySelector("#botonEj8").addEventListener("click",ejercicio8);

//llamamos a la función ejercicio9 con el botón del ejercicio 9
document.querySelector("#botonEj9").addEventListener("click",ejercicio9);

//llamamos a la función ejercicio10 con el botón del ejercicio 10
document.querySelector("#botonEj10").addEventListener("click",ejercicio10);

//llamamos a la función ejercicio11 con el botón del ejercicio 11
document.querySelector("#botonEj11").addEventListener("click",ejercicio11);

//llamamos a la función ejercicio12 con el botón del ejercicio 12
document.querySelector("#botonEj12").addEventListener("click",ejercicio12);

//llamamos a la función ejercicio13 con el botón del ejercicio 13
document.querySelector("#botonEj13").addEventListener("click",ejercicio13);

clicksE13 = 0; // variable global de clicks que usaremos para el ejercicio 13
//esta variable debe ser global pues si la definimos dentro de la función ejercicio13, su valor volverá a 0 o NaN cada vez que se corra la función

//llamamos a la función ejercicio14 con el botón del ejercicio 14
document.querySelector("#botonEj14").addEventListener("click",ejercicio14);

clicksE14 = 0;

//llamamos a la función ejercicio15 con el botón del ejercicio 15
document.querySelector("#botonEj15").addEventListener("click",ejercicio15);
//llamamos a la función ejercicio15Mostrar para mostrar el resultado
document.querySelector("#botonEj15Mostrar").addEventListener("click",ejercicio15Mostrar);
// variable global, iniciada en 0, para el Ejercicio15
valorAnteriorE15 = 0;
// variable global, iniciada en 0, para el Ejercicio15
valoresSumadosE15 = 0;

//llamamos a la función ejercicio16 con el botón del ejercicio 16
document.querySelector("#botonEj16").addEventListener("click",ejercicio16);

//llamamos a la función ejercicio17 con el botón del ejercicio 17
document.querySelector("#botonEj17").addEventListener("click",ejercicio17);

function ejercicio1(){
    let nombre = document.querySelector("#txtNombre").value; // creamos variable "nombre" y guardamos el valor del elemento con tag #txtNombre
    let apellido = document.querySelector("#txtApellido").value; // creamos variable "apellido" y guardamos el valor del elemento con tag #txtApellido
    let salida = apellido + ", " + nombre; // creamos la variable "salida" y su valor será: el valor de la variable apellido + (textualmente una coma y un espacio) + el valor de nombre
    document.querySelector("#pTextoEj1").innerHTML=salida; // modificamos el HTML del elemento con ID #pSalida en el Index.html para mostrar el resultado de la variable "salida"
}

function ejercicio2(){
    let txtNum1 = document.querySelector("#txtNum1E2").value; // tomamos el valor string del elemento con id txtNum1
    let num1 = parseFloat(txtNum1); // convertimos el valor string guardado en txtNum1 a int, y lo guardamos en la variable num1
    // repetimos las dos líneas anteriores para conseguir el otro valor en forma de entero (int)
    let txtNum2 = document.querySelector("#txtNum2E2").value;
    let num2 = parseFloat(txtNum2);
    let numResultado = num1 + num2; // sumamos los valores enteros de num1 y num2 y guardamos el resultado en numResultado
    document.querySelector("#pTextoEj2").innerHTML="El resultado es: " + numResultado; // mostramos el valor de numResultado en el elemento con ID pTextoEj2
}

function ejercicio3(){
    let txtNum1 = document.querySelector("#txtNum1E3").value; // tomamos el valor string del elemento con id txtNum1
    let num1 = parseFloat(txtNum1); // convertimos el valor string guardado en txtNum1 a int, y lo guardamos en la variable num1
    // repetimos las dos líneas anteriores para conseguir los otros valores en forma de entero (int)
    let txtNum2 = document.querySelector("#txtNum2E3").value;
    let num2 = parseFloat(txtNum2);
    let txtNum3 = document.querySelector("#txtNum3E3").value;
    let num3 = parseFloat(txtNum3);    
    let numResultado = num1 + num2 + num3; // sumamos los valores enteros de num1 y num2 y guardamos el resultado en numResultado
    document.querySelector("#pTextoEj3").innerHTML="El resultado es: " + numResultado; // mostramos el valor de numResultado en el elemento con ID pTextoEj3
}

function ejercicio4(){
    let txtNum1 = document.querySelector("#txtNum1E4").value; // tomamos el valor string del elemento con id txtNum1
    let num1 = parseFloat(txtNum1); // convertimos el valor string guardado en txtNum1 a int, y lo guardamos en la variable num1
    // repetimos las dos líneas anteriores para conseguir el otro valor en forma de entero (int)
    let txtNum2 = document.querySelector("#txtNum2E4").value;
    let num2 = parseFloat(txtNum2);
    let numResultadoSuma = num1 + num2; // sumamos los valores enteros de num1 y num2 y guardamos el resultado en numResultado
    document.querySelector("#pTextoSumaEj4").innerHTML="El resultado de la suma es: " + numResultadoSuma; // mostramos el valor de numResultadoSuma en el elemento con ID pTextoEj4
    let numResultadoMultiplicacion = num1 * num2; // multiplicamos los valores enteros
    document.querySelector("#pTextoMultiplicacionEj4").innerHTML="El resultado de la multiplicación es: " + numResultadoMultiplicacion; // mostramos el valor de numResultadoSuma en el elemento con ID pTextoEj4
}

function ejercicio5(){
    let txtLado = document.querySelector("#txtLadoCuadradoE5").value;
    let valorLado = parseFloat(txtLado);
    let valorArea = valorLado * valorLado;
    document.querySelector("#pTextoAreaEj5").innerHTML="El área del cuadrado es: " + valorArea;
}

function ejercicio6(){
    let txtPeso = document.querySelector("#txtValorPesoE6").value;
    let numPeso = parseFloat(txtPeso);
    let txtDolar = document.querySelector("#txtValorDolarE6").value;
    let numDolar = parseFloat(txtDolar);
    let numPesoADolar = numPeso / numDolar;
    document.querySelector("#pTextoAreaEj6").innerHTML= numPeso + " son " + numPesoADolar + " dólares";
}

function ejercicio7(){
    let txtValor1 = document.querySelector("#txtValor1E7").value;
    let numValor1 = parseFloat(txtValor1);
    let txtValor2 = document.querySelector("#txtValor2E7").value;
    let numValor2 = parseFloat(txtValor2);
    let numResto = numValor1 % numValor2;
    document.querySelector("#pTextoAreaEj7").innerHTML= "El resto de la división es: " + numResto;
}

function ejercicio8(){
    let txtNum1 = document.querySelector("#txtNum1E8").value; // tomamos el valor string del elemento con id txtNum1
    let num1 = parseFloat(txtNum1); // convertimos el valor string guardado en txtNum1 a int, y lo guardamos en la variable num1
    let txtNum2 = document.querySelector("#txtNum2E8").value;
    let num2 = parseFloat(txtNum2);
    let txtNum3 = document.querySelector("#txtNum3E8").value;
    let num3 = parseFloat(txtNum3);    
    let numResultado = num1 + num2 - num3; // sumamos los valores enteros de num1 y num2 y restamos num3, guardamos el resultado en numResultado
    document.querySelector("#pTextoEj8").innerHTML="El resultado es: " + numResultado; // mostramos el valor de numResultado en el elemento con ID pTextoEj3
}

function ejercicio9(){
    let txtNum1 = document.querySelector("#txtNum1E9").value;
    let num1 = parseFloat(txtNum1);
    let txtNum2 = document.querySelector("#txtNum2E9").value;
    let num2 = parseFloat(txtNum2);
    let txtNum3 = document.querySelector("#txtNum3E9").value;
    let num3 = parseFloat(txtNum3);    
    let numResultado = Math.pow(num1, 2) - (num2 + num3);  //Math.pow eleva num1 al cuadrado (2da potencia), luego se resta la suma de num2 y num3
    document.querySelector("#pTextoEj9").innerHTML="El resultado es: " + numResultado;
}

function ejercicio10(){
    let txtImporte = document.querySelector("#importeE10").value;
    let numImporte = parseFloat(txtImporte);
    let txtRecargo = document.querySelector("#recargoE10").value;
    let numRecargo = parseFloat(txtRecargo);
    let recargoASumar = numImporte * numRecargo / 100; // pasamos el porcentaje entrado en numRecargo a pesos
    let precioRecargado = numImporte + recargoASumar; // sumamos el importe original con el recargo
    document.querySelector("#pTextoEj10").innerHTML="El precio con recargo es: $" + precioRecargado;
}


function ejercicio11(){
    let txtImporte = document.querySelector("#importeE11").value;
    let numImporte = parseFloat(txtImporte);
    let ivaCalculo = numImporte * 22 / 100;
    let ivaSumado = numImporte + ivaCalculo;
    document.querySelector("#pTextoEj11").innerHTML="El precio más IVA es: $" + ivaSumado;
}


function ejercicio12(){
    let txtMetros = document.querySelector("#txtMetrosE12").value;
    let numMetros = parseFloat(txtMetros);
    let txtKilos = document.querySelector("#txtKilosE12").value;
    let numKilos = parseFloat(txtKilos);
    let calculoIMC = numKilos / Math.pow(numMetros, 2);
    document.querySelector("#pTextoEj12").innerHTML="El IMC es: " + calculoIMC;
}


function ejercicio13(){
    clicksE13 ++; // aumentamos el valor de la variable global en 1
    document.querySelector("#pTextoEj13").innerHTML="Clicks: " + clicksE13;
}


function ejercicio14(){
    clicksE14 = clicksE14 + 3; // aumentamos el valor de la variable global en 3
    document.querySelector("#pTextoEj14").innerHTML="Clicks: " + clicksE14;
}


function ejercicio15(){
    let txtValorNuevoE15 = document.querySelector("#txtNum1E15").value; // leemos el valor de txtNum1E15 del HTML
    let valorNuevo = parseFloat(txtValorNuevoE15);
    valoresSumadosE15 = valorNuevo + valorAnteriorE15;
    valorAnteriorE15 = valoresSumadosE15; // igualamos valorAnterior al resultado de valoresSumadosE15
}

function ejercicio15Mostrar()
    {
    document.querySelector("#pTextoEj15").innerHTML=valoresSumadosE15; // mostramos el resultado de la función ejercicio15
    }

function ejercicio16(){
    let txtPartidosGanados = document.querySelector("#txtPartidosGanadosE16").value;
    let numPartidosGanados = parseInt(txtPartidosGanados);
    let txtPartidosEmpatados = document.querySelector("#txtPartidosEmpatadosE16").value;
    let numPartidosEmpatados = parseInt(txtPartidosEmpatados);
    numPartidosGanados = numPartidosGanados * 3;
    let puntuacionTotal = numPartidosGanados + numPartidosEmpatados;
    document.querySelector("#pTextoEj16").innerHTML="El puntaje es: " + puntuacionTotal;
}


function ejercicio17()
{
    let txtChirridosPorMinutoE17 = document.querySelector("#chirridosPorMinutoE17").value;
    let numchirridosPorMinutoE17 = parseInt(txtChirridosPorMinutoE17);
    let temperaturaFahrenheit = 50 + ((numchirridosPorMinutoE17-40)/4);
    let temperaturaCelsius = ( temperaturaFahrenheit - 32) / 1.8;
    document.querySelector("#pTextoEj17").innerHTML="La temperatura en Celsius es: " + temperaturaCelsius;
}
