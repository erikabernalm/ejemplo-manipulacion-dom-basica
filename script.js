// console.log('Hello, world');
// Leyendo HTML desde JavaScript
// La forma profesional es crear variables que representen a los selectores de cada elemento de HTML
// La forma de acceder/leer a estos elementos desde JS es muy similar a como se hace en CSS al acceder a las etiquetas, en este caso h1 e input, a las clases como .parrafito y a los ids como #pid...esto para el caso de estar usando la función querySelector()

// const h1 = document.querySelector('h1');
// const p = document.querySelector('p');
// const p = document.querySelectorAll('p');
// const parrafito = document.querySelector('.parrafito');
// const parrafito = document.getElementsByClassName('parrafito'); // Selectores
// const pid = document.querySelector('#pid');
// const pid = document.getElementById('pid');
// const input = document.querySelector('input'); 

// console.log(h1); // Si imprimimos el h1 nos muestra cual es el HTML que renderiza ese selector y nos muestra donde está en el HTML que ya están viendo los usuarios.

// console.log({ 
// 	h1,
// 	p,
// 	parrafito,
// 	pid,
// 	input 
// });

// El console.log() va a interpretar esto como un objeto y lo va a imprimir con todas sus propiedades, es decir con nombre clave y valor.

// console.log(input.value); // En la consola veo algo vacío que hace referencia al input.value

// ¿Qué pasa si escribimos algo en el input como si fueramos usuarios?

// console.log(input.value); Y vuelvo a ejecutar esta línea en la consola...me regresó automáticamente lo que escribí en el input. Leyó eso que los usuarios escribieron en el input y me lo pasó a código JS, en la consola en este caso.  


// Escribiendo y editando HTML desde JavaScript

// h1.innerHTML = 'Patito'; // Estamos cambiando el nombre del título

// h1.innerHTML = 'Patito <br> Feo'; // Escribimos HTML dentro de la etiqueta h1 gracias a la propiedad innerHTML

// h1.innerText = 'Patito <br> Feo'; // Lo interpreta TODO como texto, incluso lo que parecería que es código HTML

// h1.getAttribute('pantalla') // Aquí estamos leyendo el atributo pantalla del h1

// console.log(h1.getAttribute('pantalla'));

// console.log(h1.getAttribute('class')); // En este momento dice null en consola porque AÚN NO existe un atributo llamado class dentro de h1

// h1.setAttribute('class', 'rojo'); // Modifica el atributo. AQUÍ le estamos dando un nuevo valor al atributo. El cambio se ve en el inspector de elementos. 

// h1.classList.add('rojo'); // classList. es específicamente para modificar las clases. En este caso con .add agrega una clase

// h1.classList.remove('verde'); // Elimina una clase...verde es el nombre de la clase

// input.value = 456 // Este será el valor por defecto

// document.createElement('img'); // Crea un elemento HTML
// console.log(document.createElement('img')); // En la consola imprime el HTML de una imagen <img>
// console.log(document.createElement('span')); // Se imprime el HTML de una etiqueta span

// const img = document.createElement('img');
// img.setAttribute('src', 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
// console.log(img);

// pid.append(img); 
// pid.appendChild(img); 

// pid.innerHTML = img; // Estamos reescribiendo mal el HTML. Se borró el contenido anterior.
// pid.innerHTML = ""; // No estamos borrando el párrafo sino su contenido. 
// pid.appendChild(img); // Y luego si hacemos un append() o appendChild() y recargamos...vemos que ya no aparece el contenido de antes sino que ahora aparece la imagen.


// Eventos en JavaScript: interactuando con usuarios
// addEventListener

const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const input1 = document.querySelector('#calculo1'); // Selectores
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

// btn.addEventListener('click', btnOnClick);
btn.addEventListener('click', sumarInputValues);
// form.addEventListener('submit', btnOnClick);
// form.addEventListener('submit', sumarInputValues);

// function btnOnClick() {
//   // console.log('Escuchando el evento de click');
// 	// console.log(input1.value + input2.value); // concatenación
// 	// console.log( parseInt(input1.value) + parseInt(input2.value)); // suma
//   // const sumaInputs = input1.value + input2.value; // concatenación
// 	const sumaInputs = parseInt(input1.value) + parseInt(input2.value); // suma
//   pResult.innerText = "Resultado: " + sumaInputs;
// }

function sumarInputValues(event) {
  // console.log({event});
  // event.preventDefault();
  const sumaInputs = parseInt(input1.value) + parseInt(input2.value);
  pResult.innerText = "Resultado: " + sumaInputs;
}