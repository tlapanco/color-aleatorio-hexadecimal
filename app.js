//GENERAMOS EL VALOR EN HEXADECIMAL DEL COLOR ALEATORIAMENTE
function generarColorHex (){
	let valores = "0123456789ABCDEF";
	let color  = "#";	
	for (let i = 0; i < 6; i++){		
		color += valores[Math.floor(Math.random() * 16)];
	}
	return color;
}

//Guardamos nuestro elemento boton 
const botonGenerar = document.getElementById("btn-generar-color");
//Guardamos nuestro elemento que contiene el valor del color 
const colorLabel = document.getElementById("color-hex");
//Agregamos el evento con una funcion flecha que genera y actualiza el color de fondo 
botonGenerar.addEventListener("click", () => {
	//Guardamos el color generado aleatoriamente
	let color = generarColorHex();
	//Actualizamos el color de fondo de body 
	document.body.style.backgroundColor = color;
	//Actualizamos el contenido de la etiqueta p con el valor en hexadecimal del color
	colorLabel.innerText = color;
});
